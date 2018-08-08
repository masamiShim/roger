import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/pages/HelloWorld'
import ViewList from '@/components/pages/ViewList'
import Reservation from '@/components/pages/Reservation'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/viewList',
      name: 'ViewReservableList',
      component: ViewList
    },
    {
      path: '/reservation/:id',
      name: 'Reserve',
      component: Reservation,
      watch: {
        '$route' (to, from) {
          this.id = to.query.id
        }
      }
    }
  ]
})
