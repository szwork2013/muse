<template>
  <header>
    <div class="header" @mouseout="hideCodeBox">
      <div class="logo"><img src="../assets/img/cube.png" height="50"></div>
      <div class="center">
        <ul class="guide">
          <li v-link="{ name: 'home', activeClass: 'active' }">首页</li>
          <li v-link="{ name: 'note', activeClass: 'active' }">随身笔记</li>
          <li v-link="{ name: 'games', activeClass: 'active' }">轻松娱乐</li>
          <li>摄影作品</li>
          <li>关于作者</li>
        </ul>
        <div class="content">
          <ul>
            <li>
              <a @mouseover="showCodeBox | debounce 300" class="wechat"></a>
              <div class="qrcode" :class="{'show': showCode}"><img src="../assets/img/qrcode.png"></div>
            </li>
            <li><a href="http://user.qzone.qq.com/741849580/main" target="blank" title="作者QQ空间" class="qzone"></a></li>
            <li><a href="http://weibo.com/zyh0921/" target="blank" title="作者新浪微博" class="sina"></a></li>
            <li><a title="新账户注册" class="reg" @click="showRegBox"></a></li>
          </ul>
        </div>
      </div>
      <div class="sign">
        <a href="javascript:;" v-if="hasUser" @click="logout">退出登录</a>
        <a href="javascript:;" v-else @click="showLoginBox">账号登录</a>
      </div>
    </div>
    <div class="loginBox" :class="{'show': showLogin}">
        <div class="box">
          <div v-bind:style="{animation: shakeAnimate}">
            <input type="text" placeholder="请输入邮箱" id="userMail">
            <input type="password" placeholder="请输入密码" id="userPassword">
            <input type="button" value="登录" id="submit" @click="login">
            <i class="close" @click="closeLoginBox"></i>
          </div>
        </div>
    </div>
    <div class="loginBox regBox" :class="{'show': showReg}">
        <div class="box">
          <div v-bind:style="{animation: shakeAnimate}">
            <input type="text" placeholder="请输入注册邮箱" id="regMail">
            <input type="password" placeholder="请输入注册密码" id="regPassword">
            <input type="password" placeholder="请再次输入密码" id="regPasswordAgain">
            <input type="button" value="注册" id="submit" @click="reg">
            <i class="close" @click="closeRegBox"></i>
          </div>
        </div>
    </div>  
  </header>
</template>

<script>
import dataTemplate from '../libs/dataTemplate'
const api = new Firebase('https://zenway.firebaseio.com/')

