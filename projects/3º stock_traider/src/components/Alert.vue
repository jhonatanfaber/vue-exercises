<template>
    <div class="footer-container">
        <div v-show="!canBuy" class="alert alert-danger" role="alert">
          Sorry, but you don't have enough funds :(
        </div>
    </div>
</template>

<script>
export default {
  computed: {
    canBuy() {
      return this.$store.getters.canBuy;
    }
  }
};
</script>


<style scoped>
.alert {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>

