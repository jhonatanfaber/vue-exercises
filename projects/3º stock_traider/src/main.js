import Vue from 'vue'
import VueRouter from "vue-router"
import App from './App.vue'
import { routes } from "./routes"
import { store } from "./store/store"

Vue.use(VueRouter)
export const busPrice = new Vue()

export const router = new VueRouter({
  routes,
  mode : "history"
})

console.log(store);

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
