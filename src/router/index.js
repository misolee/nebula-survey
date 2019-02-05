import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import Question from '@/components/Question'
import Stats from '@/components/Stats'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/question/:question_id',
      name: 'question',
      component: Question
    },
    {
      path: '/stats/:question_id',
      name: 'stats',
      component: Stats
    },
  ]
})
