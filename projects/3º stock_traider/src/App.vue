<template>
    <div class="container">
        <navbar/>
        <router-view> </router-view>
    </div>
    
    
</template>

<script>
import Home from "./components/Home.vue";
import Navbar from "./components/Navbar.vue";

export default {
  components: {
    Home,
    Navbar
  }
};
</script>

<style scoped>

</style>

