<template>
    <div class="home-container">
        <div class="home-container__information">
            <h2> Trade or  View your Portfolio</h2>
            <p> You should Save and Load your data </p>
            <p> Click on 'End-Day' to begin a new day </p>
            <div v-if="user.token" class="funds-information"> 
              <hr>
              <h4 > Your funds : ${{ funds }} </h4>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex"

export default {
    computed : {
      ...mapGetters(["funds", "user"])
    }

};
</script>

<style scoped>


.home-container {
  border: 1px solid rgb(170, 166, 166);
  margin-top: 30px;
  width: 100%;
  border-radius: 10px;
}

.home-container__information {
  margin: 30px;
}
.router-link-active {
  background-color: yellow;
}
</style>


