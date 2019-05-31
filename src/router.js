import Vue from 'vue'
import Router from 'vue-router'
import Event from './components/Event.vue'
import Menu from './components/Menu.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/create',
      name: 'Menu',
      component: Menu
    },
    {
      path: '/event/:id',
      name: 'event',
      component: Event
    },
    {
        path: '*',
        redirect: '/create'
    }
  ]
})
