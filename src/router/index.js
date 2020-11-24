import Vue from "vue";
import VueRouter from "vue-router";
// import Home from '../views/Home.vue'
import Home from "../components/Home.vue";
import Admin from "../components/Admin.vue";
import Websocket from "../components/Websocket.vue";
import AxiosPage from "../components/AxiosPage.vue";
import AntvDemo from "../components/AntvDemo.vue";
import EchartsDemo from "../components/EchartsDemo.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/admin",
    name: "Admin",
    component: Admin,
    children: [
      { path: "/websocket", component: Websocket },
      { path: "/axios", component: AxiosPage },
      { path: "/antvDemo", component: AntvDemo },
      { path: "/echartsDemo", component: EchartsDemo },
    ],
  },
  {
    path:"/demo",
    name:'demo',
    component:() => import("../components/demo.vue")
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
