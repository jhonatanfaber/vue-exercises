<template>
    <div>
        <h1> Hello {{ name }}</h1>
    </div>
</template>

<script>
export default {
    // this 'name' should be the same as the return fn in routes.js
   props : {
      name: {
        type: String,
        default: "Vue!"
      }
  },
}
</script>

