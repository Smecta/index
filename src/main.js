import Vue from "vue";
import App from "./App.vue";
// import './plugins/element.js'
import "./assets/css/tailwind.css"
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

import router from './router'
import store from './store'

Vue.use(ElementUI)
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount("#app");
