import Vue from "vue"
import Vuex from "vuex"
import counter from "./modules/counter"
import age from "./modules/age"

Vue.use(Vuex)

export const store = new Vuex.Store({
    modules: {
        counter,
        age
    }
})