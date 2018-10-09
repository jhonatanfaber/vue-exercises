import Portfolio from "./components/Portfolio.vue"
import Stocks from "./components/Stocks.vue"
import Home from "./components/Home.vue"
import Login from "./components/Login.vue"


export const routes = [
    {path: '/', component: Home},
    {path: '/login', component: Login},
    {path: "/portfolio", component: Portfolio},
    {path:"/stocks", component: Stocks},
    {path: "/*", redirect: "/"},
]