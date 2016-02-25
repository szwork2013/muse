<style scoped>
.grid{width:1224px; margin:10px auto; position:relative;}
.grid ul{font-size:0;}
.grid li{width:306px; height:380px; padding:8px; font-size:14px; display:inline-block; animation:fadeInUp .3s; -webkit-animation:fadeInUp .3s;}

.item{width:100%; height:100%; overflow:hidden; background-color:#fff; -webkit-transition:all 0.2s linear; transition:all 0.2s linear; box-shadow:0 3px 8px -4px rgba(0,0,0,0.15); -webkit-box-shadow:0 3px 8px -4px rgba(0,0,0,0.15); border-radius:4px;}
.item:hover{-webkit-box-shadow:0 15px 30px rgba(0,0,0,0.1); box-shadow:0 15px 30px rgba(0,0,0,0.1); -webkit-transform:translate3d(0, -2px, 0); transform:translate3d(0, -2px, 0);}
.item .imgr{width:100%; height:280px; overflow:hidden; position:relative; background-color:#eee; text-align:center; background-size:auto 100%; background-repeat:no-repeat;}
.item:hover .imgr:before{content:""; display:block; height:400px; width:400px; margin:-200px 0 0 -200px; position:absolute; left:50%; top:50%; background-color:rgba(0,0,0,.4); z-index:4; animation:waveOut .8s; -webkit-animation:waveOut .8s;}
.item .ifo{height:84px; line-height:84px; padding:0 20px; color:#ccc;}
.item .ifo .date,.item .ifo .like{padding-left:22px;}
.item .ifo .date{background:url("../../assets/time.svg") 0 center no-repeat; background-size:auto 18px;}
.item .ifo .like{margin-left:20px; position:relative;}
.item .ifo .like:after,
.item .ifo .like:before{content:""; display:block; height:22px; width:22px; background:url("../../assets/like.svg") 0 center no-repeat; background-size:auto 14px; position:absolute; left:0; top:50%; margin-top:-11px;}
.item .ifo .like.active:after,
.item .ifo .like.active:before{background-image:url("../../assets/likeAtv.svg");}
.item .ifo .like.active:after{animation:boom .8s; -webkit-animation:boom .8s;}
.item .ifo .del{display:block; height:24px; width:24px; background:url("../../assets/del.svg") center center no-repeat; background-size:auto 100%; opacity:0.4; transition:opacity .3s; -webkit-transition:opacity .3s;}
.item .ifo .del:hover{opacity:1;}
@keyframes boom{
  0%{transform:scale3d(1, 1, 1); -webkit-transform:scale3d(1, 1, 1); opacity:1;}
  100%{transform:scale3d(9, 9, 1); -webkit-transform:scale3d(9, 9, 1); opacity:0;}
}
@-webkit-keyframes boom{
  0%{transform:scale3d(1, 1, 1); -webkit-transform:scale3d(1, 1, 1); opacity:1;}
  100%{transform:scale3d(9, 9, 1); -webkit-transform:scale3d(9, 9, 1); opacity:0;}
}

@-webkit-keyframes waveOut{
  0%{transform:scale3d(.2, .2, 1); -webkit-transform:scale3d(.2, .2, 1); opacity:0; border-radius:50%;}
  100%{transform:scale3d(2, 2, 1); -webkit-transform:scale3d(2, 2, 1); opacity:1; border-radius:50%;}
}
@keyframes waveOut{
  0%{transform:scale3d(.2, .2, 1); -webkit-transform:scale3d(.2, .2, 1); opacity:0; border-radius:50%;}
  100%{transform:scale3d(2, 2, 1); -webkit-transform:scale3d(2, 2, 1); opacity:1; border-radius:50%;}
}

.item:hover .imgr:after{content:attr(data-label); color:#FFF; padding:0 20px; z-index:9; position:absolute; width:290px; left:0; display:block; top:50%; height:58px; margin-top:-29px; text-shadow:0 1px 3px rgba(0,0,0,0.6); font-size:16px; line-height:1.8; overflow:hidden; animation:fadeInUp .3s; -webkit-animation:fadeInUp .3s;}
.user{width:1208px; margin:20px auto 10px; height:356px; overflow:hidden; position:relative; box-shadow:0 3px 8px -4px rgba(0,0,0,0.15); -webkit-box-shadow:0 3px 8px -4px rgba(0,0,0,0.15); visibility:hidden;}
.user.visiable{visibility:visible;}
.user .theme{display:block; width:100%; height:100%; background-repeat:no-repeat; background-size:100% auto; background-position:center center;}
.user .avatar{width:140px; height:140px; position:absolute; z-index:9; left:50%; top:50%; margin:-100px 0 0 -70px; background-color:rgba(255,255,255,.26); border-radius:50%; padding:5px; transition:background-color .3s; -webkit-transition:background-color .3s; animation:fadeInUp 1s; -webkit-animation:fadeInUp 1s; cursor:pointer;}
.user .avatar .imgr img{width:100%; height:100%; display:block; border-radius:50%; transition:box-shadow .3s; -webkit-transition:-webkit-box-shadow .3s;}
.user .avatar:after{content:attr(data-name); display:block; width:200px; line-height:46px; text-align:center; color:#FFF; font-size:22px; position:absolute; left:50%; margin-left:-100px; top:140px; text-shadow:0 1px 3px rgba(0,0,0,0.33);}
.user .avatar:hover{background-color:rgba(255,255,255,0);}
.user .avatar:hover .imgr img{box-shadow:0 0 14px #f66214; -webkit-box-shadow:0 0 14px #f66214;}
.user .setup{width:24px; height:24px; position:absolute; z-index:8; right:10px; top:10px; opacity:.3; background:url("../../assets/setup.svg") center center no-repeat; background-size:100%; transition:opacity .3s; -webkit-transition:opacity .3s;}
.user .setup:hover{opacity:1;}
.addBtn{width:48px; height:48px; position:fixed; right:16px; top:50%; margin-top:-24px; background:#00B1FF url("../../assets/add.svg") center center no-repeat; background-size:16px 16px; overflow:hidden; z-index:999; opacity:.68; cursor:pointer; border-radius:50%; transition:all .6s; -webkit-transition:all .6s;}
.addBtn:hover{opacity:1; box-shadow:0 4px 14px rgba(63,196,255,.8); -webkit-box-shadow:0 4px 14px rgba(63,196,255,.8);}
.loginBox .box{height:340px; width:440px; margin:-170px 0 0 -220px;}
.loginBox .box input[type=text]{margin-bottom:15px;}
.loginBox .box input[type=button]{width:384px; margin-left:-192px;}
#bubble{position:absolute; width:100%; height:100%; left:0; top:0;}
#bubbleArea{width:100%; height:100%;}
.weather{height:100%; width:100%; background-color:rgba(0,0,0,.5); position:absolute; left:0; top:0; color:rgba(255, 255, 255, 0.8); padding:20px 30px; overflow:hidden; opacity:0; transition:opacity .6s; -webkit-transition:opacity .6s;}
.weather.hover{opacity:1;}
.weather i{font-size:26px; font-weight:lighter; margin-right:6px;}
.weather .current{line-height:1.4; text-shadow:0 1px 3px rgba(0,0,0,.4); cursor:default;}
.weather .current .city{padding-left:24px; margin-bottom:5px; position:relative; cursor:pointer;}
.weather .current .city:after{content:""; display:block; height:20px; width:20px; left:0; top:0; position:absolute; background:url("../../assets/local.svg") 0 center no-repeat; background-size:20px auto; opacity:0.8;}
.weather .forecast{line-height:1.8; padding:10px 0; width:460px;}
.weather .forecast td{padding:6px 10px; border:1px solid rgba(255, 255, 255, 0.02); background-color:rgba(255, 255, 255, 0.1); border-width:0 1px 1px 0;}
.weather .forecast tr:last-child td{border-bottom:0;}
.weather .ganmao{line-height:2; font-size:12px;}
.weather .close{opacity:.6; width:24px; height:24px; background:url("../../assets/close2.svg") center center no-repeat; background-size:100% auto; transition:opacity .3s; -webkit-transition:opacity .3s; position:absolute; right:20px; bottom:20px; cursor:pointer;}
.loginBox .fire{display:block; height:100%; width:100%;}
.loginBox .singleItm{width:316px; height:50px; position:absolute; left:50%; top:50%; margin:-25px 0 0 -158px; background-color:#FFF; padding:10px 100px 10px 15px;}
.loginBox .singleItm input{width:100%; height:100%; border:1px solid #efefef; text-indent:8px; line-height:28px; display:block;}
.loginBox .singleItm button{width:84px; height:100%; background-color:#398ce6; position:absolute; right:0; top:0; color:#FFF; text-align:center; line-height:50px; cursor:pointer; transition:background-color .3s; -webkit-transition:background-color .3s;}
.loginBox .singleItm button:active{background-color:#1A6AC0;}
.loginBox.show .singleItm{animation:fadeInUp .3s; -webkit-animation:fadeInUp .3s;}
</style>

<template>
  <div class="container">
    <div class="user" :class="{'visiable': homeData}">
      <div class="avatar" v-if="homeData" :data-name="homeData.userName" @click="toggleWeather">
        <div class="imgr"><img :src="homeData.avatar"></div>
      </div>
      <div class="theme" :style="{backgroundImage:'url('+ homeData.theme +')'}"></div>
      <div id="bubble"><canvas id="bubbleArea"></canvas></div>
      <div class="weather" :class="{'hover': weatherState}" v-if="weather">
        <div class="current">
          <p class="city" @click="showChange">{{weather.city}}</p>
          <div class="loginBox" :class="{'show': changeState}">
            <i class="fire" @click="hideChange"></i>
            <div class="singleItm">
              <input type="text" value="" v-el:new-local />
              <button @click="change">更改地址</button>
            </div>
          </div>
          <p><i>{{weather.wendu}}°C </i>{{weather.forecast[0].type}}</p>
        </div>
        <div class="forecast">
          <table width="100%" cellpadding="0" cellspacing="0" border="0">
            <tr v-for="item in weather.forecast">
              <td>{{item.date}}</td>
              <td>{{item.high}}</td>
              <td>{{item.low}}</td>
              <td>{{item.type}}</td>
            </tr>
          </table>
        </div>
        <p class="ganmao">{{weather.ganmao}}</p>
        <div class="close" @click="closeWeather"></div>
      </div>
      <div class="setup" @click="showSetBox"></div>
    </div>
    <div class="grid" v-if="list">
      <ul>
        <li v-if="list" v-for="item in list" track-by="_uid">
          <div class="item">
            <a :href="item.tar" target="blank">
              <div class="imgr" :data-label="item.title" v-bind:style="{backgroundImage: 'url('+item.url+')'}"></div>
            </a>
            <div class="ifo row alignItem">
              <div class="date">{{item.time | formatDate}}</div>
              <div class="cell"><span class="like" :data-uid="item._uid" @click="vote">{{item.like}}</span></div>
              <div class="del" @click="delate(item._uid)"></div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="addBtn" @click="showEditBox"></div>
    <div class="loginBox" :class="{'show': showEdit}">
        <div class="box">
          <div v-bind:style="{animation: shakeAnimate}">
            <input type="text" placeholder="请输入标题" id="pTitle">
            <input type="text" placeholder="请输入封面图片URL" id="pUrl">
            <input type="text" placeholder="请输入指向链接" id="pTar">
            <input type="button" value="添加" id="submit" @click="pushData">
            <i class="close" @click="hideEditBox"></i>
          </div>
        </div>
    </div>
    <div class="loginBox" :class="{'show': setup}">
        <div class="box">
          <div>
            <input type="text" placeholder="请输入新用户名" id="sName">
            <input type="text" placeholder="请输入尺寸为1208×357背景图RUL" id="sUrl">
            <input type="text" placeholder="请输入尺寸为260×260头像URL" id="sAva">
            <input type="button" value="修改" id="submit" @click="modifyIfo">
            <i class="close" @click="hideSetBox"></i>
          </div>
        </div>
    </div>  
  </div>
</template>

<script>
import Vue from 'Vue'
import Firebase from 'firebase'
const api = new Firebase('https://zenway.firebaseio.com/')
require('../../libs/bubble')

//自定义过滤器
function formatDate(t){
  if(!t){
    t = (new Date()).getTime();
  }
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
  return str;
}

Vue.filter('formatDate', formatDate)

export default {
  name: 'home',
  props: {
    user: ''
  },
  data () {
    return {
      log: 'Hello home!',
      homeData: null,
      list: null,
      showEdit: false,
      setup: false,
      shakeAnimate: '',
      weather: '',
      weatherState: false,
      changeState: false
    }
  },
  events: {
    setUser: function(params){
      this.user = params;
      //设置新账户后重新初始化
      this.initPage(this.user);
    }
  },
  beforeDestroy () {
    this.bubble.stop();
    this.bubble = null;
  },
  destroyed () {
    window.scrollTo(0, 0);
  },
  ready () {
    //初始化页面
    this.initPage(this.user);
    //调用气泡效插件
    this.bubble = new bubble('bubble',1208, 356);
    //获取天气数据
    this.localGetWeather();
  
  },
  methods: {
    localGetWeather: function(){
      var view = this;
      var city = '北京';
      if(remote_ip_info.country == "中国") city = remote_ip_info.city;
      view.getWeather(city, function(data){
        view.weather = data;
      });
    },
    showChange: function(event){
      var e = event || window.event;  
      if(e.stopPropagation){   
          e.stopPropagation();  
      }else{  
          e.cancelBubble = true; 
      }  
      this.changeState = true;
    },
    hideChange: function(){
      this.changeState = false;
    },
    change: function(){
      var view = this;
      this.changeState = false;
      var newLocal = this.$els.newLocal.value;
      if(newLocal){
        this.getWeather(newLocal, function(data){
          if(data){
            view.weather = data;
          }else{
            view.$dispatch('error', '该城市不存在');
          }
        });
      }
    },
    getWeather: function(city, callback){
      var view = this;
      $.ajax({
        type: "GET",
        url: "http://wthrcdn.etouch.cn/weather_mini?city="+ city,
        dataType: "jsonp",
        success: function(data){
          if(callback) callback(data.data);
        },
        complete: function(){
          //console.log('请求完成');
        },
        error: function(){  
          view.$dispatch('error', '天气数据获取失败');
        }  
      });
    },
    toggleWeather: function(){
      this.weatherState ? this.weatherState = false : this.weatherState = true;
    },
    closeWeather: function(){
      this.weatherState = false;
    },
    shakeBox: function(){
      var tmpTimer;
      var view = this;
      tmpTimer = setTimeout(function(){
        view.shakeAnimate = 'shake .3s';
        clearTimeout(tmpTimer);
      },200);
    },
    clearShake: function(){
      this.shakeAnimate = '';
    },
    initPage: function(uid){
      var view = this;
      view.getUserData(uid, function(data){
        view.homeData = data;
        view.shunt(view.homeData.list);
      })
    },
    resetData: function(uid){
      var view = this;
      view.getUserData(uid, function(data){
        view.homeData = data;
      })
    },
    shunt: function(DATA){
      var uid = [];
      var listItems = [];
      var x;
      for(x in DATA){
        uid.push(x);
        var tmp = DATA[x];
        tmp._uid = x;
        listItems.push(tmp);
      }
      var view = this;
      listItems.reverse();
      var dataLength = listItems.length;
      var end = 8;
      if(dataLength < 8){
        end = dataLength;
      }
      view.list = listItems.slice(0, end);
      var clientHeight = document.body.clientHeight;
      $(window).resize(function(){clientHeight = document.body.clientHeight;})
      $(window).scroll(function(e){
        var pageHeight = document.body.scrollHeight;
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        var distance = pageHeight - scrollTop - clientHeight;      
        if(distance < 400 && end < dataLength){
            if(dataLength - end < 4){
              end+=(dataLength - end);
            }
            end+=4;
            view.list = listItems.slice(0, end);
        }
      })
    },
    vote: function(event){
      var view = this;
      var tar = $(event.target);
      var uid = tar.data('uid');
      var count = tar.text()*1;
      if(!tar.hasClass('active')){
        tar.addClass('active');
        count+=1;
      }else{
        tar.removeClass('active');
        count-=1;
      }
      tar.text(count);
      view.updateData(view.user+'/home/list/'+uid, {like: count});
    },
    delate: function(uid){
      var view = this;
      window.confirms('消息提示', '确定删除该收藏？', function(){
        var onComplete = function(error) {
          if (error) {
            view.$dispatch('error', '删除失败');
          } else {
            view.$dispatch('toast', '删除成功');
            //删除后初始化列表页面
            view.initPage(view.user);
          }
        };
        api.child(view.user+'/home/list/'+uid).remove(onComplete);
      })
    },
    updateData: function(uid, params){
      var view = this;
      api.child(uid).update(params)
    },
    showEditBox: function(){
      var $body = $('body');
      $body.animate({scrollTop:0}, 300, function(){
        $body.addClass('dialog');
      });
      this.showEdit = true;
    },
    showSetBox: function(){
      var $body = $('body');
      $body.animate({scrollTop:0}, 300, function(){
        $body.addClass('dialog');
      });
      this.setup = true;
    },
    hideEditBox: function(){
      this.showEdit = false;
      $('body').removeClass('dialog');
    },
    hideSetBox: function(){
      this.setup = false;
      $('body').removeClass('dialog');
    },
    pushData: function(){
      var view = this;
      view.clearShake();
      var title = $('#pTitle').val();
      var urls = $('#pUrl').val();
      var target = $('#pTar').val();
      if(title && urls && target){
        var params = {
          "time": (new Date()).getTime(),
          "like": 0,
          "title": title,
          "url": urls,
          "tar": target
        };
        api.child(view.user+'/home/list/').push(params, function(err){
          if(err){
            view.$dispatch('error', '发布失败');
          }else{
            view.$dispatch('toast', '发布成功');
            //添加后初始化列表页面
            view.initPage(view.user);
          }
        });
        $('#pTitle').val('');
        $('#pUrl').val('');
        $('#pTar').val('');
        this.hideEditBox();
        
      }else{
        view.shakeBox(); 
      }
    },
    modifyIfo: function(){
      var view = this;
      var sName = $('#sName').val();
      var sUrl = $('#sUrl').val();
      var sAva = $('#sAva').val();
      if(sName || sUrl || sAva){
        sName && api.child(view.user+'/home/userName/').set(sName);
        sUrl && api.child(view.user+'/home/theme/').set(sUrl);
        sAva && api.child(view.user+'/home/avatar/').set(sAva);
        //添加后初始化设置部分
        view.resetData(view.user);
      }
      //清空数据
      $('#sName').val('');
      $('#sUrl').val('');
      $('#sAva').val('');
      this.hideSetBox();
    },
    //根据用户账号获取数据
    getUserData: function(uid, callback, errorCallback){
      var view = this;
      view.$dispatch('waitPanel', true);
      api.child(uid+'/home').once("value", function(snapshot){
        var data = snapshot.val();
        callback(data);
        view.$dispatch('waitPanel', false);
      }, function(err){
          if(errorCallback) errorCallback();
          view.$dispatch('waitPanel', false);
          var errStr = "数据获取失败: " + err.code;
          view.$dispatch('error', errStr);
      });
    }
  }
}
</script>