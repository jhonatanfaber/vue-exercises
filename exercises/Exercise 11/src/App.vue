<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <!-- Exercise 1) -->
                <!-- Build a local Filter which reverses the Text it is applied on -->
                <h4> Exercise 1: </h4>
                <p> {{ text | reverseText }}</p>

                <!-- Exercise 2 -->
                <!-- Build a global Filter which counts the length of a word and it appends it -->
                <!-- Like this: "Test" => Gets Filtered to => "Test (4)" -->
                <h4> Exercise 2: </h4>
                <p>  {{ word | calculateLength }}</p>

                <!-- Exercise 3 -->
                <!-- Do the same as in Exercises 1 & 2, now with Computed Properties -->
                <h4> Exercise 3: </h4>
                <p> {{ reverseTexti  }}</p>
                <p>  {{ checkLength }}</p>

                <!-- Exercise 4 -->
                <!-- Share the Computed Property rebuilding Exercise 2 via a Mixin -->
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                text : "this is some text",
                word : "pepe"
            }
        },
        filters : {
            reverseText(text){
                return text.split("").reverse().join("")
            }
        },
        computed : {
            reverseTexti(){
                return this.text.split("").reverse().join("")
            },
            checkLength(){
                return this.word +" ("+ this.word.length +")"
            }
        }
    }
</script>

<style>
</style>
