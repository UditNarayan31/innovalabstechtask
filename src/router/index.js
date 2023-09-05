import { createRouter, createWebHistory } from 'vue-router'
import QaView from '../views/QuestionA.vue'
import QbView from '../views/QuestionB.vue'

const routes = [
  {
    path: '/',
    name: 'Question A',
    component: QaView
  },
  {
    path: '/questionB',
    name: 'Question B',
    component: QbView
  },
  {
    path: '/questionC',
    name: 'Question C',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/QuestionC.vue')
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
