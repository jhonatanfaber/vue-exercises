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
        path: "/portfolio", name: "portfolio", component: Portfolio
    },
    {
        path: "/stocks", name: "stocks", component: Stocks
    },
    {
        path: "/users", name: "users", component: Users
    },
    {
        path: "/*", redirect: "/"
    },
]

