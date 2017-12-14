import Vue from 'vue'
import Router from 'vue-router'
import backgroundone from '@/components/BackGroundOne'
import backgroundtwo from '@/components/BackGroundTwo'
import backgroundthree from '@/components/BackGroundThree'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: backgroundone
    }, {
      path: '/one',
      name: 'backgroundone',
      component: backgroundone
    }, {
      path: '/two',
      name: 'backgroundtwo',
      component: backgroundtwo
    }, {
      path: '/three',
      name: 'backgroundthree',
      component: backgroundthree
    }
  ]
})
