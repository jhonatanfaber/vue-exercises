import Vue from "vue"
import vuex from "vuex"

Vue.use(vuex)

export const store = new vuex.Store({
    state: {
        funds: 10,
        stocks: [
            {
                id: 1,
                name: "BMW",
                price: Math.floor(Math.random() * 80) + 10,
                quantity: 10,
                selled: 1
            },
            {
                id: 2,
                name: "Google",
                price: Math.floor(Math.random() * 80) + 10,
                quantity: 20,
                selled: 2
            },
            {
                id: 3,
                name: "Apple",
                price: Math.floor(Math.random() * 80) + 10,
                quantity: 0,
                selled: 3
            },
            {
                id: 4,
                name: "hkjg",
                price: Math.floor(Math.random() * 80) + 10,
                quantity: 0,
                selled: 4
            }
        ],
        portfolio: []
    },
    getters: {
        stocks: state => {
            return state.stocks
        },
        funds: state => {
            return state.funds
        },
        portfolio: state => {
            return state.portfolio
        }
    },
    mutations: {
        updateFunds(state, payload) {
            state.funds = payload
        },
        updatePortfolio(state, payload) {
            let idExists = state.portfolio.some(item => item.id == payload.id)
            if (idExists) {
                state.portfolio.forEach(item => {
                    if (item.id == payload.id) {
                        return item.quantity += payload.quantity
                    }
                })
            }else{
                state.portfolio.push(payload)
            }
        },
        updatePortfolioQuantity(state, payload){
            if(payload.quantity <= 0){
                return state.portfolio.forEach((item, index) => {
                    if(item.id == payload.id){
                        state.portfolio.splice(index, 1)
                    } 
                })
            } 
            state.portfolio.forEach((item) => {
                if(item.id == payload.id){
                    item.quantity = payload.quantity
                }
            })
        }
    },
    actions: {
        updateFunds(context, payload) {
            context.commit("updateFunds", payload)
        },
        updatePortfolio(context, payload) {
            context.commit("updatePortfolio", payload)
        },
        updatePortfolioQuantity(context, payload){
            context.commit("updatePortfolioQuantity", payload)
        }
    }

})