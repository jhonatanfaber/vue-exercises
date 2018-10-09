<template>
    <div class="container-navBar">
        <ul class="nav nav-pills navbar-light">
            <div class="left-navbar">
                <router-link id="mainLogo" to="/" tag="li" active-class="active" exact><a class="nav-link disabled"> Stock Trader </a></router-link>
                <router-link to="/portfolio" tag="li" active-class="active" exact><a class="nav-link disabled"> Portfolio </a></router-link>
                <router-link to="/stocks" tag="li" active-class="active" exact><a class="nav-link disabled"> Stocks </a></router-link>
            </div>
            <div class="right-navbar"> 
                <a href="" @click.prevent="createRandomPrice" class="nav-link disabled"> End day </a>
                <li class="dropdown">
                    <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown" >
                        Save & Load
                    </a>
                    <div class="dropdown-menu">
                        <a class="dropdown-item" @click.prevent="saveData">Save</a>
                        <a class="dropdown-item" @click.prevent="changeLoadButtonState">Load</a>
                    </div>
                </li>
                <div id="fundsNavbar"> Funds: ${{funds}} </div>
                
            </div>
        </ul>
    </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex"

export default {
    computed: {
        ...mapGetters(["funds", "savedData"])
    },
    methods : {
        ...mapActions(["createRandomPrice", "saveData", "changeLoadButtonState"])
    }
    
}
</script>


<style scoped>
.nav {
  background-color: rgba(230, 230, 233, 0.829);
  width: 100%;
  margin-top: 30px;
  padding: 10px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

#mainLogo{
    font-size: 19px;
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

#fundsNavbar {
  display: flex;
  color: #6c757d;
  margin-right: 10px;
}
</style>

