import Vue from "vue"
import vuex from "vuex"
import axios from "axios"

Vue.use(vuex)

export const store = new vuex.Store({
    state: {
        funds: 500,
        stocks: [
            // {
            //     id: 1,
            //     name: "BMW",
            //     price: Math.floor(Math.random() * 80) + 10,
            //     quantity: "",
            //     selled: ""
            // },
            // {
            //     id: 2,
            //     name: "Google",
            //     price: Math.floor(Math.random() * 80) + 10,
            //     quantity: "",
            //     selled: ""
            // },
            // {
            //     id: 3,
            //     name: "Apple",
            //     price: Math.floor(Math.random() * 80) + 10,
            //     quantity: "",
            //     selled: ""
            // }
        ],
        portfolio: [],
        savedData: [],
        loadButtonIsClicked: false,
        canBuy: true
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
            // remove reactivity
            state.savedData = JSON.parse(JSON.stringify(state.portfolio))
        },
        changeLoadButtonState(state) {
            return state.loadButtonIsClicked = true
        },
        settingStocks(state, data) {
            data.forEach(item => {
                item.price = Math.floor(Math.random() * 80) + 10
            })
            state.stocks = data
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
        changeLoadButtonState(context, payload) {
            context.commit("changeLoadButtonState", payload)
        },
        initStocks(context) {
            axios.get("https://stock-traider.firebaseio.com/data.json")
                .then(response => {
                    context.commit("settingStocks", response.data.stocks)
                })
        }
    }

})