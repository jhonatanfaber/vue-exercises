<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Http</h1>
                <div class="form-group">
                    <label> Uername </label>
                    <input class="form-control" type="text" v-model="user.username">
                </div>
                <div class="form-group">
                    <label> Email </label>
                    <input class="form-control" type="text" v-model="user.email">
                </div>
                <button class="btn btn-primary" @click="submit"> Submit </button>
                <hr>
                <button class="btn btn-primary" @click="fetchData"> Fetch Data </button>
                <ul class="list-group">
                    <li class="list-group-item" v-for="user in users" :key="user.id"> 
                        {{user.username}} {{user.email}}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      API_URL: "https://udemy-tests-bb530.firebaseio.com/",
      user: {
        username: "",
        email: ""
      },
      users: [],
      resource : {}
    };
  },
  methods: {
    submit() {
      this.$http.post(this.API_URL + "data.json", this.user).then(
        res => {
          console.log(res);
        },
        error => {
          console.log(error);
        }
      );
    },
    //local header (if globall > interceptors)
    fetchData() {
      this.$http
        .get(this.API_URL + "data.json", {
          headers: {
            pepe: "QWERTY"
          }
        })
        .then(res => {
          this.users = res.body;
          console.log(this.users);
        });
    }
  }
};
</script>

<style>
</style>
