import { createRouter, createWebHistory } from 'vue-router'
import { routerConfig } from './config'

const router = createRouter({
  history: createWebHistory(),
  routes:routerConfig,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      window.scrollY = 0;
      return { top: 0 };
    }
  },
})

export default router