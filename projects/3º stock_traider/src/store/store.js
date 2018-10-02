import Vue from "vue"
import vuex from "vuex"

Vue.use(vuex)

export const store = new vuex.Store({
    state: {
        funds: 500,
        stocks: [
            {
                id: 1,
                name: "BMW",
                price: Math.floor(Math.random() * 80) + 10,
                quantity: "",
                selled: ""
            },
            {
                id: 2,
                name: "Google",
                price: Math.floor(Math.random() * 80) + 10,
                quantity: "",
                selled: ""
            },
            {
                id: 3,
                name: "Apple",
                price: Math.floor(Math.random() * 80) + 10,
                quantity: "",
                selled: ""
            }
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
        canBuy(state){
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
        updatePortfolio(state, payload) {
            if (state.canBuy) {
                let idExists = state.portfolio.some(item => item.id == payload.id)
                if (idExists) {
                    state.portfolio.forEach(item => {
                        if (item.id == payload.id) {
                            return item.quantity += payload.quantity
                        }
                    })
                } else {
                    state.portfolio.push(payload)
                }
            }

        },
        updatePortfolioQuantity(state, payload) {
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
            })
        },
        saveData(state) {
            // remove reactivity
            state.savedData = JSON.parse(JSON.stringify(state.portfolio))
        },
        changeLoadButtonState(state) {
            return state.loadButtonIsClicked = true
        }
    },
    actions: {
        updateFundsWhenBuying(context, payload) {
            context.commit("updateFundsWhenBuying", payload)
        },
        updateFundsWhenSelling(context, payload) {
            context.commit("updateFundsWhenSelling", payload)
        },
        updatePortfolio(context, payload) {
            context.commit("updatePortfolio", payload)
        },
        updatePortfolioQuantity(context, payload) {
            context.commit("updatePortfolioQuantity", payload)
        },
        createRandomPrice(context, payload) {
            context.commit("createRandomPrice", payload)
        },
        saveData(context, payload) {
            context.commit("saveData", payload)
        },
        changeLoadButtonState(context, payload) {
            context.commit("changeLoadButtonState", payload)
        }
    }

})