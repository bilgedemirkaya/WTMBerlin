<script>
import ItemCard from '@/components/item-card.vue'
import addNew from '@/components/add-new.vue'
import {mapState, mapActions} from 'vuex'

export default {
  name: 'Home',
  components: {
    ItemCard,
    addNew,
  },
  computed: {
    ...mapState({
     phones: (state) => state.phoneModul.phones,
    }) 
  },
  methods: {
    ...mapActions(['fetchPhones','addNew'])
  },
  created() {
    this.fetchPhones()
  }
}
</script>

<template lang= "pug">
div(style="margin-left:30px;")
  h1 Welcome to the website where you can download new apps to your phone!
  section(v-if="!phones.length") 
    h1 There is no phone added yet.
  add-new(itemToAdd="phone")
  section(class="section") 
    item-card(type="phone", v-for="phone in phones",:item="phone")
</template>

