<template>
  <div class="uploader" :class="{'active': state}" v-el:uploader>
    <div class="icon" v-el:uploadicon title="点击显示或隐藏" @click="change"></div>
      <div class="pan" id="uploader">
        <div class="link">
            <i id="copyLnkBtn" title="点击复制到剪贴板" data-clipboard-target="lnk_text" data-clipboard-text=""></i>
            <input type="text" value="" id="lnk_text" v-el:upload-link @copy="copyLnk" readonly="" onfocus="this.select();"/>
          </div>
          <div class="size">
            <input type="text" placeholder="宽" v-el:upload-width onfocus="this.value=''" @keyup="kusize"/>
              <div>×</div>
              <input type="text" placeholder="高" v-el:upload-height onfocus="this.value=''" @keyup="kusize"/>
          </div>
          <button id="pickfiles" v-show="uploadState">上传图片</button>
          <div class="progress" v-el:upload-progress data-percent="0%" v-else>
            <div class="bar" v-el:upload-progress-bar></div>
          </div>
      </div>
    </div>
</template>

<script>
import CryptoJS from 'crypto-js'
import Qiniu from '../libs/qiniu';
export default {
  name: 'AppUploader',
  data () {
    return {
      state: false,
      uploadState: true,
      dragState: false
    }
  },
  ready () {
    var view = this;
    var elem = $(view.$els.uploadicon);
    var target = $(view.$els.uploader);
    var win = $(window);
    var startX = 0;
    var startY = 0;
    var moveFlag = false,
        pozX,
        pozY;
    elem.mousedown(function(e){
        view.dragState = false;
        target.css({transition: 'none', '-webkit-transition': 'none'}); 
        moveFlag = true;
        var offset = target.offset();
        pozX = e.pageX - offset.left;
        pozY = e.pageY - offset.top;
        startX = e.pageX;
        startY = e.pageY;
    });
    win.mousemove(function(e){
      if(moveFlag){
        var x = e.pageX - pozX,
            y = e.pageY - pozY - $(window).scrollTop(),
        maxX = win.width() - target.width(),
        MaxY = win.height() - target.height();
        if(x > maxX){
            x = maxX;
        }else if(x < 0){
            x = 0
        };
        if(y < 0){
            y = 0
        }else if(y > MaxY){
            y = MaxY
        };
        if(Math.abs(e.pageX - startX) > 5 || Math.abs(e.pageY - startY) > 5){
          view.dragState = true;
        }
        target.css({top:y + 'px', left:x + 'px'});
      }
    });
    win.mouseup(function(){
        target.css({transition: '', '-webkit-transition': ''}); 
        moveFlag = false;
        startX = 0;
        startY = 0;
    });
    
    function utf16to8(str) {
        var out, i, len, c;
        out = "";
        len = str.length;
        for (i = 0; i < len; i++) {
            c = str.charCodeAt(i);
            if ((c >= 0x0001) && (c <= 0x007F)) {
                out += str.charAt(i)
            } else if (c > 0x07FF) {
                out += String.fromCharCode(0xE0 | ((c >> 12) & 0x0F));
                out += String.fromCharCode(0x80 | ((c >> 6) & 0x3F));
                out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F))
            } else {
                out += String.fromCharCode(0xC0 | ((c >> 6) & 0x1F));
                out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F))
            }
        }
        return out
    }
    function utf8to16(str) {
        var out, i, len, c;
        var char2, char3;
        out = "";
        len = str.length;
        i = 0;
        while (i < len) {
            c = str.charCodeAt(i++);
            switch (c >> 4) {
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
                out += str.charAt(i - 1);
                break;
            case 12:
            case 13:
                char2 = str.charCodeAt(i++);
                out += String.fromCharCode(((c & 0x1F) << 6) | (char2 & 0x3F));
                break;
            case 14:
                char2 = str.charCodeAt(i++);
                char3 = str.charCodeAt(i++);
                out += String.fromCharCode(((c & 0x0F) << 12) | ((char2 & 0x3F) << 6) | ((char3 & 0x3F) << 0));
                break
            }
        }
        return out
    }
    var base64EncodeChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";
    var base64DecodeChars = new Array( - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1);
    function base64encode(str) {
        var out, i, len;
        var c1, c2, c3;
        len = str.length;
        i = 0;
        out = "";
        while (i < len) {
            c1 = str.charCodeAt(i++) & 0xff;
            if (i == len) {
                out += base64EncodeChars.charAt(c1 >> 2);
                out += base64EncodeChars.charAt((c1 & 0x3) << 4);
                out += "==";
                break
            }
            c2 = str.charCodeAt(i++);
            if (i == len) {
                out += base64EncodeChars.charAt(c1 >> 2);
                out += base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
                out += base64EncodeChars.charAt((c2 & 0xF) << 2);
                out += "=";
                break
            }
            c3 = str.charCodeAt(i++);
            out += base64EncodeChars.charAt(c1 >> 2);
            out += base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
            out += base64EncodeChars.charAt(((c2 & 0xF) << 2) | ((c3 & 0xC0) >> 6));
            out += base64EncodeChars.charAt(c3 & 0x3F)
        }
        return out
    }
    function base64decode(str) {
        var c1, c2, c3, c4;
        var i, len, out;
        len = str.length;
        i = 0;
        out = "";
        while (i < len) {
            do {
                c1 = base64DecodeChars[str.charCodeAt(i++) & 0xff]
            } while ( i < len && c1 == - 1 );
            if (c1 == -1) break;
            do {
                c2 = base64DecodeChars[str.charCodeAt(i++) & 0xff]
            } while ( i < len && c2 == - 1 );
            if (c2 == -1) break;
            out += String.fromCharCode((c1 << 2) | ((c2 & 0x30) >> 4));
            do {
                c3 = str.charCodeAt(i++) & 0xff;
                if (c3 == 61) return out;
                c3 = base64DecodeChars[c3]
            } while ( i < len && c3 == - 1 );
            if (c3 == -1) break;
            out += String.fromCharCode(((c2 & 0XF) << 4) | ((c3 & 0x3C) >> 2));
            do {
                c4 = str.charCodeAt(i++) & 0xff;
                if (c4 == 61) return out;
                c4 = base64DecodeChars[c4]
            } while ( i < len && c4 == - 1 );
            if (c4 == -1) break;
            out += String.fromCharCode(((c3 & 0x03) << 6) | c4)
        }
        return out
    }
    var safe64 = function(base64) {
        base64 = base64.replace(/\+/g, "-");
        base64 = base64.replace(/\//g, "_");
        return base64
    };
    var genUpToken = function(accessKey, secretKey, putPolicy) {
        var put_policy = JSON.stringify(putPolicy);
        var encoded = base64encode(utf16to8(put_policy));
        var hash = CryptoJS.HmacSHA1(encoded, secretKey);
        var encoded_signed = hash.toString(CryptoJS.enc.Base64);
        var upload_token = accessKey + ":" + safe64(encoded_signed) + ":" + encoded;
        return upload_token
    };
    var expire = 1; //小时
    var deadline = Math.round(new Date().getTime() / 1000) + expire * 3600
    var uploadtoken = genUpToken('muLn3aJdbU8OJqBwE45EOS-yJD5NMJyqqHInMQsS', 'FdrcsX1DNfvdachDxhLusTPFMwoZxiHoDQ6BOXlu', {
        "scope": "picur",
        "deadline": deadline,
    });
    var uploader = Qiniu.uploader({
        runtimes: 'html5,flash,html4',
        browse_button: 'pickfiles',
        uptoken: uploadtoken,
        save_key: true,
        domain: 'http://picur.qiniudn.com/',
        container: 'uploader',
        max_file_size: '4mb',
        flash_swf_url: 'http://plug.qiniudn.com/Moxie.swf',
        max_retries: 3,
        dragdrop: false,
        //drop_element: 'container',
        chunk_size: '4mb',
        auto_start: true,
        init: {
          'FilesAdded': function(up, files) {
              var size = files.length - 1;
              plupload.each(files,
              function(file, i) {
                  if (i < size) {
                      uploader.removeFile(file);
                  }
                  if (file.type.split('/')[0] != "image") {
                      view.$dispatch('error', '请选择正确格式图片');
                      uploader.removeFile(file);
                  }
              })
          },
          'BeforeUpload': function(up, file) {
              view.uploadState = false;
              view.setProgress(0);
              view.setLnk('');
          },
          'UploadProgress': function(up, file) {
            view.setProgress(file.percent);
          },
          'FileUploaded': function(up, file, info) {
              view.setLnk(up.getOption('domain') + $.parseJSON(info).key);
              view.setSize();
          },
          'Error': function(up, err, errTip) {
              view.$dispatch('error', errTip);
          },
          'UploadComplete': function() {
              view.uploadState = true;
          },
          'Key': function(up, file) {
              var key = "";
              return key
          }
      }
    });
    //点击复制链接地址
    var clip = new ZeroClipboard($('#copyLnkBtn'));
    clip.on('ready', function(){
      //console.log('Flash文件已经准备完成');
      this.on('aftercopy', function(event){
        //console.log('已经复制剪贴板：' + event.data['text/plain']);
        event.data['text/plain'] && view.$dispatch('toast', '链接已复制');
      });
    });
    clip.on('error', function(event){
      console.log('error[name="' + event.name + '"]: ' + event.message);
      ZeroClipboard.destroy();
    });
  },
  methods: {
    change: function(){
      if(this.dragState) return;
      this.state ? this.state = false : this.state = true;
      this.$els.uploadLink.value = this.$els.uploadHeight.value = this.$els.uploadWidth.value = '';
    },
    setProgress: function(num){
      this.$els.uploadProgress.setAttribute('data-percent', num+'%');
      this.$els.uploadProgressBar.style.width = num + '%';
    },
    setLnk: function(src){
      this.$els.uploadLink.value = src;
    },
    setSize: function(){
      var w = this.$els.uploadWidth.value;
      var h = this.$els.uploadHeight.value;
      var cur = this.$els.uploadLink.value;
      if(w && h && cur){
        var str = '?imageView2/1/w/'+ w +'/h/'+ h +'/q/100';
        if(cur.indexOf('?')){
          cur = cur.split('?')[0] + str;
        }else{
          cur += str;
        }
        this.$els.uploadLink.value = cur;
      }
    },
    kusize: function(event){
      var elem = event.target;
      elem.value=elem.value.replace(/\D/g,'');
      this.setSize();
    },
    copyLnk: function(){
      this.$dispatch('toast', '链接已复制');
    }
  }
}
</script>