<style>
body,div,dl,dt,dd,*:not(.daily) ul,*:not(.daily) li,h1,h2,h3,h4,h5,h6,pre,code,form,fieldset,legend,input,textarea,p,blockquote,th,td,header,hgroup,nav,section,article,aside,footer,figure,figcaption,menu,button{margin:0;padding:0;outline:0}body{font-family:"Helvetica Neue",Helvetica,STHeiTi,sans-serif;line-height:1.5;color:#333;background-color:#fff;/*-webkit-user-select:none;*/-webkit-text-size-adjust:none;-webkit-tap-highlight-color:rgba(255,255,255,0)}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:normal}table{border-collapse:collapse;border-spacing:0}fieldset,img{border:0}li{list-style:none}input,button,textarea,select{font-family:inherit;font-size:inherit;font-weight:inherit;border:0;background:0;-webkit-appearance:none;outline:0}a,button,input,select,textarea,a:focus,button:focus,input:focus,select:focus,textarea:focus,[onclick]{outline:0;-webkit-tap-highlight-color:rgba(255,255,255,0)}a{-webkit-touch-callout:none;text-decoration:none;color:#00a5e0;outline:0}em,i{font-style:normal}em{color:#f28c48}::-webkit-input-placeholder{color:#999}i,b{font-style:normal; font-weight:normal;}
.wrap{visibility:visible !important;}
body{font:14px/1.5 "Helvetica Neue",Helvetica,Arial,"Microsoft Yahei","Hiragino Sans GB","Heiti SC","WenQuanYi Micro Hei",sans-serif;color:#333;background-color:#F6F7FB;min-width:1226px}a{color:#757575;text-decoration:none}a:hover{color:#ff6700;text-decoration:none}
*,*:after{-webkit-box-sizing:border-box; box-sizing:border-box;}
.daily ul li{list-style:inside;}
.daily ol li{list-style:decimal;}
.console{display:none;}
.switch-enter{animation:switch-in .2s;}
.switch-leave{animation:switch-out .2s;}

@-webkit-keyframes switch-in{
  0% {opacity:0;}
  100% {opacity:1;}
}
@keyframes switch-in{
  0% {opacity:0;}
  100% {opacity:1;}
}

@-webkit-keyframes switch-out{
  0% {opacity:1;}
  100% {opacity:0;}
}

@keyframes switch-out{
  0% {opacity:1;}
  100% {opacity:0;}
}
.row{display:box; display:-webkit-box;}
.row >.cell{-webkit-box-flex:1; box-flex:1;}

header{height:80px; width:100%; visibility:visible;}
.header{width:100%; height:80px; line-height:80px; background-color:rgba(255,255,255,1); text-align:center; color:#adadad; box-shadow:0 3px 8px -4px rgba(0,0,0,0.15); -webkit-box-shadow:0 3px 8px -4px rgba(0,0,0,0.15); box-sizing:border-box; transition:background-color .3s; -webkit-transition:background-color .3s;}
.header .logo{height:80px; padding:0 35px; position:absolute; left:0; top:0; z-index:9;}
.header .logo img{vertical-align:middle;}
.header .center{display:flex; justify-content:center; position:absolute; top:0; left:0; right:0;}
.header .guide{float:left; list-style:none;}
.header .guide li{list-style:none; float:left; position:relative; display:list-item; text-align:-webkit-match-parent; padding:0 15px; cursor:default; transition:color .3s; -webkit-transition:color .3s;}
.header .guide li:hover,header .guide li.active{color:#525255;}
.header .content{display:flex; -webkit-align-items:center; align-items:center; height:80px; padding:0 15px; float:left; position: relative;}
.header .content ul{display:-ms-flexbox; display:-webkit-flex; display:flex; -ms-flex-wrap:wrap; -webkit-flex-wrap:wrap; flex-wrap:wrap; margin:0; padding:0 0 0 30px; border-left:1px solid rgba(200,200,200,0.4); list-style:none;}
.header .content ul li{margin-right:15px; float:left; position:relative;}
.header .content ul li a{display:block; vertical-align:middle; width:26px; height:20px; background:url("assets/img/weibo.svg") center center no-repeat; background-size:auto 100%; opacity:0.3; transition:opacity .3s; -webkit-transition:opacity .3s;}
.header .content ul li a.qzone{background-image:url("assets/img/qzone.svg");}
.header .content ul li a.wechat{background-image:url("assets/img/wechat.svg");}
.header .content ul li a.reg{background-image:url("assets/img/reg.svg");}
.header .content ul li a:hover{opacity:1;}
.header .content ul li .qrcode{position:absolute; left:50%; top:30px; height:180px; width:180px; margin-left:-90px; background-color:#FFF; z-index:999; border:1px solid #f4f4f4; box-shadow:0 4px 10px -2px rgba(0,0,0,0.26); -webkit-box-shadow:0 4px 10px -2px rgba(0,0,0,0.26); display:none;}
.header .content ul li .qrcode.show{display:block; animation:flipInY .6s; -webkit-animation:flipInY .6s;}
.header .content ul li .qrcode img{display:block; width:100%; height:100%;}
.header .sign{position:absolute; right:0; top:0; z-index:8; padding:0 35px; height:80px;}
.header .sign a{display:inline-block; background-color:#489be0; color:#fff; padding:0 15px; height:36px; line-height:36px; vertical-align:middle; transition:background-color .3s; -webkit-transition:background-color .3s;}
.header .sign a:hover{background-color:#3589cf;}
.header.fixed{position:fixed; left:0; top:0; z-index:9999; animation:fadeInTop .3s; -webkit-animation:fadeInTop .3s; background-color:rgba(255,255,255,.8);}
footer{height:160px; width:100%; clear:both; margin-top:42px;}
.footer{width:100%; background-color:#19151f; padding:60px 30px; position:absolute; left:0; bottom:0;}
footer .clip{width:100%; height:32px; position:absolute; right:0; top:-32px; position:absolute; overflow:hidden;}
footer .backTop{width:56px; height:32px; background:#19151f url("assets/img/arr.svg") center center no-repeat; background-size:24px auto; position:absolute; right:40px; ottom:-2px; border-top-left-radius:5px; border-top-right-radius:5px; cursor:pointer; box-shadow:4px 4px 10px rgba(0,0,0,.3); -webkit-box-shadow:4px 4px 10px rgba(0,0,0,.3);}
footer .fix{width:100%; ms-flex-pack:justify; -webkit-justify-content:space-between; justify-content:space-between; -ms-flex-align:center; -webkit-align-items:center; align-items:center; display:-ms-flexbox; display:-webkit-flex; display:flex;}
footer .right{color:#fff; text-align:right;}
footer .right a{opacity:0.7; color:#fff; margin-left:20px; transition:opacity .3s; -webkit-transition:opacity .3s;}
footer .right a:hover{opacity:1;}

@-webkit-keyframes fadeInTop{
  0%{opacity:0; -webkit-transform:translate3d(0, -100%, 0); transform:translate3d(0, -100%, 0);}
  100%{opacity:1; -webkit-transform:translate3d(0, 0, 0); transform:translate3d(0, 0, 0);}
}
@keyframes fadeInTop{
  0%{opacity:0; -webkit-transform:translate3d(0, -100%, 0); transform:translate3d(0, -100%, 0);}
  100%{opacity:1; -webkit-transform:translate3d(0, 0, 0); transform:translate3d(0, 0, 0);}
}
.loginBox{width:100%; height:100%; background-color:rgba(0,0,0,0.6); position:fixed; z-index:9000; left:-300%; top:0; visibility:hidden;}
.loginBox.show{left:0; visibility:visible;}
.loginBox.show .box{animation:zoomIn .3s; -webkit-animation:zoomIn .3s;}
.loginBox .box{height:308px; width:366px; position:absolute; left:50%; top:50%; margin:-197px 0 0 -183px;}
.loginBox .box >div{width:100%; height:100%; padding:50px; background-color:#FFF; border-radius:3px; box-shadow:0 6px 14px -2px rgba(0,0,0,.4); -webkit-box-shadow:0 6px 14px -2px rgba(0,0,0,.4);}
.loginBox .box input[type=button]{display:block; height:56px; line-height:56px; text-align:center; background-color:#398ce6; font-size:18px; color:#FFF; position:absolute; bottom:26px; left:50%; transition:all .6s; -webkit-transition:all .6s; cursor:pointer; border-radius:3px; width:310px; margin-left:-155px; text-shadow:0 1px 0 rgba(0,0,0,.08);}
.loginBox .box input[type=button]:hover{background-color:#398ce6; -webkit-transform:translate3d(0, -2px, 0); transform:translate3d(0, -2px, 0); box-shadow:0 8px 16px rgba(0,144,255,.3); -webkit-box-shadow:0 8px 16px rgba(0,144,255,.3);}
.loginBox .box input[type=text],
.loginBox .box input[type=password]{width:100%; display:block; height:46px; line-height:46px; border-bottom:1px solid #efefef; margin-bottom:52px; font-size:16px;}
.loginBox.regBox .box{height:350px; margin-top:-180px;}
.loginBox.regBox .box input[type=text],
.loginBox.regBox .box input[type=password]{margin-bottom:28px;}
.loginBox .box .close{display:block; height:24px; width:24px; position:absolute; right:16px; top:16px; background:url("assets/img/close.svg") no-repeat; background-size:100%; cursor:pointer;}
.alignItem{-webkit-align-items:center; -webkit-box-align:center; -ms-flex-align:center; align-items:center;}
@-webkit-keyframes zoomIn{
  0%{opacity:0; -webkit-transform:scale3d(.3, .3, .3); transform:scale3d(.3, .3, .3)}
  50%{opacity:1}
}
@keyframes zoomIn{
  0%{opacity:0; -webkit-transform:scale3d(.3, .3, .3); transform:scale3d(.3, .3, .3)}
  50%{opacity:1}
}

@-webkit-keyframes fadeInUp{
  0%{opacity:0; -webkit-transform:translate3d(0, 100%, 0); transform:translate3d(0, 100%, 0);}
  100%{opacity:1; -webkit-transform:translate3d(0, 0, 0); transform:translate3d(0, 0, 0);}
}
@keyframes fadeInUp{
  0%{opacity:0; -webkit-transform:translate3d(0, 100%, 0); transform:translate3d(0, 100%, 0);}
  100%{opacity:1; -webkit-transform:translate3d(0, 0, 0); transform:translate3d(0, 0, 0);}
}

@-webkit-keyframes flipInY {
  0% {
    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
            transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    -webkit-transition-timing-function: ease-in;
            transition-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
            transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    -webkit-transition-timing-function: ease-in;
            transition-timing-function: ease-in;
  }

  60% {
    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
            transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    opacity: 1;
  }

  80% {
    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
            transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
  }

  100% {
    -webkit-transform: perspective(400px);
            transform: perspective(400px);
  }
}

@keyframes flipInY {
  0% {
    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
            transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    -webkit-transition-timing-function: ease-in;
            transition-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
            transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    -webkit-transition-timing-function: ease-in;
            transition-timing-function: ease-in;
  }

  60% {
    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
            transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    opacity: 1;
  }

  80% {
    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
            transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
  }

  100% {
    -webkit-transform: perspective(400px);
            transform: perspective(400px);
  }
}

@-webkit-keyframes shake {
  0%, 100% {
    -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
  }

  10%, 30%, 50%, 70%, 90% {
    -webkit-transform: translate3d(-10px, 0, 0);
            transform: translate3d(-10px, 0, 0);
  }

  20%, 40%, 60%, 80% {
    -webkit-transform: translate3d(10px, 0, 0);
            transform: translate3d(10px, 0, 0);
  }
}

@keyframes shake {
  0%, 100% {
    -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
  }

  10%, 30%, 50%, 70%, 90% {
    -webkit-transform: translate3d(-10px, 0, 0);
            transform: translate3d(-10px, 0, 0);
  }

  20%, 40%, 60%, 80% {
    -webkit-transform: translate3d(10px, 0, 0);
            transform: translate3d(10px, 0, 0);
  }
}
/* Make clicks pass-through */
#nprogress {
  pointer-events: none;
}

#nprogress .bar {
  background: #29d;

  position: fixed;
  z-index: 1031;
  top: 0;
  left: 0;

  width: 100%;
  height: 2px;
}

/* Fancy blur effect */
#nprogress .peg {
  display: block;
  position: absolute;
  right: 0px;
  width: 100px;
  height: 100%;
  box-shadow: 0 0 10px #29d, 0 0 5px #29d;
  opacity: 1.0;

  -webkit-transform: rotate(3deg) translate(0px, -4px);
      -ms-transform: rotate(3deg) translate(0px, -4px);
          transform: rotate(3deg) translate(0px, -4px);
}

/* Remove these to get rid of the spinner */
#nprogress .spinner {
  display: block;
  position: fixed;
  z-index: 1031;
  top: 15px;
  right: 15px;
}

#nprogress .spinner-icon {
  width: 18px;
  height: 18px;
  box-sizing: border-box;

  border: solid 2px transparent;
  border-top-color: #29d;
  border-left-color: #29d;
  border-radius: 50%;

  -webkit-animation: nprogress-spinner 400ms linear infinite;
          animation: nprogress-spinner 400ms linear infinite;
}

.nprogress-custom-parent {
  overflow: hidden;
  position: relative;
}

.nprogress-custom-parent #nprogress .spinner,
.nprogress-custom-parent #nprogress .bar {
  position: absolute;
}

@-webkit-keyframes nprogress-spinner {
  0%   { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}
@keyframes nprogress-spinner {
  0%   { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* TOAST */
#toast{height:100px; width:100px; position:fixed; left:50%; top:50%; background:rgba(0,0,0,0.5) url(assets/img/yes.svg) center 18px no-repeat; color:#FFF; text-align:center; padding:66px 10px 0; background-size:46px auto; margin:-50px 0 0 -50px; border-radius:6px; display:none; z-index:99999;}
#error{padding:14px 20px 14px 50px; position:fixed; left:50%; top:50%; background:rgba(0,0,0,0.5) url(assets/img/error.svg) 12px center no-repeat; background-size:28px auto; color:#FFF; border-radius:4px; margin:-25px 0 0 -80px; white-space:nowrap; display:none; z-index:99999;}
#toast.show,#error.show{animation:fadeInUp .3s; -webkit-animation:fadeInUp .3s; display:block;}

/* CONFIRM */
#confirm{height:100%; width:100%; position:fixed; left:0; top:0; background-color:rgba(0,0,0,0.6); color:#666; z-index:99999;}
#confirm .confirmBox{width:400px; padding-bottom:52px; position:absolute; left:50%; top:50%; margin:-160px 0 0 -200px; background-color:#FFF; box-shadow:0 10px 18px rgba(0,0,0,0.08); -webkit-box-shadow:0 10px 18px rgba(0,0,0,0.12); -webkit-animation:zoomInUp .3s; animation:zoomInUp .3s;}
#confirm .msg{width:100%; padding:20px; min-height:80px; text-align:center;}
#confirm h1{line-height:48px; height:48px; display:block; width:100%; text-align:center; font-size:16px; color:#333;}
#confirm .grp{width:100%; height:52px; line-height:52px; display:box; display:-webkit-box; position:absolute; left:0; bottom:0;}
#confirm .grp button{display:block; width:50%; height:100%; box-flex:1; -webkit-box-flex:1; border-top:1px solid #f4f4f4; cursor:pointer; transition:background-color .3s; -webkit-transition:background-color .3s; color:#666;}
#confirm .grp button:active{background-color:#f4f4f4;}
#confirm .grp button + button{border-left:1px solid #f4f4f4;}
#confirm .close{display:block; height:20px; width:20px; background:url(assets/img/close.svg) no-repeat; background-size:100% auto; position:absolute; right:10px; top:10px; cursor:pointer;}
@-webkit-keyframes zoomInUp{
  0%{opacity:0; -webkit-transform:translate3d(0, 100%, 0) scale3d(.6,.6,.6); transform:translate3d(0, 100%, 0) scale3d(.6,.6,.6);}
  100%{opacity:1; -webkit-transform:translate3d(0, 0, 0) scale3d(1,1,1); transform:translate3d(0, 0, 0) scale3d(1,1,1);}
}
@keyframes zoomInUp{
  0%{opacity:0; -webkit-transform:translate3d(0, 100%, 0) scale3d(.6,.6,.6); transform:translate3d(0, 100%, 0) scale3d(.6,.6,.6);}
  100%{opacity:1; -webkit-transform:translate3d(0, 0, 0) scale3d(1,1,1); transform:translate3d(0, 0, 0) scale3d(1,1,1);}
}

/* UPLOADER */
.uploader{height:48px; width:48px; min-width:48px; border-radius:24px; -webkit-border-radius:24px; background-color:#FFF; overflow:hidden; position:fixed; top:120px; left:20px; -webkit-box-shadow:0 3px 8px -4px rgba(0,0,0,0.15); box-shadow:0 3px 8px -4px rgba(0,0,0,0.15); display:box; display:-webkit-box; transition:all .3s; -webkit-transition:all .3s; z-index:9001; opacity:0.98;}
.uploader.active{width:430px; border-radius:2px; box-shadow:0 15px 30px rgba(0,0,0,0.1); -webkit-box-shadow:0 15px 30px rgba(0,0,0,0.1);}
.uploader.active .icon{opacity:0.4;}
.uploader .icon{width:48px; height:48px; opacity:0.2; background:url(assets/img/upload.svg) center center no-repeat; background-size:28px auto; cursor:default; margin-right:2px;}
.uploader .pan{width:380px; height:48px; padding:9px 15px 9px 0; display:box; display:-webkit-box;}
.pan .link{width:180px; height:100%; border:1px solid #ececec; padding-left:30px; line-height:30px; position:relative;}
.pan .link input{display:block; height:100%; width:100%;}
.pan .link i{display:block; width:30px; height:30px; position:absolute; left:-1px; top:-1px; background:#398ce6 url(assets/img/link.svg) center center no-repeat; background-size:14px auto; cursor:pointer;}
.pan .size{line-height:30px; display:box; display:-webkit-box; height:100%; padding:0 12px;}
.pan .size input{display:block; width:34px; height:100%; border-bottom:1px solid #ececec; text-align:center;}
.pan .size input::-webkit-input-placeholder{color:#ddd;}
.pan .size div{color:#999; padding:0 10px;}
.pan button,.pan .progress{display:block; box-flex:1; -webkit-box-flex:1; font-size:12px; line-height:30px; text-align:center; background-color:#398ce6; color:#FFF; cursor:pointer; transition:background-color .3s; -webkit-transition:background-color .3s;}
.pan button:active{background-color:#0a5fbc;}
.pan .progress{border-radius:3px; position:relative;}
.pan .progress:after{content:attr(data-percent); display:block; height:100%; width:100%; line-height:30px; text-align:center; position:absolute; left:0; top:0; z-index:99;}
.pan .progress .bar{height:30px; width:0; background-color:#FFF; opacity:0.4;}
</style>
<template>
  <app-header></app-header>
  <app-uploader></app-uploader>
  <router-view transition="switch" transition-mode="out-in" :user="user"></router-view>
  <app-footer></app-footer>
  <wait-panel :status="status"></wait-panel>
  <div id="toast" v-el:toast></div>
  <div id="error" v-el:error></div>
</template>

<script>
import Firebase from 'firebase'
import AppHeader from './components/header.vue'
import AppUploader from './components/uploader.vue'
import AppFooter from './components/footer.vue'
import WaitPanel from './components/waitPanel.vue'
const api = new Firebase('https://zenway.firebaseio.com/')

export default {
  data () {
    return {
      pageLabel: false,
      log: 'Application has started!',
      user: 'user-000000', //默认账户
      status: false
    }
  },

  events: {
    userLogin: function (uid) {
      this.user = uid;
      //广播用户uid设置
      this.$broadcast('setUser', uid);
    },
    //控制等待层
    waitPanel: function(param){
      this.status = param;
    },
    //tost提示
    toast: function(message){
      var tst = this.$els.toast;
      var msg = message || "已完成";
      tst.innerHTML = msg;
      tst.className = "show";
      var timertoast = null;
      timertoast = setTimeout(function(){
        tst.className = "";
        clearTimeout(timertoast);
      },2000);
    },
    //错误提示
    error: function(message){
      var err = this.$els.error;
      var msg = message || "发生错误";
      var mleft = (msg.length*7 + 35)*(-1);
      err.style.marginLeft = mleft + 'px';
      err.innerHTML = msg;
      err.className = "show";
      var timererror = null;
      timererror = setTimeout(function(){
        err.className = "";
        clearTimeout(timererror);
      },2000);
    }
  },
  components: {
    AppHeader,
    AppUploader,
    AppFooter,
    WaitPanel
  },
  ready () {
    var view = this;
    var header = $('.header');
    var pageLabel = $('.pageLabel');
    var clientHeight = document.body.clientHeight;
    function handle(delta) {
      var pageHeight = document.body.scrollHeight;
      var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      if (delta >= 0 && scrollTop > 120){
          header.addClass('fixed');
      }else{
          header.removeClass('fixed');
      }
    }
     
    function wheel(event){
        var delta = 0;
        if (!event) event = window.event;
        if (event.wheelDelta) {
            delta = event.wheelDelta/120; 
            if (window.opera) delta = -delta;
        } else if (event.detail) {
            delta = -event.detail/3;
        }
        delta && handle(delta);
    }
     
    if (window.addEventListener){
      window.addEventListener('DOMMouseScroll', wheel, false);
    }
    window.onmousewheel = document.onmousewheel = wheel;

    //初始化confirm自定义弹框
    window.confirms = function(tittle, msg, callback1, callback2){
      window.confirmBox = document.createElement('div');
      window.confirmBox.id = "confirm";
      window.confirms.callback1 = function(){
        if(callback1) callback1();
        window.confirms.close();
      },
      window.confirms.callback2 = function(){
        if(callback2) callback2();
        window.confirms.close();
      }
      window.confirmBox.innerHTML = '<div class="confirmBox"><h1>'+tittle+'</h1><div class="msg">'+msg+'</div><div class="grp"><button onclick="confirms.yes()">确定</button><button onclick="confirms.no()">取消</button></div><i class="close" onclick="confirms.close()"></i></div>';
      document.getElementsByTagName('body')[0].appendChild(window.confirmBox);
    }
    window.confirms.yes = function(){
      window.confirms.callback1();
    }
    window.confirms.no = function(){
      window.confirms.callback2();
    }
    window.confirms.close = function(){
      document.getElementsByTagName('body')[0].removeChild(window.confirmBox);
    }

  }
}
</script>

