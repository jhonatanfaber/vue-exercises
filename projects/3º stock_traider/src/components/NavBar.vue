<template>
    <div class="container-navBar">
        <nav class="navbar navbar-expand-lg navbar-light">
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <div class="left-navbar">
                        <router-link to="/" tag="li" class="nav-item" exact><a class="navbar-brand"> Stock Trader </a></router-link>
                        <router-link v-if="!isAdmin && user.token" to="/portfolio" tag="li" class="nav-item" exact><a class="nav-link"> Portfolio </a></router-link>
                        <router-link v-if="!isAdmin &&user.token" to="/stocks" tag="li" class="nav-item" exact><a class="nav-link"> Stocks </a></router-link>
                    </div>
                    <div class="right-navbar"> 
                        <li v-if="!isAdmin && user.token" class="nav-item" >
                            <a class="nav-link" @click.prevent="createRandomPrice" href="">End day</a>
                        </li>
                        <li v-if="!isAdmin && user.token" class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Save & Load
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" @click.prevent="saveData" href="">Save</a>
                                <a class="dropdown-item" @click.prevent="changeLoadButtonState" href="">Load</a>
                            </div>
                        </li>
                        <li v-if="!isAdmin && user.token" class="nav-item">
                            <a class="nav-link">Funds: ${{funds}}</a>
                        </li>
                        <router-link v-if="!user.token" to="/login" tag="li" class="nav-item" exact><a class="nav-link"> Log in <i class="fas fa-sign-in-alt"></i> </a></router-link>
                        <li v-if="isAdmin" class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Settings
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" @click.prevent="saveData" href="">Create user</a>
                                <a class="dropdown-item" @click.prevent="changeLoadButtonState" href="">Delete</a>
                            </div>
                        </li>
                        <router-link v-if="user.token" to="/login" tag="li" class="nav-item" exact><a class="nav-link"> <i class="fas fa-user"></i> {{user.username}}  </a></router-link>
                    </div>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["funds", "savedData", "user", "isAdmin"])
  },
  methods: {
    ...mapActions(["createRandomPrice", "saveData", "changeLoadButtonState"])
  }
};
</script>


<style scoped>

.navbar-nav {
  background-color: rgba(230, 230, 233, 0.829);
  width: 100%;
  margin-top: 30px;
  padding: 10px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  border-radius: 5px;
}

.left-navbar {
  grid-column: 1;
  display: flex;
  align-items: center;
}

.right-navbar {
  grid-column: 2;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.nav-item{
    margin-right: 15px;
}

</style>

