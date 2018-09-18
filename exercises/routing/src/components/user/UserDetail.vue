<template>
<div>
    <h3>Some User Details</h3>
    <p> User ID: {{id}} </p>
    <router-link
        tag="button"
        :to="{path: '/user/'+id+'/edit',
            query:{param1 : 'en', param2: 2},
            hash: '#data'}"
        class="btn btn-primary"> Edit User </router-link>
</div>
</template>

<script>
export default {
    props : ["id"]
    
}
</script>
