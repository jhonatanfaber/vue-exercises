<template>
    <div class="col-xs-12 col-sm-6">
        <p>{{currentState}}</p>
    </div>

</template>

<script>
import { eventBus } from "./../../main.js";

export default {
  data() {
    return {
      currentState: "Server Details are currently not updated"
    };
  },
  created() {
      // this.$root.$on... also works
    eventBus.$on("showServerState", data => {
      this.currentState = data;
    });
  }
};
</script>

<style>
</style>
