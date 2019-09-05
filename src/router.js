import Vue from 'vue'
import Router from 'vue-router'
import Welcome from './components/Welcome.vue'
import WareHouse from './components/WareHouse.vue'
import PickUp from './components/PickUp.vue'
import ListView from './components/ListView.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'weclome',
      component: Welcome
    },
    {
      path: '/WareHouse',
      name: 'WareHouse',
      component: WareHouse
    },
    {
      path: '/PickUp',
      name: 'PickUp',
      component: PickUp
    },
    {
      path: '/ListView',
      name: 'ListView',
      component: ListView
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
