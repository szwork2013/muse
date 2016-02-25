<style scoped>
.chead{width:100%; height:48px; line-height:48px; border-bottom:1px solid #f8f8f8; background:#fcfcfc url(../../assets/list.svg) no-repeat 20px center; background-size:26px auto; padding-left:56px; font-size:18px; font-weight:600; color:#666; position:relative;}
.chead.back{background-image:url(../../assets/back.svg); background-size:18px auto; padding-left:48px; background-position:18px center;}
.chead i{display:block; cursor:pointer; height:48px; top:0; position:absolute; right:20px; font-size:14px; padding-left:26px; background:url(../../assets/edit.svg) no-repeat 0 center; background-size:20px auto; color:#999;}
.chead span{cursor:pointer;}
.article{padding:10px 20px; border:none;}
.title{font-size:22px; text-align:center; line-height:60px;}
</style>
<template>
  <div class="chead back"><span @click="goback">返回列表</span> <i v-link="{path: '/edit'}">发布文章</i></div>
  <div class="daily simditor article">
    <h1 class="title">{{article.title}}</h1>
    <div class="simditor-body">{{{article.content}}}</div>
  </div>
</template>

<script>
import Firebase from 'firebase'
import NProgress from 'nprogress'
const api = new Firebase('https://zenway.firebaseio.com/')

export default {
  name: 'article',
  props: {
    user: ''
  },
  data () {
    return {
      article: null
    }
  },
  route: {
     data (){
      var view = this;
      view.getArticle(view.$route.params.timestamp, function(data){
        view.article = data;
      })
     }
  },

  methods: {
    goback: function(){
      history.back();
    },
    //获取文章内容
    //根据用户账号获取数据
    getArticle: function(timestamp, callback, errorCallback){
      var view = this;
      NProgress.start();
      api.child(view.user+'/article/'+timestamp).once("value", function(snapshot){
        var data = snapshot.val();
        callback(data);
        NProgress.done();
      }, function(err){
          console.log("数据获取失败: " + err.code);
          if(errorCallback) errorCallback();
          NProgress.done();
      });
    }
  }
}
</script>