<template>
    <div class="quotes">
        <div class="quotes__wrapper"> 
            <Quote 
                v-for="quote in quotes" :key="quote.id" 
                :quoteReceived="quote"
                @deleteQuote="removeQuote"
            />
        </div>
    </div>
    
</template>

<script>
import Quote from "./Quote.vue";
import { bus } from "./../main.js";

export default {
    data() {
        return {
            quotes: []
        };
    },
    components: {
        Quote
    },
    created() {
        bus.$on("addQuote", quote => {
        this.quotes.push(quote);
        });
    },
    methods : {
        removeQuote(id){
            let quoteIndex = this.quotes.findIndex((element) => element.id == id);
            this.quotes.splice(quoteIndex, 1);
        }
    }
};
</script>

<style scoped>
.quotes__wrapper {
  display: grid;
  grid-template-columns: repeat(4, auto);
}
</style>
