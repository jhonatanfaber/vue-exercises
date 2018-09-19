const state = {
    counter: 0
}

const getters = {
    doubleCounter: state => {
        return state.counter
    },
    clicksCounter: state => {
        return state.counter + " clicks"
    }
}

const mutations = {
    increment : (state, payload) => {
        return state.counter += payload
    },
    decrement: (state,payload) => {
        return state.counter -= payload
    }
}

// Actions: use in combination with mutations when you want to do
// some asynchronous tasks
const actions = {
    increment : (context, payload) => {
        context.commit("increment", payload)
    },
    // es6: destructuring
    decrement : ({commit}, payload) => {
        commit("decrement",payload)
    },
    asyncIncrement : ({commit}, payload) => {
        setTimeout( () => {
            commit("increment", payload.by)
        }, payload.duration)
    },
    asyncDecrement : ({commit}, payload) => {
        setTimeout( () => {
            commit("decrement", payload.by)
        },payload.duration)
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}