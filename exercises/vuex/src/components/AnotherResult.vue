<template>
<div>
    <p>Counter is: {{ doubleCounter }}</p>
    <p> Nº of clicks: {{ clicksCounter }}</p>
</div>
</template>

<script>
import {mapGetters} from "vuex"
export default {
  computed: mapGetters([
    "doubleCounter",
    "clicksCounter"
  ]) 
};
</script>