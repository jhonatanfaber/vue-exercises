<template>
    <div class="stock-container">
        <div class="card" v-for="item in stock" :key="item.id">
            <div class="card-header" >
                {{item.name}} (Price: {{item.price}} ) 
            </div>
            <div class="card-body">
                <input type="text" v-model.number="item.quantity" placeholder="Quantity">
                <a class="btn btn-success" @click="addItem(item)">Buy</a>
            </div>
        </div> 
    </div>
    
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: ["stock"],
  methods: {
    ...mapActions(["updateFundsWhenBuying"]),
    addItem(item) {
      let newItem = Object.assign({}, item);
      this.updateFundsWhenBuying(newItem);
      this.$emit("addItem", newItem);
    }
  }
};
</script>

<style scoped>
.stock-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

.card {
  margin: 30px;
}

.card-header {
  background-color: rgb(232, 241, 232);
}

.card-body {
  display: flex;
  justify-content: space-between;
}
</style>

