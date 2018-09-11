<template>
    <div id="server-wrapper">
        {{name}} #{{server.number}}
        <button @click="showInformation"> +Info </button>
    </div>
</template>
<script>
export default {
  data() {
    return {
      name: "server"
    };
  },
  props: ["server"],
  methods: {
    showInformation() {
      this.$emit("showInformation", this.server.information);
    }
  }
};
</script>

