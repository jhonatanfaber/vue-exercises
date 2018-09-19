<template>
    <p>Counter is: {{ counter }}</p>
</template>

<script>
    export default {
        computed : {
            counter(){
                //f we dont use mapGetters
                return this.$store.getters.doubleCounter
            }
        }
    }
</script>