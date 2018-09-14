<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1> {{title}} </h1>
                <button v-myon:click="clicked"> Change title </button>
                <!-- Exercise -->
                <!-- Build a Custom Directive which works like v-on (Listen for Events) -->
            </div>
        </div>
    </div>
</template>

<script>
export default {
  // *** Local directive ***
  // directives: {
  //   myon: {
  //     bind(el, binding) {
  //       el.onclick = function() {
  //         binding.value();
  //       };
  //     }
  //   }
  // },
  data(){
    return {
      title : "Directives Exercise"
    }
  },
  methods: {
    clicked() {
        this.title = "Title has been changed"
    }
  }
};
</script>

<style>
</style>
