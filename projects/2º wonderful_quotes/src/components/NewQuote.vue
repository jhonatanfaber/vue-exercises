<template>
<div class="text"> 
    <div class="text__wrapper">
        <div class="text__wrapper__content">
            <textarea rows="5" cols="100" v-model="quoteText"></textarea>
        </div>
            
    </div>
        <button @click="addQuote"> Add Quote </button>
</div>
    
</template>

<script>
import { bus } from "./../main.js";

export default {
  data() {
    return {
      quoteText: ""
    }
  },
  methods: {
    addQuote() {
      bus.$emit("addQuote", this.quoteText);
      this.quoteText = "";
    }
  }
};
</script>

<style scoped>
.text__wrapper {
  display: grid;
  grid-template-columns: repeat(4, auto);
  margin: 50px;
}

.text__wrapper__content {
  grid-column: 2/4;
  display: flex;
  justify-content: center;
}

textarea {
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
