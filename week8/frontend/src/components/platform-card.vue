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
      platforms: (state) => state.appModul.platforms,
      phoneChoice: (state) => state.phoneModul.phoneChoice,
    })
  },
  methods: {
    ...mapActions(['rmvPlatform','downloadApp'])
  }
}
</script>

<template lang='pug'>
article.card
  button(class='rm-btn' @click='rmvPlatform(`${platform._id}`)') X
  <br>
  h2.card-title 
    h2.name {{platform.name}}
    <hr>
    button(class='downloadButton' @click='downloadApp(`${platform._id}`)') Download
</template>

<style scoped>
.card {
  width: 300px;
}
</style>