export default {
  name: 'AppHeader',
  data () {
    return {
      title: 'Hello header!',
      showLogin: false,
      showReg: false,
      hasUser: false,
      showCode: false,
      shakeAnimate: ''
    }
  },
  ready () {
    var view = this;
    var defaultUID = view.GetCookie('musedefaultusercounter');
    if(defaultUID){
      view.hasUser = true;
      view.$dispatch('userLogin', defaultUID);
    }
  },
  methods: {
    showLoginBox: function(){
      this.showLogin = true;
      var $body = $('body');
      $body.animate({scrollTop:0}, 300, function(){
        $body.addClass('dialog');
      });
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
    GetCookie: function(name){
      var arg = name + "=";
      var alen = arg.length;
      var clen = window.document.cookie.length;
      var i = 0;
      while (i < clen) {
          var j = i + alen;
          if (window.document.cookie.substring(i, j) == arg) return this.getCookieVal(j);
          i = window.document.cookie.indexOf(" ", i) + 1;
          if (i == 0) break;
      }
      return null;
    },
    getCookieVal: function(offset){
      var endstr = window.document.cookie.indexOf(";", offset);
      if (endstr == -1) endstr = window.document.cookie.length;
      return unescape(window.document.cookie.substring(offset, endstr));
    },
    SetCookie: function(name, value){
      var exp = new Date();
      exp.setTime(exp.getTime() + (2 * 24 * 60 * 60 * 1000));
      window.document.cookie = name + "=" + escape(value) + "; expires=" + exp.toGMTString() + ";path=/";
    },
    DeleteCookie: function(name) {
      var exp = new Date();
      exp.setTime(exp.getTime() - 100);
      var cval = this.GetCookie(name);
      window.document.cookie = name + "=" + cval + "; expires=" + exp.toGMTString() + ";path=/";
    },
    login: function(){
      var view = this;
      view.clearShake();
      var mail = $('#userMail').val();
      var pswd = $('#userPassword').val();
      if(mail && pswd){
        view.closeLoginBox();
        view.$dispatch('waitPanel', true);
        api.authWithPassword({
          email : mail,
          password : pswd
        }, function(error, authData) {
          if (error) {
            //console.log("Login Failed!", error);
            view.$dispatch('waitPanel', false);
            view.$dispatch('error', '邮箱或密码错误');
          } else {
            //console.log("Authenticated successfully with payload:", authData);
            view.hasUser = true;
            view.$dispatch('waitPanel', false);
            view.$dispatch('toast', '登录成功');
            view.$dispatch('userLogin', authData.uid);
            //登录成功保存cookie(保存两天)
            view.SetCookie('musedefaultusercounter', authData.uid);
          }
        });
      }else{
         view.shakeBox(); 
         view.$dispatch('error', '邮箱地址和密码不能为空');
      }
    },
    closeLoginBox: function(){
      this.showLogin = false;
      $('body').removeClass('dialog');
    },
    showCodeBox: function(){
      this.showCode = true;
    },
    hideCodeBox: function(){
      this.showCode = false;
    },
    showRegBox: function(){
      this.showReg = true;
    },
    closeRegBox: function(){
      this.showReg = false;
    },
    logout: function(){
      var view = this;
      view.hasUser = false;
      view.user = "user-000000";
      view.$dispatch('toast', '退出成功');
      view.$dispatch('userLogin', view.user);
      view.DeleteCookie('musedefaultusercounter');
    },
    reg: function(){
      var view = this;
      view.clearShake();
      console.log();
      var mail = $('#regMail').val();
      var pswd = $('#regPassword').val();
      var pswdAgn = $('#regPasswordAgain').val();
      var regMail = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/;
      var regPswd = /^[a-zA-Z_]\w{5,19}$/; //只能为字母数字下划线6-20字符长，首字符不为数字
      if(regMail.test(mail) && regPswd.test(pswd) && pswd == pswdAgn){
        view.closeRegBox();
        view.$dispatch('waitPanel', true);
        api.createUser({
          email : mail,
          password : pswd
        }, function(error, userData) {
          if (error) {
            //console.log("Error creating user:", error);
            view.$dispatch('waitPanel', false);
            view.$dispatch('error', '该邮箱已被注册');
          } else {
            //console.log("Successfully created user account with uid:", userData.uid);
            view.$dispatch('waitPanel', false);
            view.$dispatch('toast', '注册成功');
            var newUid = userData.uid;
            //注册成功登录并保存cookie(保存两天)
            view.hasUser = true;
            view.SetCookie('musedefaultusercounter', newUid);
            //为新注册账户生成默认数据
            var DEFAULT = {};
            DEFAULT[newUid] = dataTemplate;
            api.update(DEFAULT);
            view.$dispatch('userLogin', newUid);
          }
        });
      }else{
        view.$dispatch('error', '请输入正确邮箱地址');  
        view.shakeBox();
        if(!regMail.test(mail)){
          view.$dispatch('error', '请输入正确邮箱地址');
        }else if(!regPswd.test(pswd)){
          view.$dispatch('error', '密码长度6-20且首字母不为数字');
        }else if(pswd != pswdAgn){
          view.$dispatch('error', '输入密码不一致');
        }
      }
    }
  }
}
</script>