<template>
<div>
    <h3>Edit the User</h3>
    <p> Query param 1: {{$route.query.param1}} </p>
    <p> Query param 2: {{$route.query.param2}} </p>
    <hr>
    <button class="btn btn-primary" @click="confirmed = true"> confirm</button>
    <div style="height: 700px"> </div>
    <p id="data"> This is some extra data </p>
</div>
</template>
<script>
export default {
  data() {
    return {
      confirmed: false
    };
  },
  beforeRouteLeave(to, from, next) {
    if (this.confirmed) {
      next();
    }else if(confirm("Are you sure you want to exit?")) {
        next();
    }else{
        next(false);
    }
  }
};
</script>
