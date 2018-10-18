import Vue from 'vue'
import VueRouter from "vue-router"
import App from './App.vue'
import { routes } from "./routes"
import { store } from "./store/store"

Vue.use(VueRouter)
export const busPrice = new Vue()

export const router = new VueRouter({
  routes,
  mode: "history"
})

const openRoutes = ["home", "login"]
router.beforeEach((to, from, next) => {
  if (openRoutes.includes(to.name)) {
    next()
  } else if (store.state.user.token) {
    next()
  } else {
    next("/login")
  }

});

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
