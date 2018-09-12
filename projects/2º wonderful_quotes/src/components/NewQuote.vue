<template>
<div class="text"> 
    <div class="text__wrapper">
            <textarea rows="4" cols="100" v-model="quoteText"></textarea>
    </div>
        <button @click="addQuote"> Add Quote </button>
</div>
    
</template>

<script>
import { bus } from "./../main.js";

export default {
  data() {
    return {
      quoteText: "",
      quote: {}
    };
  },
  methods: {
    addQuote() {
      this.$set(this.quote, "id",Date.now());
      this.$set(this.quote, "text", this.quoteText);
      bus.$emit("addQuote", this.quote);
      
      this.quoteText = "";
      this.quote = {}
    }
  }
};
</script>

<style scoped>
.text__wrapper {
  margin: 50px;
  display: flex;
  justify-content: center;
}

textarea {
  width: 60%;
  resize: none;
}

button {
  border-radius: 10px;
  background-color: rgb(63, 162, 196);
  color: white;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
}
</style>
