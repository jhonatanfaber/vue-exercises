<template>
    <div class="fullName">
        <p>Full Name: {{firstName}} {{lastName}} </p>
    </div>
</template>

<script>
export default {
    data(){
        return {

        }
    },
    props : ["firstName", "lastName"]
    
}
</script>
<style scoped>

</style>

