<script> 
import ItemCard from "@/components/item-card.vue"
import { mapState, mapActions } from "vuex"
import addNew from "@/components/add-new.vue"

export default {
  name: "App",
  components: {
    ItemCard,
    addNew,
  },
  computed: {
    ...mapState({
      apps: (state) => state.appModul.apps,
      status: (state) => state.phoneModul.downloadStatus,
    }) 
  },
  methods: {
    ...mapActions([ "fetchApps", "addNew" ])
  },
  created() {
    this.fetchApps()
  }
}
</script>
<template lang="pug">
h1(class="title is-5") Welcome to the website where you can download new apps to your phone!
div(style="margin-left:30px;  min-height:81vh;")
  div(v-if="status == 'success'" class="notification is-primary")
    p Successfully downloaded!
  div(v-if="status == 'info'" class="notification is-info")
    p You already downloaded that app.
  div(v-if="status == 'error'" class="notification is-danger")
    p You should both specify the phone and the app.
  section(v-if="!apps.length" style="margin:50px") 
    h1 There is no app added yet.
  add-new(itemToAdd="app")
  section(class="section") 
    item-card(type="app", v-for="app in apps",:item="app")
</template>
