<template>
    <div class="stocks-container">
        <stock
            :stock="stocks"
            @addItem="addItem"
        />
    </div>
</template>
<script>
import { mapGetters, mapMutations, mapActions } from "vuex";
import Stock from "./Stock.vue";

export default {
  components: {
    Stock
  },
  computed: {
    ...mapGetters(["stocks"])
  },
  methods: {
    ...mapActions(["updatePortfolio"]),
    addItem(newStock) {
      this.updatePortfolio(newStock);
    }
  }
};
</script>

<style scoped>
</style>

