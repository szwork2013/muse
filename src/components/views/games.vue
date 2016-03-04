<style scoped>
.gameCanter{width:1200px; height:640px; margin:20px auto; background-color:#f0f5f8; border-radius:6px; overflow:hidden; padding-left:240px; box-shadow:0 8px 24px -6px rgba(0,0,0,.14); position:relative;}
.gameCanter .sidebar{width:240px; height:100%; position:absolute; left:0; top:0; background:-webkit-gradient(linear,0% 0%, 0% 100%, from(#27accf), to(#105799)); color:#FFF;}
.gameCanter .tit{line-height:70px; text-align:center; font-size:16px; height:70px; margin-bottom:20px;}
.gameCanter .tit span{padding-left:30px; position:relative; font-weight:bold;}
.gameCanter .tit span:after{content:""; display:block; height:22px; width:22px; background:url(../../assets/img/game.svg) center center no-repeat; background-size:100% auto; position:absolute; left:0; top:50%; margin-top:-11px;}
ul.gameList li{width:100%; height:40px; line-height:40px; transition:all .2s; -webkit-transition:all .2s; text-indent:30px; color:rgba(255,255,255,.8); position:relative; cursor:pointer;}
ul.gameList li.active,
ul.gameList li:hover{background-color:rgba(255,255,255,.08); color:rgba(255,255,255,1);}
ul.gameList li.active{text-shadow:0 1px 0 rgba(0,0,0,.1);}
ul.gameList li.active:after{content:""; display:block; height:100%; width:3px; position:absolute; left:0; top:0; background-color:#feb34d;}
.gameCanter .main{width:100%; height:100%; position:relative; overflow:hidden;}
.gameCanter .map{width:800px; height:575px; margin:-287px 0 0 -400px; position:absolute; left:50%; top:50%; opacity:0; transition:opacity .3s; -webkit-transition:opacity .3s; border-radius:8px; overflow:hidden; box-shadow:0 12px 22px -8px rgba(0, 57, 84, 0.44); -webkit-box-shadow:0 12px 22px -8px rgba(0, 57, 84, 0.44);}
/* PROGRESS */
.progress{background-color:#e5e9eb; height:0.25em; position:relative; width:24em; position:absolute; left:50%; top:40%; margin:-0.125em 0 0 -12em;}
.progress .num{position:absolute; left:50%; top:-30px; width:80px; text-align:center; margin-left:-40px;}
.progress-bar{background-image:linear-gradient(to right, #4cd964, #5ac8fa, #007aff, #34aadc, #5856d6, #ff2d55); background-size:24em 0.25em; height:100%; position:relative;}
.progress-shadow{background-image:linear-gradient(to bottom, #eaecee, transparent); height:4em; position:absolute; top:100%; transform:skew(45deg); transform-origin:0 0; -webkit-transform:skew(45deg); -webkit-transform-origin:0 0; width:100%;}
.gameCanter .main.done .map{opacity:1;}
.gameCanter .main.done .progress{left:300%; animation:fadeOut .8s; -webkit-animation:fadeOut .8s;}
@keyframes fadeOut{
  0%{opacity:1; left:50%;}
  100%{opacity:0; left:50%;}
}
@-webkit-keyframes fadeOut{
  0%{opacity:1; left:50%;}
  100%{opacity:0; left:50%;}
}
</style>
<template>
  <div class="gameCanter">
    <style>
    body{background:-webkit-gradient(linear,0% 0%, 0% 100%, from(#DDF0F6), to(#E0F1F8));}
    .uploader{display:none;}
    </style>
    <div class="sidebar">
      <div class="tit"><span>GAME CENTER</span></div>
      <ul class="gameList">
        <li class="active" data-name='luobo' @click='getGame'>保卫萝卜</li>
        <li data-name='cube' @click='getGame'>俄罗斯方块</li>
        <li data-name='mali' @click='getGame'>超级玛丽</li>
        <li data-name='paopao' @click='getGame'>Q版泡泡堂</li>
      </ul>
    </div>
    <div class="main" v-el:main>
      <div class="map" v-el:map :style="{width:flWidth + 'px', height:flHeight + 'px', marginLeft:flWidth*(-0.5) + 'px', marginTop:flHeight*(-0.5) + 'px'}">
      </div>
      <div class="progress">
        <div class="num">{{percent}}%</div>
        <div class="progress-bar" :style="{width:percent + '%'}">
          <div class="progress-shadow"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'other',
  props: {
    user: ''
  },
  data () {
    return {
      percent: 0,
      src: 'http://plug.qiniudn.com/luobo.swf',
      flWidth: 800,
      flHeight: 575,
      gamelist: {
        luobo: {
          src: 'http://plug.qiniudn.com/luobo.swf',
          flWidth: 800,
          flHeight: 575
        },
        cube: {
          src: 'http://plug.qiniudn.com/cube.swf',
          flWidth: 640,
          flHeight: 480
        },
        mali: {
          src: 'http://plug.qiniudn.com/mali.swf',
          flWidth: 640,
          flHeight: 480
        },
        paopao: {
          src: 'http://plug.qiniudn.com/paopao.swf',
          flWidth: 600,
          flHeight: 450
        }
      }
    }
  },
  ready () {
    var view = this;
    this.buildFlash();   
  },
  methods: {
    loadState: function(id, ing, done){
      if(window.navigator.userAgent.indexOf("Firefox")>=1) return;
      var progressTimer = setInterval(function(){
        var movie = document.getElementById(id); 
        if(!movie && progressTimer){
          clearTimeout(progressTimer);
          return;
        }
        var nPercentLoaded = Math.abs(movie.PercentLoaded());
        ing(nPercentLoaded);
        if(nPercentLoaded == 100){
          done && done();
          clearTimeout(progressTimer);
        }
      },100);
    },
    progressBar: function(){
      var view = this;
      var main = $(view.$els.main);
      view.percent = 0;
      main.removeClass('done');
      this.loadState('flashgame', function(num){
        //若发生逆流则隐藏
        if(num < view.percent){
          main.addClass('done');
        }
        view.percent = num;
      }, function(){
        main.addClass('done');
      }); 
    },
    getGame: function(event){
      var view = this;
      var $elem = $(event.target);
      $elem.addClass('active').siblings().removeClass('active');
      var gameName = $elem.data('name');
      var curGame = view.gamelist[gameName];
      view.src = curGame.src;
      view.flWidth = curGame.flWidth;
      view.flHeight = curGame.flHeight;
      this.buildFlash(); 
    },
    buildFlash: function(){
      var tmpl = '<object id="flashgame" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=10,0,0,0" width="'+ this.flWidth +'" height="'+ this.flHeight +'">'+
          '<param name="allowScriptAccess" value="never">'+
          '<param name="allowNetworking" value="internal">'+
          '<param name="movie" value="'+ this.src +'">'+
          '<embed id="flashgame1" name="flashgame" :src="'+ this.src +'" quality="high" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" width="'+ this.flWidth +'" height="'+ this.flHeight +'" allowscriptaccess="nerver" allownetworking="internal" style="width:'+ this.flWidth +'px; height:'+ this.flHeight +'px;">'+
          '<param name="quality" value="high">'+
        '</object>';
      this.$els.map.innerHTML = tmpl; 
      this.progressBar(); 
    }
  }
}
</script>