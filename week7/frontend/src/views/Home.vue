<template lang= "pug">
main
h1 Welcome to the website where you can download new apps to your phone!
h2 {{counter}}
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import {mapState, mapActions} from 'vuex'
import axios from 'axios'

export default {
  name: 'Home',
  components: {
    
  },
  computed: {
    ...mapState({
      counter: (state) => state.counter
    }) 
  },
  methods: {
    ...mapActions({
      incrementCounter: 'incrementCounter'
    })
  },
  created() {
    this.incrementCounter()
  }

}
</script>
