import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import Nav from '../views/Nav.vue'
import Home from '../components/Home.vue'
import Admin from '../components/Admin.vue'
import Websocket from '../components/Websocket.vue'
import AxiosPage from '../components/AxiosPage.vue'
import AntvDemo from '../components/AntvDemo.vue'
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
      { path: '/echartsDemo', component: EchartsDemo },
      {
        path: '/fontDemo',
        component: () => import('../components/FontDemo.vue')
      },
      {
        path: '/tabsDemo',
        component: () => import('../components/TabsDemo.vue')
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
        component: () => import('../views/service_monitor/ServiceMonitor.vue')
      },
      {
        path: '/index/ServiceMonitor/:id',
        name: 'ServiceMonitor',
        component: () => import('../views/service_monitor/ServiceMonitorPage.vue')
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
