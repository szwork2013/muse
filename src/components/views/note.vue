<style scoped>
.wrap{width:1200px; margin:18px auto; display:box; display:-webkit-box; box-shadow:0 4px 12px -2px rgba(0,0,0,0.18); -webkit-box-shadow:0 4px 12px -2px rgba(0,0,0,0.18); overflow:hidden;}
.sidebar{width:240px; min-height:620px; background-color:#f7f7f7;}
.sidebar.hide{display:none;}
.sidebar .inner{width:240px; height:100%;}
.content{-webkit-box-flex:1; box-flex:1; background-color:#FFF;}
.shead{width:100%; height:48px; line-height:48px; text-indent:15px; background-color:#3E8DBD; color:#FFF; font-weight:bold; font-size:18px;}
.time{width:100%; padding:20px 0 0;}
.clock{width:152px; height:152px; border-radius:50%; background:#fff; position:relative; margin:0 auto; box-shadow:0 0 12px 1px rgba(0,0,0,0.18) inset; -webkit-box-shadow:0 0 12px 1px rgba(0,0,0,0.18) inset; transition:box-shadow 2s; -webkit-transition:-webkit-box-shadow 2s;}
.clock >*{box-sizing:content-box; -webkit-box-sizing:content-box;}
.clock ol{list-style-type:none; width:100%; height:100%; position:relative; margin:0; padding:0;}
.clock ol li{counter-increment:labelCounter; position:absolute; font-size:1.25em; color:#666; display:block; height:28px; width:28px; text-align:center; line-height:28px; margin:-14px -14px 0 0; opacity:0; transition:opacity 2s; -webkit-transition:opacity 2s;}
.clock:hover{box-shadow:0 0 0 rgba(0,0,0,0) inset; -webkit-box-shadow:0 0 0 rgba(0,0,0,0) inset;}
.clock:hover ol li{opacity:1;}
.clock ol li:before{font-family:'Helvetica'; content:counter(labelCounter) ""; text-shadow:0 1px 0 rgba(0,0,0,0.12);}
.clock ol li:nth-child(1){right:46px; top:24px;}
.clock ol li:nth-child(2){right:24px; top:46px;}
.clock ol li:nth-child(3){right:16px; top:76px;}
.clock ol li:nth-child(4){right:24px; top:106px;}
.clock ol li:nth-child(5){right:46px; top:128px;}
.clock ol li:nth-child(6){right:76px; top:136px;}
.clock ol li:nth-child(7){right:106px; top:128px;}
.clock ol li:nth-child(8){right:128px; top:106px;}
.clock ol li:nth-child(9){right:136px; top:76px;}
.clock ol li:nth-child(10){right:127px; top:46px;}
.clock ol li:nth-child(11){right:106px; top:24px;}
.clock ol li:nth-child(12){right:76px; top:16px;}
@-webkit-keyframes spin{
	100%{-webkit-transform:rotate(360deg); transform:rotate(360deg);}
}
@keyframes spin{
	100%{-webkit-transform:rotate(360deg); transform:rotate(360deg);}
}
#hour{width:14px; height:14px; border-radius:50%; background:#303030; position:absolute; top:50%; left:50%; margin-top:-7px; margin-left:-7px; box-shadow:0 1px 4px rgba(0,0,0,0.32); -webkit-box-shadow:0 1px 4px rgba(0,0,0,0.32);}
#hour:before, #hour:after{content:""; display:block; position:absolute;}
#hour:before{width:8px; height:55px; border-radius:4px; background:#303030; position:absolute; bottom:2px; left:50%; -webkit-transform:translate(-50%, 0); -ms-transform:translate(-50%, 0); transform:translate(-50%, 0);}
#min{width:0; height:0; border-radius:50%; background:#303030; position:absolute; top:50%; left:50%;}
#min:before, #min:after{content:""; display:block; position:absolute;}
#min:before{width:6px; height:64px; border-radius:4px; background:#303030; position:absolute; bottom:2px; left:50%; -webkit-transform:translate(-50%, 0); -ms-transform:translate(-50%, 0); transform:translate(-50%, 0);}
#sec{width:4px; height:4px; border-radius:50%; background:#dd3e1c; border:2px solid #e13e1b; position:absolute; top:50%; left:50%; margin-top:-4px; margin-left:-4px;}
#sec:before, #sec:after{content:""; display:block; position:absolute;}
#sec:before{width:2px; height:80px; border-radius:4px; background:#e13e1b; position:absolute; bottom:-12px; left:50%; -webkit-transform:translate(-50%, 0); -ms-transform:translate(-50%, 0); transform:translate(-50%, 0);}
.slist{margin-bottom:80px;}
.slist h1{font-size:16px; line-height:58px; font-weight:bold; text-indent:15px; color:#3E8DBD;}
.slist li{width:100%; height:53px; line-height:53px; font-size:16px; text-indent:50px; background:url(../../assets/timer.svg) 15px center no-repeat; background-size:20px auto; color:#888; cursor:pointer; transition:all .3s; border-left:5px solid transparent;} 
.slist li.active,.slist li:hover{background-color:#fcfcfc; text-shadow:0 1px 0 #eee; color:#333;}
.slist li.active{border-left:5px solid #5D9CEC; padding-left:0;}
</style>
<template>
<div class="wrap">
	<style>.uploader{display:none;}</style>
	<div class="sidebar" :class="{'hide': hideSidebar}">
		<div class="inner">
			<div class="shead">TIMELINE</div>
		    <div class="time">
		    	<div class="clock">
		            <ol>
		                <li></li>
		                <li></li>
		                <li></li>
		                <li></li>
		                <li></li>
		                <li></li>
		                <li></li>
		                <li></li>
		                <li></li>
		                <li></li>
		                <li></li>
		                <li></li>
		            </ol>
		            <div id="hour"></div>
		            <div id="min"></div>
		            <div id="sec"></div>
		        </div>
		    </div>
		    <div class="slist">
		    	<h1>发布月份</h1>
		    	<ul v-el:month-list>
		            <li v-if="months" track-by="$index" v-for="item in months" v-link="{ path: '/note/'+item, activeClass: 'active' }">{{item | formatMonth}}</li>
		        </ul>
		    </div>
		</div>
	</div>
	<div class="content">
		<router-view :user="user"></router-view>
	</div>
</div>
</template>

<script>
import Vue from 'Vue'
import Firebase from 'firebase'
import NProgress from 'nprogress'
const api = new Firebase('https://zenway.firebaseio.com/')
require('../../assets/simditor.css')

//自定义过滤器
function formatMonth(m){
	var str = m.substring(0,4) +'年'+ m.substring(4) +'月';
	return str;
}

Vue.filter('formatMonth', formatMonth)

export default {
	name: 'note',
	props: {
		user: ''
	},
	data () {
		return {
			log: 'Hello About!',
			months: null,
			articleList: null,
			monthIndex: null,
			hideSidebar: false
		}
	},
	events: {
		initNotePage: function(){
			this.initPage();
		},
		setUser: function(params){
			this.user = params;
			this.redirectPage();
		},
		redirect: function(){
			this.redirectPage();
		}
	},
	ready () {
		var view = this;
		window.requestAnimFrame = (function() {
		    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame ||
		    function(callback) {
		        window.setTimeout(callback, 1000 / 60);
		    };
		})();
		(function clock() {
		    var hour = document.getElementById("hour"),
		    mnt = document.getElementById("min"),
		    sec = document.getElementById("sec");
		    (function loop() {
		        requestAnimFrame(loop);
		        draw();
		    })();
		    function draw() {
		        var now = new Date(),
		        then = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0),
		        diffInMil = (now.getTime() - then.getTime()),
		        h = (diffInMil / (1000 * 60 * 60)),
		        m = (h * 60),
		        s = (m * 60);

		        sec.style.webkitTransform = "rotate(" + (s * 6) + "deg)";
		        hour.style.webkitTransform = "rotate(" + (h * 30) + "deg)";
		        mnt.style.webkitTransform = "rotate(" + (m * 6) + "deg)";
		    }
		})();
		//一套角度换算
		/*for(var i = 0; i<12; i++){
				var deg = i*30;
				var tdg = deg*0.017453293;
				var x = 76 - Math.cos(tdg)*60;
				var y = 76 - Math.sin(tdg)*60;
				console.log(deg+'==right=='+x+'==top=='+y);
			}*/
		////////////////////////////////////婚割线//////////////////////////////////////	
		NProgress.configure({ minimum: 0.2 });
		view.initPage();
	},
	beforeDestroy () {
		api.child(this.user+'/note').off("child_added");
	},
	route: {
		data (){
			var view = this;
			view.$route.params.month ? view.hideSidebar = false : view.hideSidebar = true;
		}
	},
	methods: {
		//初始化页面
		initPage: function(callback){
			var view = this;
			view.getKeys(view.user+'/note', function(data){
				view.months = data;
				var newPath = '/note/'+data[0];
				//重定向页面
				router.redirect({
					'/note': newPath
				})
				if($.isEmptyObject(view.$route.params)){
					router.go({path: newPath});
				}else{
					callback && callback();
				}	
			})
		},
		redirectPage: function(){
			var view = this;
			view.initPage(function(){
				router.go({path: '/note/'+view.months[0]});
			});
		},
		//获取key值列表
		getKeys: function(uid, callback){
			var view = this;
	     	//view.$dispatch('waitPanel', true);
	     	NProgress.start();
	     	var arr = [];
			var timer;
			api.child(uid).orderByKey().on("child_added", function(snapshot) {
			  arr.unshift(snapshot.key());
			  if(timer) clearTimeout(timer);
			  timer = setTimeout(function(){
			  	callback(arr);
			  	//view.$dispatch('waitPanel', false);
			  	NProgress.done();
			  	clearTimeout(timer);
			  },30)
			});
		}
	}
}
</script>