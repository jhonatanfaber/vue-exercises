<template>
    <div class="container">
        <progress-bar/>
        <NewQuote/>
        <Quotes/>
        <div class="container footer">Info: click on a quote to delete it! </div>
    </div>
</template>

<script>
import ProgressBar from "./components/ProgressBar.vue";
import NewQuote from "./components/NewQuote.vue";
import Quotes from "./components/Quotes.vue";

export default {
  components: {
    ProgressBar,
    NewQuote,
    Quotes
  }
};
</script>

<style scoped>
  .footer{
    margin-top: 50px;
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 20px;
    background-color: rgb(179, 225, 236);
    border-radius: 10px;
    color: rgb(112, 112, 109);
  }
</style>

