<script> 
import PlatformCard from '@/components/platform-card.vue'
import {mapState, mapActions} from 'vuex'
import newPlatform from '@/components/new-app.vue'

export default {
  name: 'Platform',
  components: {
    PlatformCard,
    newPlatform
  },
  computed: {
    ...mapState({
     platforms: (state) => state.platforms,
     isNew: (state) => state.isNew
    }) 
  },
  methods: {
    ...mapActions(['fetchApps','removeComponent'])
  },
  created() {
    this.fetchApps()
  }
}
</script>

<template lang="pug">
h3 Please choose your social platform or  <button class="button" @click="removeComponent">  <span>Add a new social platform </span> </button>
  section(v-if="!isNew") 
    platform-card(v-for="platform in platforms",:platform="platform")
  section(v-else)
    new-platform()

</template>