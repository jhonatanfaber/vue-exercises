<template>
    <div class="stock-container">
        <div class="card" v-for="item in stock" :key="item.id">
            <div class="card-header" >
                {{item.name}} (Price: {{item.price}} ) 
            </div>
            <div class="card-body">
                <input type="text" v-model.number="item.quantity" placeholder="Quantity">
                <button
                  id="ButtonTextColor" 
                  class="btn btn-success"
                  @click="addItem(item)"
                  :disabled="item.quantity <= 0 || !Number.isInteger(item.quantity)"
                > Buy</button>
            </div>
        </div> 
    </div>
    
</template>

<script>
import { mapActions, mapGetters } from "vuex";

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
  color: rgb(79, 134, 79);
}

#ButtonTextColor{
  color: white
}

.card-body {
  display: flex;
  justify-content: space-between;
}
</style>

