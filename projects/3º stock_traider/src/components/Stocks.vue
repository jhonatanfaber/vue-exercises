<template>
    <div class="stocks-container">
        <stock
            :stock="stocks"
            @addItem="addItem"
        />
      <Alert/>
    </div>
</template>
<script>
import { mapGetters, mapMutations, mapActions } from "vuex";
import Stock from "./Stock.vue";
import Alert from "./Alert.vue";

export default {
  components: {
    Stock,
    Alert
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

