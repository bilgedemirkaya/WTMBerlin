<script>
import itemCard from '@/components/item-card.vue'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Phone',
  components: {
    itemCard
  },
  computed: {
    ...mapState({
     phone: (state) => state.phoneModul.singlePhone,
    }) 
  },
  methods: {
    ...mapActions(['getSinglePhone'])
  },
  created() {
    this.getSinglePhone(this.$route.params.id)
  }
}
</script>

<template lang='pug'>
main
  section
     item-card(type="phone", :item='phone')
</template>