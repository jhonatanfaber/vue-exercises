<template>
    <div class="container">
        <progress-bar/>
        <NewQuote/>
        <Quotes/>
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

<style>
</style>
