import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import CodingView from '../views/CodingView.vue'
import FoodView from '../views/FoodView.vue'
import NotFoundView from '../views/NotFoundView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/code',
    name: 'code',
    component: CodingView
  },
  {
    path: '/food',
    name: 'food',
    component: FoodView
  },
  {
    path: '/*',
    name: 'notFound',
    component: NotFoundView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
