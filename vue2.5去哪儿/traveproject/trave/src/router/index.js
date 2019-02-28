import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home'
import List from '@/components/list/List'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/list',
      name: 'List',
      component: List
    }
  ]
})
