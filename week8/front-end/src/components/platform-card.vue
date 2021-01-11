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
  h2.card-title 
    h2.name {{platform.name}}
    button(class='rm-btn' @click='rmvPlatform(`${platform._id}`)') x
    div
      button(class='clickme' @click='downloadApp(`${platform._id}`)') Download
</template>

<style>
</style>