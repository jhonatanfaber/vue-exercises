<template>
    <div class="container">
        <ul class="nav nav-pills">
            <router-link to="/" tag="li" active-class="active" exact><a class="nav-link disabled"> Home </a></router-link>
            <router-link to="/portfolio" tag="li" active-class="active" exact><a class="nav-link disabled"> Portfolio </a></router-link>
            <router-link to="/stocks" tag="li" active-class="active" exact><a class="nav-link disabled"> Stocks </a></router-link>
        </ul>
        <router-view> </router-view>
    </div>
</template>

<script>
import Home from "./components/Home.vue"

export default {
    components : {
        Home
    }
};
</script>

<style scoped>
.nav {
  background-color: rgb(245, 244, 238);
  width: 100%;
  margin-top: 30px;
}

</style>

