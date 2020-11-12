import Vue from "vue";
import App from "./App.vue";
// import './plugins/element.js'
import "./assets/css/tailwind.css"
import ElementUI from 'element-ui'
// import { Button, Menu, Submenu, MenuItem, MenuItemGroup, Input } from "element-ui";

// Vue.use(Button);
// Vue.use(Menu);
// Vue.use(Submenu);
// Vue.use(MenuItem);
// Vue.use(MenuItemGroup);
// Vue.use(Input);

import "element-ui/lib/theme-chalk/index.css";

Vue.use(ElementUI)
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
