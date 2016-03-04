<style scoped>
.chead{width:100%; height:48px; line-height:48px; border-bottom:1px solid #f8f8f8; background:#fcfcfc url(../../assets/img/list.svg) no-repeat 20px center; background-size:26px auto; padding-left:56px; font-size:18px; font-weight:600; color:#666; position:relative;}
.chead i{display:block; cursor:pointer; height:48px; top:0; position:absolute; right:20px; font-size:14px; padding-left:26px; background:url(../../assets/img/edit.svg) no-repeat 0 center; background-size:20px auto; color:#999;}
.clist{padding:10px 24px; min-height:728px;}
.article{border-bottom:1px solid #f8f8f8; padding:8px 0; position:relative;}
.article h1{font-size:16px; font-weight:bold; line-height:40px; width:100%; overflow:hidden; white-space:nowrap; word-break:keep-all; text-overflow:ellipsis; cursor:pointer;}
.article .view{color:#888; max-height:150px; overflow:hidden;}
.article:last-child{border-bottom:none;}
.article .panel{display:flex; display:-webkit-flex; justify-content:flex-end; width:100%; height:50px; line-height:50px; color:#ccc;}
.article .panel >*{height:100%; margin-left:24px;}
.article .panel .c i{height:14px; width:14px; border-radius:59%; margin-top:-2px; display:inline-block; vertical-align:middle; background-color:#ccc;}
.article .panel .r{cursor:pointer;}
.article .panel .r:hover{color:#666;}
.article .del{width:24px; height:24px; position:absolute; right:0; top:10px; background:url(../../assets/img/del.svg) no-repeat center center; background-size:100% auto; opacity:0.4; transition:opacity .6s; -webkit-transition:opacity .6s;}
.article .del:hover{opacity:1;}
</style>
<template>
  <div class="chead"><span>文章列表</span> <i v-link="{ path: '/edit'}">发布文章</i></div>
  <div class="clist" v-if="articleList">
      <div class="article" v-for="art in articleList">
          <h1 v-link="{path: '/note/article/'+art.timeStamp}">{{art.title}}</h1>
            <div class="view">{{art.snapshot}}</div>
            <div class="panel">
              <div class="c">心情颜色：<i v-bind:style="{backgroundColor: art.color}"></i></div>
              <div class="t">{{art.time}}</div>
              <div class="r" v-link="{path: '/note/article/'+art.timeStamp}">点击阅读</div>
            </div>
            <i class="del" v-if="art.timeStamp != 1454311343153" title="点击删除" @click="delate(art.timeStamp)"></i>
        </div>
    </div>
</template>

<script>
import Firebase from 'firebase'
import NProgress from 'nprogress'
const api = new Firebase('https://zenway.firebaseio.com/')

export default {
  name: 'articlelist',
  props: {
    user: ''
  },
  data () {
    return {
      articleList: null,
      yearMonth: null
    }
  },
  route: {
    data (){
      this.init(); 
    }
  },
  events: {
    setUser: function(params){
      this.user = params;
      this.init();
    }
  },
  ready () {
     
  },
  methods: {
    init: function(){
      var view = this;
      view.yearMonth = view.$route.params.month;
      view.getValues(view.user+'/note/'+ view.yearMonth, function(data){
        view.articleList = data;
      }, function(){
        //若未检测到该月份则重定向
        view.$dispatch('redirect');
      })
    },
    //删除文章以及相关信息
    delate: function(timeStamp){
      var view = this;
      window.confirms('消息提示', '确定删除该文章？',function(){
        var del1 = false;
        var del2 = false;
        var timer1 = null;
        var curYM = view.user +'/note/'+ view.yearMonth;
        var curTS = curYM +'/'+ timeStamp;
        view.$dispatch('waitPanel', true);
        api.child(view.user+'/article/'+timeStamp).remove(function(err){
          if (err) {
            view.$dispatch('waitPanel', false);
            view.$dispatch('error', '删除失败');
          } else {
            api.child(curTS).remove(function(err){
              if (err){
                view.$dispatch('waitPanel', false);
                view.$dispatch('error', '删除失败');
              }else{
                //console.log('删除成功2！');
                view.$dispatch('waitPanel', false);
                view.$dispatch('toast', '删除成功');
                view.init();
                //console.log("初始化完成！");
                api.child(curYM).once('value',function(snapshot){
                    if(!snapshot.hasChildren()){
                      api.child(curYM).remove();
                      view.$dispatch('initNotePage');
                    }
                })
              } 
            })
          }
        });
      })
    },

    //获取value值列表
    getValues: function(uid, callback, err){
      var view = this;
      //view.$dispatch('waitPanel', true);
      NProgress.start();
      var vals = [];
      var timer;
      var DT = api.child(uid);
      DT.once("value", function(snapshot){
        if(snapshot.exists()){
          DT.orderByValue().on("child_added", function(snapshot) {
            vals.unshift(snapshot.val());
            if(timer) clearTimeout(timer);
            timer = setTimeout(function(){
              callback(vals);
              //view.$dispatch('waitPanel', false);
              NProgress.done();
              clearTimeout(timer);
            },30)
          });
        }else{
          err && err();
        };
      })
    }
  }
}
</script>