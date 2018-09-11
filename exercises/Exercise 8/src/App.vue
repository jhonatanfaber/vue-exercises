<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <br>
                <button class="btn btn-primary" @click="selectedComponent='appBlue'">Load Blue Template</button>
                <button class="btn btn-success" @click="selectedComponent='appGreen'">Load Green Template</button>
                <button class="btn btn-danger" @click="selectedComponent='appRed'">Load Red Template</button>
                <hr>
                <app-blue>
                    <h4 slot="title"> This is the blue rectangle</h4>
                    <p> With slots you can write whatever code you like within the created component</p>
                </app-blue>
                <app-green>
                    <h4> This is the green rectangle</h4>
                    <p> With slots you can write whatever code you like within the created component</p>
                </app-green>
                <app-red>
                    <h4> This is the red rectangle</h4>
                    <p> With slots you can write whatever code you like within the created component</p>
                </app-red>

                <hr>
                <component :is="selectedComponent">
                    <p> Default text: Here we practice the dynamic components --> the component will appear depending on the clicked button</p>
                </component>
            </div>
        </div>
    </div>
</template>

<script>
import Blue from "./components/Blue.vue";
import Green from "./components/Green.vue";
import Red from "./components/Red.vue";

export default {
  data() {
    return {
      selectedComponent: "nothing"
    };
  },
  components: {
    appBlue: Blue,
    appGreen: Green,
    appRed: Red
  }
};
</script>

<style>
</style>
