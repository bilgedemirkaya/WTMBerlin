<script> 
import PlatformCard from '@/components/platform-card.vue'
import {mapState, mapActions} from 'vuex'
import newPlatform from '@/components/new-platform.vue'

export default {
  name: 'Platform',
  components: {
    PlatformCard,
    newPlatform,
  },
  computed: {
    ...mapState({
     platforms: (state) => state.platformModul.platforms,
     isNew: (state) => state.isNew
    }) 
  },
  methods: {
    ...mapActions(['fetchApps','addNew'])
  },
  created() {
    this.fetchApps()
  }
}
</script>

<template lang="pug">
div(style="margin-left:30px;")
  h1 Welcome to the website where you can download new apps to your phone!
  h3 Please choose your social platform or  
    button(class="button" @click="addNew")
      span Add a new social platform
section(v-if="!isNew" class="box") 
  platform-card(v-for="platform in platforms",:platform="platform")
section(v-else)
  new-platform()
</template>