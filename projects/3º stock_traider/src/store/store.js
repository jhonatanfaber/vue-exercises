import Vue from "vue"
import vuex from "vuex"
import axios from "axios"
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
                let element = state.portfolio.find(item => item.id == payload.id)
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
        saveData(state) {
            axios.put("https://stock-traider.firebaseio.com/data/savedPortfolio.json", state.portfolio)
                .then(response => console.log(response))
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
            state.user.token = data.token
        },
        getUsers(state, data) {
            state.users = data
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
            context.commit("saveData", payload)
        },
        changeLoadButtonState(context) {
            axios.get("https://stock-traider.firebaseio.com/data.json")
                .then(response => {
                    context.commit("changeLoadButtonState", response.data.savedPortfolio)
                })
        },
        initStocks(context) {
            axios.get("https://stock-traider.firebaseio.com/data.json")
                .then(response => {
                    context.commit("settingStocks", response.data.stocks)
                })
        },
        login(context, payload) {
            axios.post("http://localhost:3000/login", payload)
                .then(res => {
                    if (res.data.token) {
                        if (res.data.admin) {
                            context.state.isAdmin = true
                        }
                        router.push({ path: "/" })
                        context.state.user = res.data
                        context.commit("login", res.data)
                    }
                })
                .catch(error => {
                    context.state.invalidUser = true
                })
        },
        getUsers(context, payload) {
            axios.get("http://localhost:3000/users", {
                headers: {
                    'x-api-token': context.state.user.token
                }
            })
                .then(response => {
                    context.commit("getUsers", response.data)
                })
        }
    }

})