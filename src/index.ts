import Vue from 'vue'
import App from './App.vue'
import { routes } from "./router/routes"
import Router from "vue-router";
import store from "./store";

Vue.use(Router);
const router = new Router ({
base: process.env.BASE_URL,
  routes,
  mode:'history'
});

import './styles.scss'

new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount("#app");

