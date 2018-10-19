import { store } from "./store/store"
import Portfolio from "./components/Portfolio.vue"
import Stocks from "./components/Stocks.vue"
import Home from "./components/Home.vue"
import Login from "./components/Login.vue"
import Users from "./components/admin/Users.vue"


export const routes = [
    {
        path: '/', name: "home", component: Home
    },
    {
        path: '/login', name: "login", component: Login
    },
    {
        path: "/portfolio", name: "portfolio", component: Portfolio , beforeEnter (to, from, next) {
            if(store.getters.user.admin === false || localStorage.getItem("admin") == "false"){
                next()
            }else{
                next(from.path)
            }
        }
    },
    {
        path: "/stocks", name: "stocks", component: Stocks, beforeEnter(to, from, next) {
            if (store.getters.user.admin === false ||  localStorage.getItem("admin") == "false") {
                next()
            } else {
                next(from.path)
            }
        }
    },
    {
        path: "/users", name: "users", component: Users, beforeEnter(to, from, next) {
            console.log(store.getters.user.admin);
            
            if (store.getters.user.admin === true || localStorage.getItem("admin") == "true") {
                next()
            } else {
                next(from.path)
            }
        }
    },
    {
        path: "/*", redirect: "/"
    },
]

