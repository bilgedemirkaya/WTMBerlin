<script>
import phoneCard from '@/components/phone-card.vue'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Phone',
  components: {
    phoneCard
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
    phone-card(:phone='phone')
</template>