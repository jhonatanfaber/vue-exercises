<template>
    <div class="login-container">
        <form>
            <div class="form-group username">
                <label for="exampleInputEmail1">Username</label>
                <input type="text" v-model="username" class="form-control col-xs-4" :class="{invalidHighlight: invalidUser}" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter username">
            </div>
            <div class="form-group password ">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" v-model="password"
                    class="form-control col-xs-4"
                    :class="{invalidHighlight: invalidUser}"
                    id="exampleInputPassword1"
                    placeholder="Password"
                >
            </div>
        </form>
        <div class="form-button"> 
            <button @click="login" class="btn btn-primary">Log in</button>
        </div>
    </div>
    
</template>

<script>
import { mapGetters} from "vuex"


export default {
  data() {
    return {
      username: "faber",
      password: "123"
    };
  },
  computed: {
    ...mapGetters(["invalidUser"])
   
  },
  methods: {
    login() {
      const user = {
        username: this.username,
        password: this.password
      };
      this.$store.dispatch("login", user);
    }
  }
};
</script>

<style scoped>
.login-container {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.form-button {
  margin-top: 15px;
}

.password {
  margin-top: 40px;
}

.form-control.invalidHighlight{
  border:1px solid rgb(226, 152, 152);
}

</style>
