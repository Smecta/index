import Vue from "vue";
import App from "./App.vue";
// import axios from "axios"
// import VueAxios from 'vue-axios'
// import './plugins/element.js'
import "./assets/css/tailwind.css"
import 'font-awesome/css/font-awesome.css'
import 'normalize.css/normalize.css'
import ElementUI from 'element-ui'

// 按需引入
// import { Button, Menu, Submenu, MenuItem, MenuItemGroup, Input } from "element-ui";
// Vue.use(Button);
// Vue.use(Menu);
// Vue.use(Submenu);
// Vue.use(MenuItem);
// Vue.use(MenuItemGroup);
// Vue.use(Input);

import "element-ui/lib/theme-chalk/index.css";
import './assets/css/style.scss'

import router from './router'
import store from './store'
import echarts from 'echarts'

Vue.prototype.$echarts = echarts;
// Vue.use(VueAxios, axios)
// axios.defaults.baseURL="http://10.88.212.43:18783";
// axios.defaults.baseURL="http://192.168.124.149:3008";
import http from "./http";
Vue.prototype.$http = http;
Vue.use(ElementUI)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount("#app");
