import Vue from 'vue'
import Router from 'vue-router'
import home from '../pages/home/home.vue'
import HomeSelect from '../pages/HomeSelect/HomeSelect.vue'
import HomeInfo from '../pages/HomeInfo/HomeInfo.vue'
import ticket from '../pages/ticket/ticket.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: home,
      redirect:'/home/select',
      children:[
        {
          path:'select',
          component:HomeSelect
        },
        {
          path:'info',
          component:HomeInfo
        }
      ]
    },
    {
      path:'/',
      redirect:'/home'
    },
    {
      path:'/ticket',
      name:'ticket',
      component:ticket
    }
  ]
})
