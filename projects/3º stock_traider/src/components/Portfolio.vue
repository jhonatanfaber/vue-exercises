<template>
    <div class="portfolio-container">
        <div class="card" v-for="item in portfolio" :key="item.id">
          longi: {{portfolio.length}}
            <div class="card-header" >
                {{item.name}} (Price: {{item.price}} | Quantity: {{item.quantity}}) 
            </div>
            <div class="card-body">
                <input type="text"  v-model.number="item.selled" placeholder="Quantity">
                <a class="btn btn-danger" @click="removeQuantity(item)">Sell</a>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      quantity: 0
    };
  },
  computed: {
    ...mapGetters(["portfolio"])
  },
  methods: {
    ...mapActions(["updatePortfolioQuantity"]),
    removeQuantity(item) {
      item.quantity -= item.selled;
      this.updatePortfolioQuantity(item);
    }
  }
};
</script>

<style scoped>
.portfolio-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

.card {
  margin: 30px;
}

.card-header {
  background-color: rgb(193, 214, 233);
}

.card-body {
  display: flex;
  justify-content: space-between;
}
</style>

