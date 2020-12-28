<template lang='pug'>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
article.card
  h2.card-title 
  button(class="rm-btn" @click="rmvPlatform(`${platform._id}`)")
      i(class="fa fa-remove")
  h2.name {{platform.name}}
  input(
    type='checkbox'
    name='platform'
    v-model="checked"
    @change='choosePlatform(`${platform._id}`)'
  )
  img(:src="`https://picsum.photos/300/200?random=${platform._id}`", alt="platform") 
h1(v-if="checked") To download {{platform.name}} into your phone... 
    button(class="clickme" @click="downloadApp(`${phoneChoice},${appChoice}`)") Click here
</template>
<script>

import {mapState, mapActions} from 'vuex'


export default {
  name: 'PlatformCard',
  props: ['platform'],
  components: {
  },
  data () {
    return {
      checked:''
    }
  },
   computed: {
    ...mapState({ 
      platforms: (state) => state.platforms,
      phoneChoice: (state) => state.phoneChoice,
      appChoice: (state) => state.appChoice
    })
  },
  methods: {
    ...mapActions(['rmvPlatform','choosePlatform','downloadApp'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
    display: inline-block;
    text-align: right;
    padding: 20px;
    border: 5px dotted #ddd;
    margin: 20px;
    min-width: 200px;
}
input[type="checkbox"] {
  display: block;
}
.rm-btn {
  padding: 10px;
  border: 4px solid rgb(212, 54, 54);
  border-radius: 100%;
  background-color: #fff1cc;
  outline: none;
}
.rm-btn:hover {
   background-color: rgb(212, 54, 54);
   color:white;
}
</style>
