//Initialize Device Root Size (Mobile)
/*(function(doc, win){
	var docEl = doc.documentElement, resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize', recalc = function(){
		var clientWidth = docEl.clientWidth;
		var rootSize = 100 * (clientWidth / 640);
		rootSize > 58.5938 ? rootSize = 58.5938 : null;
		docEl.style.fontSize = rootSize + 'px';
	};
	if(!doc.addEventListener){
		return;
	}
	win.addEventListener(resizeEvt, recalc, false);
	doc.addEventListener('DOMContentLoaded', recalc, false);
	
})(document, window);
*/
import Vue from 'Vue'
import Router from 'vue-router'
import App from './app.vue'
import routerMap from './routers'
import filter from './filter'
import NProgress from 'nprogress'
//解决移动端点击问题
//import FastClick from 'fastclick'

//引入第三方功能库
//require('./libs/jquery.finger')
require('./libs/requestAnimationFrame')

// 自定义过滤器
Object.keys(filter).forEach(function(k) {
  Vue.filter(k, filter[k]);
});

//directive
/*var directive = require('./directive')

Object.keys(directive).forEach(function(k) {
  Vue.directive(k, directive[k]);
});*/

Vue.use(Router);
var router = new Router();

routerMap(router);

router.beforeEach(function () {
  //window.scrollTo(0, 0);
  NProgress.done();
  //FastClick.attach(document.body);
});

router.redirect({
  '*': '/home'
});

window.router = router;

router.start(App, '#app');

