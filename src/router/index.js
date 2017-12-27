import Vue from 'vue'
import Router from 'vue-router'
import Chat from '@/pages/chat'
import Login from '@/pages/login'
import Register from '@/pages/register'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/room',
      name: 'room',
      component: Chat
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    }
  ]
})
