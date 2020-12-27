<template lang='pug'>
article.card
  img(:src="`https://picsum.photos/300/200?random=${phone._id}`", alt="phone")
  h2.card-title 
  h2.name {{phone.name}}
  input(
    type='checkbox'
    name='phone'
    v-model="checked"
    @change='choosePhone(`${phone._id}`)'
    )
  h3(v-if="checked" v-for="apps in currentapps") Current Apps: {{ apps.name }}
</template>
<script>

import {mapState, mapActions} from 'vuex'

export default {
  name: 'PhoneCard',
  props: ['phone'],
  components: {
  },
  data () {
    return {
      checked:''
    }
  },
   computed: {
    ...mapState({ 
      phones: (state) => state.phones,
      currentapps: (state) => state.papps,
    })
  },
  methods: {
    ...mapActions(['choosePhone'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
