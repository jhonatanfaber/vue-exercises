<template>
    <div class="header">
        <h2> Quotes Added</h2>
        <div class="header bar"> 
            <div class="header bar filler"  
                :style="{width : (barLength * 10) + '%'}"> {{barLength}} / 10
            </div>
        </div>
    </div>

    
</template>

<script>
import { bus } from "./../main.js";
export default {
  data() {
    return {
      barLength: 0
    };
  },
  created() {
    bus.$on("checkArrayLength", length => {
      this.barLength = length;
    });
  }
};
</script>

<style scoped>
h2 {
  color: rgb(92, 92, 104);
}

.bar {
  height: 20px;
  text-align: center;
  width: 100%;
  background-color: #eee;
  transition: width 500ms;
}

.filler {
  background-color: rgb(93, 174, 194);
  color: white;
  border: none;
}
</style>
