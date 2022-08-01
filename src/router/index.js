import { createRouter, createWebHistory } from 'vue-router'
import Face from '../views/Face.vue'
const routes = [
  {
    path: '/',
    name: 'face',
    component: Face
  },
  {
    path: '/fontEnd',
    name: 'fontEnd',
    component: () =>
      import(/* webpackChunkName: "fontEnd" */ '../views/fontEnd.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
