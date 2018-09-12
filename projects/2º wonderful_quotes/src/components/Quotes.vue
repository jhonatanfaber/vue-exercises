<template>
    <div class="quotes">
        <div class="quotes__wrapper"> 
            <Quote 
                v-for="quote in quotes" :key="quote.id" 
                :quoteReceived="quote"
            />
        </div>
    </div>
    
</template>

<script>
import Quote from "./Quote.vue"
import {bus} from "./../main.js"

export default {
    data(){
        return {
            quotes : []
        }
    },
    components:{
        Quote
    },
    created(){
        bus.$on("addQuote", quote => {
            this.quotes.push(quote)
        })
    }
    
}
</script>

<style scoped>
.quotes__wrapper{
    display: grid;
    grid-template-columns: repeat(4,auto)
}


</style>
