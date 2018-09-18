<template>
<div>
    <h1>The User Page</h1>
    <hr>
    <button @click="navigateToHome" class="btn btn-primary"> Go Home</button>
    <hr>
   <router-view></router-view>
</div>
</template>
<script>
export default {
  data() {
    return {
      id: this.$route.params.id
    };
  },
  methods: {
    navigateToHome() {
      this.$router.push("/");
    }
  },
  watch: {
    // They allow you to access the route you're going to and coming from.
    $route(to, from) {
      this.id = to.params.id;
    }
  }
};
</script>
