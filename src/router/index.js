import Vue from 'vue'
import Router from 'vue-router'
import home from '../pages/home/home.vue'
import HomeSelect from '../pages/HomeSelect/HomeSelect.vue'
import HomeInfo from '../pages/HomeInfo/HomeInfo.vue'
import ticket from '../pages/ticket/ticket.vue'
import TicketHot from '../pages/TicketHot/TicketHot.vue'
import TicketComing from '../pages/TicketComing/TicketComing.vue'
import movie from '../pages/movie/movie.vue'


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
      path: '/ticket',
      component: ticket,
      redirect:'/ticket/hot',
      children:[
        {
          path:'hot',
          component:TicketHot
        },
        {
          path:'coming',
          component:TicketComing
        }
      ]
    },
    {
      path:'/movie/:movieId',
      name:'movie',
      component:movie
    },
    {
      path:'/',
      redirect:'/home'
    }
  ]
})
