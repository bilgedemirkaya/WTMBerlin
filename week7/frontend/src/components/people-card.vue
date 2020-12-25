<template lang='pug'>
div.name {{person.name}}
</template>

<script>
export default {
  name: 'PeopleCard',
  props: ['person']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
