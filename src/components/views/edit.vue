<style scoped>
.cube,.daily{margin:10px auto 20px; width:1200px; box-shadow:0 4px 10px -4px rgba(0,0,0,.15); -webkit-box-shadow:0 4px 10px -4px rgba(0,0,0,.15); background-color:#fff; position:relative;}
.cube{padding:10px 20px 10px 28px; margin:20px auto 10px; border:1px solid #C9D8DB; position:relative;}
.cube:after{content:""; display:block; height:61px; width:8px; background-color:#0F97F9; position:absolute; left:-1px; top:-1px;}
.cube .t{line-height:40px; font-size:16px; color:#666; font-weight:bold;}
.cube .tit .cell{padding:0 30px 0 20px; position:relative;}
.cube .tit input{height:40px; line-height:40px; display:block; padding:0 40px 0 15px; width:100%; border:1px solid #eee; transition:box-shadow .3s; -webkit-transition:box-shadow .3s;}
.cube .tit .cell .color{height:20px; width:20px; position:absolute; right:40px; top:10px;}
.cube .tit input:focus{box-shadow:0 0 5px rgba(0,0,0,0.08) inset; -webkit-box-shadow:0 0 5px rgba(0,0,0,0.08) inset;}
.cube .colors{height:40px; padding:0 15px;}
.cube .colors .cell{width:40px; height:40px; padding:10px;}
.cube .colors .cell i{display:block; width:100%; height:100%; border-radius:50%; background-color:#0067A6; transition:all .3s; -webkit-transition:all .3s;}
.cube .colors .cell i:hover{transform:scale3d(1.3, 1.3, 1); -webkit-transform:scale3d(1.3, 1.3, 1); box-shadow:0 1px 4px -1px rgba(0,0,0,.4);}
.cube .btn{width:94px; height:40px; line-height:40px; text-align:center; color:#FFF; background-color:#0f97f9; margin:0 5px; transition:background-color .3s; -webkit-transition:background-color .3s;}
.cube .btn:hover{background-color:#0067A6;}
.daily .back{position:absolute; right:15px; top:0; line-height:40px; z-index:99; color:#999; cursor:pointer;}
</style>
<template>
  <div class="edit">
    <div class="cube row" v-bind:style="{animation: shakeAnimate}">
      <div class="cell row tit">
        <div class="t">文章标题</div>
        <div class="cell">
          <input type="text" value="" v-el:title/>
          <div class="color" style="background-color:#ccc" v-el:emotion></div>
        </div>
      </div>
      <div class="t">选择心情颜色</div>
      <ul class="row colors" @click="setColor">
        <li class="cell"><i style="background-color:#0067A6"></i></li>
        <li class="cell"><i style="background-color:#008972"></i></li>
        <li class="cell"><i style="background-color:#EFC028"></i></li>
        <li class="cell"><i style="background-color:#F3572E"></i></li>
        <li class="cell"><i style="background-color:#5B4947"></i></li>
        <li class="cell"><i style="background-color:#F4F3DE"></i></li>
        <li class="cell"><i style="background-color:#F29C9B"></i></li>
      </ul>
      <button class="btn" @click="public">点击发布</button>
    </div>
    <div class="daily">
      <textarea id="editor" placeholder="开始撰写您的日志(图片尺寸宽度不得超过1130px)…" v-el:content></textarea>
    </div>
  </div>
</template>

<script>
import Firebase from 'firebase'
import Simditor from 'simditor'
const api = new Firebase('https://zenway.firebaseio.com/')

export default {
  name: 'edit',
  props: {
    user: ''
  },
  data () {
    return {
      article: null,
      shakeAnimate: ''
    }
  },
  events: {
    setUser: function(params){
      this.user = params;
    },
  },
  ready () {
    var toolbar = ['title', 'bold', 'italic', 'underline', 'strikethrough', 'fontScale', 'color', '|', 'ol', 'ul', 'blockquote', 'code', 'table', '|', 'link', 'image', 'hr', '|', 'indent', 'outdent', 'alignment'];
    this.editor = new Simditor({
      textarea: $('#editor'),
      toolbar: toolbar,
      defaultImage: 'http://7naqun.com1.z0.glb.clouddn.com/user.jpg'
    });
  },
  beforeDestroy () {
    this.editor.destroy();
  },
  methods: {
    setColor: function(event){
      var elem = event.target;
      if(elem.tagName.toLowerCase() == 'i'){
        this.$els.emotion.style.backgroundColor = elem.style.backgroundColor;
      };
    },
    goback: function(){
      history.back();
    },
    shakeBox: function(){
      var tmpTimer;
      var view = this;
      view.shakeAnimate = "";
      tmpTimer = setTimeout(function(){
        view.shakeAnimate = 'shake .3s';
        clearTimeout(tmpTimer);
      },200);
    },
    formatHtml: function(str){  
      var ctx = str.replace(/<[^>]+>|&nbsp;/g,"").replace();//去掉所有的html标记
      if(ctx.length > 300){
        ctx = ctx.substring(0,300) + "…";
      }
      return ctx;
    },
    formatDate: function(t){
      var time = new Date(t*1);
      var y = time.getFullYear();
      var m = time.getMonth()+1;
      m<9 ? (m = '0' + m) : null;
      var d = time.getDate();
      d<9 ? (d = '0' + d) : null;
      var h = time.getHours();
      h<9 ? (h = '0' + h) : null;
      var n = time.getMinutes();
      n<9 ? (n = '0' + n) : null;
      var str = y +'-'+ m +'-'+ d +' '+ h +':'+ n;
      return {
        time: str,
        yearMonth: y+m
      };
    },
    public: function(){
      var view = this;
      var color = this.$els.emotion.style.backgroundColor;
      var title = this.$els.title.value;
      var content = this.$els.content.value;
      var snapshot = this.formatHtml(content);
      var timeStamp = (new Date()).getTime();
      var fmt = this.formatDate(timeStamp);
      var time = fmt.time;
      var yearMonth = fmt.yearMonth;
      if(title && content){
        var item = {};
        var article = {};
        article[timeStamp] = {
          "title": title,
          "content": content 
        };
        item[timeStamp] = {
          "color" : color,
          "snapshot" : snapshot,
          "title" : title,
          "time" : time,
          "timeStamp": timeStamp
        }
        view.$dispatch('waitPanel', true);
        var curNote = this.user +'/note/';
        //判断是否有该月份
        api.child(curNote).once('value',function(snapshot){
          if(!snapshot.hasChild(yearMonth)){
            var newArr = {};
            newArr[yearMonth] = {};
            api.child(curNote).update(newArr);
          }
          api.child(curNote +'/'+ yearMonth).update(item, function(err){
            if(err){
              view.$dispatch('waitPanel', false);
              view.$dispatch('error', '发布失败');
            }else{
              view.$dispatch('waitPanel', false);
              api.child(view.user +'/article').update(article, function(err){
                if(err){
                  view.$dispatch('waitPanel', false);
                  view.$dispatch('error', '发布失败');
                }else{
                  view.$dispatch('waitPanel', false);
                  window.confirms('消息提示','发布成功！是否返回到文章列表页面？',function(){
                    router.go({path: 'note'});
                  },function(){
                    //清空编辑区域
                    view.$els.title.value = "";
                    view.$els.emotion.style.backgroundColor = "#ccc";
                    $('.daily .simditor-body').html("");
                  })
                }
              })
            }
          })
        })
      }else{
        this.shakeBox();
        view.$dispatch('error', '请填写标题和内容');
      }
    } 
  }
}
</script>