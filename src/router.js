import Vue from 'vue'
import Router from 'vue-router'
import Portfolio from './views/Portfolio.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/portfolio',
      name: 'portfolio',
      component: Portfolio
    },
    {
      path: '/portfolio/:id',
      name: 'portfolio detail',
      component: Portfolio
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/*',
      name: 'home',
      component: Portfolio
    }
  ]
})
