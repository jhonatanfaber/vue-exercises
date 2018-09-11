<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <li
                    class="list-group-item"
                    v-for="server in servers" :key="server.id"
                    @click="showServerState(server.state)"
            >
                Server #{{ server.id }}
            </li>
        </ul>
    </div>
</template>

<script>
import {eventBus} from "./../../main.js"

export default {

    data(){
        return {
            servers: [
                {
                    id : 1, state : "Normal"
                },
                {
                    id : 2, state : "Critical"
                },
                {
                    id : 3, state : "Unknown"
                },
                {
                    id : 4, state : "Off"
                },
                {
                    id : 5, state : "Stopped"
                }
            ]
        }
    },
    methods : {
        showServerState(state){
            // this.$root.$emit... also works
            eventBus.$emit("showServerState", state)
        }
    }
}
</script>

<style>

</style>
