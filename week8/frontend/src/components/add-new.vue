<script>
import { mapActions, mapState } from "vuex"
export default {
    name: "addNew",
    props: [ "itemToAdd" ],
    data() {
      return {
        item: "",
        isDisable() {
          return this.item.length > 0;
      }
      }
    },
    methods: {
        ...mapActions([ "addPhone", "addPlatform" ]),
      onSubmit() {
        const newItem = {
              name: this.item
        }
          this.itemToAdd === "phone" ? this.addPhone(newItem) : this.addPlatform(newItem)
          this.item = ""
        },
        resetForm() {
          this.item = ""
        }
    },
    computed: {
    ...mapState({ 
       loading: (state) => state.loading,
    }),
    }
}
</script>

<template lang="pug">

article(class="card trd" style="height:200px; width:40%")
  header(class="card-header")
    p(class="card-header-title") Add a new {{this.itemToAdd}}

  div(class="card-content")
    div(class="content")
      form(@submit.prevent="onSubmit")
        input(type="text" v-model="item" placeholder="Enter name..." class="input")
        button(type="submit" class="button is-link is-outlined btns" @click="clicked = true" :disabled="!isDisable()") Submit
        button(class="button is-danger is-outlined btns" type="button" @click="resetForm()") Cancel      
      
        p(v-if="this.loading") Thank you for adding a new {{this.itemToAdd}}
          progress(class="progress is-small is-primary" max="100") %15

</template>

<style>
.input {
  display:inline;
  width: 50%;
  margin: 5px;
}
@media screen and (max-width: 600px) {
  .card {
      width:100% !important;
      height: auto;
      min-height: fit-content;
  }
  .input {
    display:inline;
    width: 100%;
    margin: 5px;
  }
}
.btns {
  margin: 5px;
}
</style>
