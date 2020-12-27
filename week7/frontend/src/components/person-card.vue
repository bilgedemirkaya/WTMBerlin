<template lang='pug'>
div.name {{phone.name}}
</template>

<script>
export default {
  name: 'PhoneCard',
  props: ['phone']
}
</script>

<style scoped>
.card {
    display: inline-block;
    text-align: left;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 3px;
    margin: 20px;
    min-width: 200px;
}
</style>