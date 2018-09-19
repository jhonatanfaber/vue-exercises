<template>
    <div>
                                    <!-- asyncIncrement({by: 50, duration: 1000}) -->
        <button class="btn btn-primary" @click="increment(10)">Increment</button>
        <button class="btn btn-primary" @click="decrement(5)">Decrement</button>
    </div>
</template>

<script>
import {mapMutations} from "vuex"
import {mapActions} from "vuex"
    export default {
        methods: {
            ...mapActions([
                "increment",
                "decrement"
            ]),
            //this.$store.commit('increment')   //if we dont use mapMutations
            // increment(by){
            //     this.$store.dispatch("increment", by) //id we dont use mapActions
            // }
        }
    }
</script>