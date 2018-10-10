import Portfolio from "./components/Portfolio.vue"
import Stocks from "./components/Stocks.vue"
import Home from "./components/Home.vue"
import Login from "./components/Login.vue"
import {store} from "./store/store"


export const routes = [
    {path: '/', component: Home},
    {path: '/login', component: Login},
    {path: "/portfolio", component: Portfolio, beforeEnter: (to, from, next) => {
        if(store.state.user.token){
            next()
        }else{
            next("/login")
        }}},
    {path:"/stocks", component: Stocks,  beforeEnter: (to, from, next) => {
        if(store.state.user.token){
            next()
        }else{
            next("/login")
        }}},
    {path: "/*", redirect: "/"},
]