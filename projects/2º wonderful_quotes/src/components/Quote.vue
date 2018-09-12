<template>
    <div class="quote" @click="deleteQuote" >
         {{this.quoteReceived.text}}
    </div>
</template>

<script>
export default {
    props : ["quoteReceived"],
    methods : {
        deleteQuote(){
            this.$emit("deleteQuote", this.quoteReceived.id)
        }
    } 
}
</script>

<style scoped>
.quote{
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(192, 188, 188, 0.8);
  padding: 20px;
  font-size: 20px;
  font-family: cursive;
  text-align: center;
  margin:20px;
  cursor: pointer;

}
.quote:hover{
    background-color: rgb(235, 160, 160)
}

</style>
