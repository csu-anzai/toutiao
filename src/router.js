import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home'
import Login from './views/login'
import Main from './views/home/main'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    redirect: '/home'
  }, {
    path: '/login',
    component: Login
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    children: [{
      path: '',
      component: Main
    },
    {
      path: 'comment',
      component: () => import('./views/comment') // 按需加载
    },
    {
      path: 'material',
      component: () => import('./views/material') // 按需加载
    }]
  }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
