import Vue from "vue"
import vuex from "vuex"
import customisedUsersAxios from "./../customisedAxios/usersAxios.js"
import customisedStocksAxios from "./../customisedAxios/stocksAxios.js"
import { router } from "./../main.js"

Vue.use(vuex)

export const store = new vuex.Store({
    state: {
        funds: 800,
        stocks: [],
        portfolio: [],
        savedData: [],
        loadButtonIsClicked: false,
        canBuy: true,
        user: {},
        invalidUser: false,
        isAdmin: false,
        users: []
    },
    getters: {
        funds: state => {
            return state.funds
        },
        stocks: state => {
            return state.stocks
        },
        portfolio: state => {
            return state.portfolio
        },
        savedData(state) {
            return state.savedData
        },
        loadButtonIsClicked(state) {
            return state.loadButtonIsClicked
        },
        canBuy(state) {
            return state.canBuy
        },
        user(state) {
            return state.user
        },
        invalidUser(state) {
            return state.invalidUser
        },
        isAdmin(state) {
            return state.isAdmin
        },
        users(state) {
            return state.users
        }
    },
    mutations: {
        updateFundsWhenBuying(state, payload) {
            state.canBuy = true
            let outgoings = payload.price * payload.quantity
            if (outgoings > state.funds) {
                state.canBuy = false
                return
            }
            state.funds -= outgoings
        },
        updateFundsWhenSelling(state, payload) {
            let outgoings = payload.price * payload.selled
            state.funds += outgoings
        },
        buyStock(state, payload) {
            if (state.canBuy) {
                let element = state.portfolio.find(item => item.admin == payload.id)
                if (element) {
                    element.quantity += payload.quantity
                } else {
                    state.portfolio.push(payload)
                }
            }
        },
        sellStock(state, payload) {
            if (payload.quantity <= 0) {
                return state.portfolio.forEach((item, index) => {
                    if (item.id == payload.id) {
                        state.portfolio.splice(index, 1)
                    }
                })
            }
            state.portfolio.forEach((item) => {
                if (item.id == payload.id) {
                    item.quantity = payload.quantity
                }
            })
        },
        createRandomPrice(state) {
            state.stocks.forEach(stock => {
                let randomNumber = Math.floor(Math.random() * 80) + 10
                state.portfolio.forEach(item => {
                    if (item.id == stock.id) {
                        item.price = randomNumber
                    }
                    stock.price = randomNumber
                })
                stock.price = randomNumber
            })
        },
        changeLoadButtonState(state, data) {
            state.savedData = data
            return state.loadButtonIsClicked = true
        },
        settingStocks(state, data) {
            data.forEach(item => {
                item.price = Math.floor(Math.random() * 80) + 10
            })
            state.stocks = data
        },
        login(state, data) {
            state.user = data
        },
        getUsers(state, data) {
            state.users = data
        },
        createUser(state, data) {
            state.users.push(data)
        },
        deleteUser(state, payload) {
            state.users.splice(payload.index, 1)
        },
        editUser(state, data) {
            state.users.forEach(user => {
                if (user.id == data.id) {
                    user.name = data.name
                    user.password = data.password
                    user.admin = data.admin
                }
            })
        },
        clearUserData(state){
            state.user = {};
            state.isAdmin = false
            localStorage.clear()
        }
    },
    actions: {
        updateFundsWhenBuying(context, payload) {
            context.commit("updateFundsWhenBuying", payload)
        },
        updateFundsWhenSelling(context, payload) {
            context.commit("updateFundsWhenSelling", payload)
        },
        buyStock(context, payload) {
            context.commit("buyStock", payload)
        },
        sellStock(context, payload) {
            context.commit("sellStock", payload)
        },
        createRandomPrice(context, payload) {
            context.commit("createRandomPrice", payload)
        },
        saveData(context, payload) {
            customisedStocksAxios.put("/data/savedPortfolio.json", context.state.portfolio)
                .then(response => console.log(response))
        },
        changeLoadButtonState(context) {
            customisedStocksAxios.get("/data.json")
                .then(response => {
                    context.commit("changeLoadButtonState", response.data.savedPortfolio)
                })
        },
        initStocks(context) {
            customisedStocksAxios.get("/data.json")
                .then(response => {
                    context.commit("settingStocks", response.data.stocks)
                })
        },
        login(context, payload) {
            customisedUsersAxios.post("/login", payload)
                .then(res => {
                    if (res.data.token) {
                        if (res.data.admin) {
                            context.state.isAdmin = true
                        }
                        //redirects to home after log in
                        router.push({ path: "/" })
                        context.commit("login", res.data)

                        // auto log out after X seconds has passed(check out API to see the expiresIn value)
                        context.dispatch("setLogoutTimer", res.data.expiresIn)

                        let now = new Date(Date.now());
                        let expirationDate = new Date(now.getTime() + (res.data.expiresIn * 1000));
                        localStorage.setItem("expirationDate", expirationDate)
                        localStorage.setItem("token", res.data.token);
                        localStorage.setItem("id", res.data.id);
                        localStorage.setItem("username", res.data.username);
                        localStorage.setItem("admin", res.data.admin);
                    }
                })
                .catch(error => {
                    context.state.invalidUser = true
                })
        },
        getUsers(context, payload) {
            customisedUsersAxios.get("/users", {
                headers: {
                    'x-api-token': context.state.user.token
                }
            })
                .then(response => {
                    context.commit("getUsers", response.data)
                })
        },
        createUser(context, payload) {
            customisedUsersAxios.post("/users", payload, {
                headers: {
                    'x-api-token': context.state.user.token
                }
            })
                .then(response => {
                    context.commit("createUser", response.data)
                })
        },
        deleteUser(context, payload) {
            customisedUsersAxios.delete("/users/" + payload.id, {
                headers: {
                    'x-api-token': context.state.user.token
                }
            })
                .then(response => {
                    context.commit("deleteUser", payload)
                })
        },
        editUser(context, payload) {
            customisedUsersAxios.put("/users/" + payload.id, payload, {
                headers: {
                    'x-api-token': context.state.user.token
                }
            })
                .then(res => {
                    context.commit("editUser", res.data)
                })
        },
        setLogoutTimer(context, expirationTime){
            setTimeout( () => {
                context.commit("clearUserData")
            }, expirationTime * 1000)
        },
        //dispatched in app.vue
        tryAutoLogin(context){
            const token = localStorage.getItem("token");
            if(!token) return 
            const expirationDate = localStorage.getItem("expirationDate")
            const now = Date.now()
            if(now >= new Date (expirationDate)){
                context.commit("clearUserData")
                return
            } 
            const id = localStorage.getItem("id")
            const username = localStorage.getItem("username")
            const admin = localStorage.getItem("admin")
            if(admin === "true"){
                context.state.isAdmin = true
            }
            context.commit("login", {
                id,
                username,
                admin,
                token
            })
            

        }
    }

})