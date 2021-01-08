import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
// 路由懒加载 方式  其中注释是定义生成的js文件分组是否同一个
// import Nav from '../views/Nav.vue'
const Nav = () => import(/* webpackChunkName: "home_index" */'../views/main/Nav.vue')
// import Home from '../components/Home.vue'
const Home = () => import(/* webpackChunkName: "home_index" */'../views/home/Home.vue')
// import Admin from '../components/Admin.vue'
const Admin = () => import(/* webpackChunkName: "home_index" */'../views/admin/Admin.vue')

import Websocket from '../components/Websocket.vue'
import AxiosPage from '../components/AxiosPage.vue'
import Scroll from '@/views/admin/components/Scroll.vue'
import AntvDemo from '../components/AntvDemo.vue'
import AntvG2Demo from '../components/AntvG2Demo.vue'
import EchartsDemo from '../components/EchartsDemo.vue'
import Index from '@/views/index/Index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Nav',
    component: Nav
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
    children: [
      { path: '/websocket', component: Websocket },
      { path: '/scroll', component: Scroll },
      { path: '/axios', component: AxiosPage },
      { path: '/antvDemo', component: AntvDemo },
      { path: '/antvG2Demo', component: AntvG2Demo },
      { path: '/echartsDemo', component: EchartsDemo },
      {
        path: '/fontDemo',
        component: () => import('../components/FontDemo.vue')
      },
      {
        path: '/tabsDemo',
        component: () => import('@/views/admin/components/tabs/TabsDemo.vue')
      },
      {
        path: '/tabsDemo2',
        component: () => import('@/views/admin/components/tabs/TabsDemo2.vue')
      },
      {
        path: '/RouterDemo',
        component: () => import('@/views/admin/components/tabs/RouterDemo.vue')
      },
      {
        path: '/Slot',
        component: () => import('@/views/admin/components/slot/Slot.vue')
      },
      {
        path: '/checkAll',
        component: () => import('@/views/admin/components/checkbox/CheckAll.vue')
      },
      {
        path: '/select',
        component: () => import('@/views/admin/components/dialog/index.vue')
      },
      {
        path: '/SelectDemo',
        component: () => import('@/views/admin/components/SelectDemo.vue')
      }
    ]
  },
  {
    path: '/index',
    name: 'Index',
    component: Index,
    children: [
      {
        path: '/index/dataSource',
        name: 'DataSource',
        component: () => import('../views/index/components/data_source_monitor/DataSource.vue')
      },
      {
        path: '/index/ServiceMonitor',
        name: 'ServiceMonitor',
        component: () => import('../views/index/components/service_monitor/ServiceMonitor.vue'),
        meta: {
          keepAlive: true //此组件不需要被缓存
        }
      },
      {
        path: '/index/ServiceMonitor/:id',
        name: 'ServiceMonitorPage',
        component: () => import('../views/index/components/service_monitor/ServiceMonitorPage.vue'),
        meta: {
          keepAlive: true //此组件不需要被缓存
        }
      },
      {
        path: '/index/ServerMonitor',
        name: 'ServerMonitor',
        component: () => import('../views/index/components/platform_monitor/ServerMonitor.vue')
      },
      {
        path: '/index/ServerMonitor/:id',
        name: 'ServerMonitorDet',
        component: () => import('../views/index/components/platform_monitor/ServerMonitorDet.vue')
      },
      {
        path: '/index/DatabaseMonitor',
        name: 'DatabaseMonitor',
        component: () => import('../views/index/components/platform_monitor/DatabaseMonitor.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes,
  mode:'history'
})

export default router
