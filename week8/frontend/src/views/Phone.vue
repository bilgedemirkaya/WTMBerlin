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
             phones: (state) => state.phones[0],
     })
  },
  methods: {
    ...mapActions(['fetchPhones'])
  },
  created() {
    this.fetchPhones(this.$route.params.id)
  }
}
</script>

<template lang="pug">
main
    section
      phone-card(:phone="phones")
</template>


