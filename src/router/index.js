import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '../components/Dashboard'
import Question from '../components/Question'
import Stats from '../components/Stats'
import Thankyou from '../components/Thankyou'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/question',
      name: 'question',
      component: Question
    },
    {
      path: '/stats/:question_id',
      name: 'stats',
      component: Stats
    },
    {
      path: '/thankyou/:question_id',
      name: 'thankyou',
      component: Thankyou
    }
  ]
})
