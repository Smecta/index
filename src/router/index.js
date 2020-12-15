import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
// 路由懒加载 方式  其中注释是定义生成的js文件分组是否同一个
// import Nav from '../views/Nav.vue'
const Nav = () => import(/* webpackChunkName: "home_index" */'../views/Nav.vue')
// import Home from '../components/Home.vue'
const Home = () => import(/* webpackChunkName: "home_index" */'../components/Home.vue')
// import Admin from '../components/Admin.vue'
const Admin = () => import(/* webpackChunkName: "home_index" */'../components/Admin.vue')

import Websocket from '../components/Websocket.vue'
import AxiosPage from '../components/AxiosPage.vue'
import AntvDemo from '../components/AntvDemo.vue'
import AntvG2Demo from '../components/AntvG2Demo.vue'
import EchartsDemo from '../components/EchartsDemo.vue'
import Index from '../components/Index.vue'

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
        component: () => import('../components/TabsDemo.vue')
      },
      {
        path: '/RouterDemo',
        component: () => import('../components/RouterDemo.vue')
      },
      {
        path: '/Slot',
        component: () => import('../components/Slot.vue')
      },
      {
        path: '/checkAll',
        component: () => import('../components/CheckAll.vue')
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
        component: () => import('../views/DataSource.vue')
      },
      {
        path: '/index/ServiceMonitor',
        name: 'ServiceMonitor',
        component: () => import('../views/service_monitor/ServiceMonitor.vue'),
        meta: {
          keepAlive: true //此组件不需要被缓存
        }
      },
      {
        path: '/index/ServiceMonitor/:id',
        name: 'ServiceMonitorPage',
        component: () => import('../views/service_monitor/ServiceMonitorPage.vue'),
        meta: {
          keepAlive: true //此组件不需要被缓存
        }
      },
      {
        path: '/index/ServerMonitor',
        name: 'ServerMonitor',
        component: () => import('../views/platform_monitor/ServerMonitor.vue')
      },
      {
        path: '/index/ServerMonitor/:id',
        name: 'ServerMonitorDet',
        component: () => import('../views/platform_monitor/ServerMonitorDet.vue')
      },
      {
        path: '/index/DatabaseMonitor',
        name: 'DatabaseMonitor',
        component: () => import('../views/platform_monitor/DatabaseMonitor.vue')
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes,
  mode:'history'
})

export default router
