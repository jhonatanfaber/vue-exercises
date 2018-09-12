<template>
<div class="text"> 
    <div class="text__wrapper">
        <div class="text__wrapper__title">
            <p> Quote </p>
        </div>
        <div class="text__wrapper__area"> 
            <textarea rows="4" cols="100" v-model="quoteText"></textarea>
        </div>
    </div>
    <div class="text__button"> 
        <button @click="addQuote"> Add Quote </button>
    </div>
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
      console.log("llega");
      
      this.quoteText = "";
      this.quote = {}
    }
  }
};
</script>

<style scoped>
.text__wrapper{
    margin-top: 40px;
}

.text__wrapper__title{
    display: flex;
  justify-content: center;
}

.text__wrapper__area{
  display: flex;
  justify-content: center;
}

.text__button{
    display: flex;
    justify-content: center;
    margin-top: 10px;
}

textarea {
  width: 60%;
  resize: none;
}

button {
  border-radius: 10px;
  background-color: rgb(93, 174, 194);
  color: white;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
}

p{
    font-weight: bold;
}
</style>
