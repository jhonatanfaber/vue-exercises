<template>
    <div class="container">
        <navbar/>
        <router-view> </router-view>
        {{stock}}
        <button @click="fetch" > fetch data</button>

    </div>  
</template>

<script>
import Home from "./components/Home.vue";
import Navbar from "./components/Navbar.vue";
import { data } from "./data/data";

export default {
  data() {
    return {
      stock: []
    };  
  },
  components: {
    Home,
    Navbar
  },
  methods : {
    fetch(){
      data.getStocks
        .then(res => {
          this.stock = res.stocks
          
        })
    }
  },
  created(){
        this.$store.dispatch("initStocks")
    }
};
</script>

