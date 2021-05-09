<script>
import itemCard from "@/components/item-card.vue"
import { mapState, mapActions } from "vuex"

export default {
  name: "SingleItem",
  components: {
    itemCard
  },
  computed: {
    ...mapState({
     phone: (state) => state.phoneModul.singlePhone,
     app: (state) => state.appModul.singleApp
    }) 
  },
  methods: {
    ...mapActions([ "getSinglePhone", "getSingleApp" ])
  },
  created() {
    this.$route.params.catchAll === "phones" ? 
    this.getSinglePhone(this.$route.params.id) : 
    this.getSingleApp(this.$route.params.id)

  }
}
</script>

<template lang='pug'>
main
  section
    a(href="/") Go home
  section(v-if="!app")
    item-card(type="phone", :item='phone', single="true")
  section(v-else)
    item-card(type="app", :item='app', single="true")

</template>
