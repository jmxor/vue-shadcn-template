import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        breadcrumbs: [{ name: 'Home', link: '/' }],
      },
    },
    {
      path: '/about',
      name: 'About',
      component: AboutView,
      meta: {
        breadcrumbs: [
          { name: 'Home', link: '/' },
          { name: 'About', link: '/about' },
        ],
      },
    },
  ],
})

export default router
