
<script>
// @ is an alias to /src
import PeopleCard from '@/components/people-card.vue'
import {mapState, mapActions} from 'vuex'


export default {
  name: 'Home',
  components: {
    PeopleCard
  },
  computed: {
    ...mapState({
     people: (state) => state.allPeople
    }) 
  },
  methods: {
    ...mapActions({
      fetchPeople: 'fetchPeople'
    })
  },
  created() {
    this.fetchPeople()
  }

}
</script>
<template lang= "pug">
main
h1 Welcome to the website where you can download new apps to your phone!
people-card(v-for="person in people",:person="person")
</template>
