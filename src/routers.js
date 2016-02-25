'use strict'

export default function(router) {
	router.map({
		'/home': {
			name : 'home',
			component: require('./components/views/home.vue')
		},
		'/note': {
			name : 'note',
			component: require('./components/views/note.vue'),
			subRoutes: {
			  '/:month': {
				component: require('./components/views/articlelist.vue'),
			  },
			  '/article/:timestamp': {
			  	component: require('./components/views/article.vue'),
			  }
			}
		},
		'/games': {
			name : 'games',
			component: require('./components/views/games.vue')
		},
		'/edit': {
			component: require('./components/views/edit.vue'),
		}
	})
}