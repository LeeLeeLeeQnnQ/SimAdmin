import { RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/index.vue';
import { HomeOutlined , AreaChartOutlined } from '@ant-design/icons-vue';


export const routerConfig: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    redirect: '/home',
    meta: {
      title: '首页',
      keepAlive: false,
      icon:HomeOutlined
    },
    component: Layout,
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('@/views/home.vue'),
        meta: { 
          title: '首页', 
          keepAlive: false, 
          showTab: false 
        }
      }
    ]
  },
  {
    path: '/chart',
    name: 'chart',
    meta: {
      title: '图表',
      keepAlive: false,
      icon:AreaChartOutlined
    },
    component: Layout,
    children: [
      {
        path: '/chartBar',
        name: 'chartBar',
        component: () => import('@/views/chart/chartBar.vue'),
        meta: { 
          title: '柱状图', 
          keepAlive: false, 
          showTab: true,
        },
      },
      {
        path: '/chartPie',
        name: 'chartPie',
        component: () => import('@/views/chart/chartPie.vue'),
        meta: { 
          title: '饼状图图', 
          keepAlive: false, 
          showTab: true 
        }
      }
    ]
  }
]