<template>
    <div class="header">
        <h2> Quotes Added</h2>
        <div class="header bar"> 
            <div class="header bar filler"  
                style="background-color: green;color: white; margin:0" 
                :style="{width : (barLength*10) + '%'}">
            </div>
        </div>
    </div>

    
</template>

<script>
import { bus } from "./../main.js";
export default {
    data(){
        return {
            barLength : 0
        }
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
  width: 80%;
  background-color: #eee;
  margin: auto;
  transition: width 500ms;
}

.filler {
  border: none;
}
</style>
