<template>
    <div class="quote">
        <p> {{this.quoteReceived}}</p>
    </div>
    
</template>

<script>
export default {
    props : ["quoteReceived"]
    
}
</script>

<style scoped>
.quote{
  background-color: rgba(236, 239, 241, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.8);
  padding: 20px;
  font-size: 30px;
  text-align: center;
  margin:20px;

}

</style>
