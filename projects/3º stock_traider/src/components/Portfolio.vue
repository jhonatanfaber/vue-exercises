<template>
    <div class="portfolio-container">
      <template v-if="loadButtonIsClicked">
        <div class="card" v-for="item in savedData" :key="item.id">
          <div class="card-header" >
                {{item.name}} (Price: {{item.price}} | Quantity: {{item.quantity}}) 
            </div>
            <div class="card-body">
                <input type="text"  v-model.number="item.selled" placeholder="Quantity">
                <a class="btn btn-danger" @click="removeQuantity(item)">Sell</a>
            </div>
        </div>
      </template>
      <template v-else>
        <div class="card" v-for="item in portfolio" :key="item.id">
          <div class="card-header" >
                {{item.name}} (Price: {{item.price}} | Quantity: {{item.quantity}}) 
            </div>
            <div class="card-body">
                <input type="text"  v-model.number="item.selled" placeholder="Quantity">
                <a id="ButtonTextColor" class="btn btn-danger" @click="removeQuantity(item)">Sell</a>
            </div>
        </div>
      </template>
            
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters(["portfolio", "loadButtonIsClicked", "savedData"])
  },
  methods: {
    ...mapActions(["updatePortfolioQuantity", "updateFundsWhenSelling"]),
    removeQuantity(item) {
      this.updateFundsWhenSelling(item);
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
  color: rgb(62, 102, 124);
}

#ButtonTextColor{
  color: white
}

.card-body {
  display: flex;
  justify-content: space-between;
}
</style>

