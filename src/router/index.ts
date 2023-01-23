import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Landing from '../views/Landing.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landing',
      component: Landing,
      meta: {layout: 'LandingLayout'}
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta: {layout: 'DefaultLayout'}
    },
    
  ]
})

export default router
