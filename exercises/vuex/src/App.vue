<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Vuex</h1>
                <app-result></app-result>
                <another-result/>
                <hr>
                <app-counter></app-counter>
                <another-counter/>
                <hr>
                <input  v-model="age" placeholder="Type your age">
                <p> {{ age }} </p>
            </div>
        </div>
    </div>
</template>

<script>
    import Counter from './components/Counter.vue';
    import AnotherCounter from './components/AnotherCounter.vue';
    import Result from './components/Result.vue';
    import AnotherResult from './components/AnotherResult.vue';

    export default {
        computed: {
            age:{
                get(){
                    return this.$store.getters.age
                },
                set(value){
                    this.$store.dispatch("updateAge", value)
                }
            }
        },
        components: {
            appCounter: Counter,
            appResult: Result,
            AnotherResult: AnotherResult,
            AnotherCounter: AnotherCounter,
        }
    }
</script>

