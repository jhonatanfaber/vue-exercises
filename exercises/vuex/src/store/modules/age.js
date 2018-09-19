const state = {
    age: 0
}

const getters = {
    age: state => {
        return state.age;
    }
}

const mutations = {
    updateAge: (state, value) => {
        return state.age = value
    }
}

// Actions: use in combination with mutations when you want to do
// some asynchronous tasks
const actions = {
    updateAge: (context, value) => {
        context.commit("updateAge", value)
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}