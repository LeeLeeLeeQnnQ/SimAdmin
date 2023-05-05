import { RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/index.vue';

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    redirect: '/home',
    meta: {
      title: '首页',
      keepAlive: false
    },
    component: Layout,
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('@/views/home.vue'),
        meta: { title: '首页', keepAlive: false, showTab: true }
      }
    ]
  }
]