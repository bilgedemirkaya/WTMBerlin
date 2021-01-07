<template lang='pug'>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
article.card
  h2.card-title
  router-link.name(:to="phoneUrl" class="name") {{ phone.name }}  
  button(class="rm-btn" @click="rmvPhone(`${phone._id}`)")
      i(class="fa fa-remove")
  input(
    type='checkbox'
    name='phone'
    v-model="checked"
    @change='choosePhone(`${phone._id}`)'
  )
  img(:src="`https://picsum.photos/300/200?random=${phone._id}`", alt="phone" class="img")
  h3(v-if="checked" class="current") Current Apps: 
    h6(v-for="apps in currentapps" class="appname") - {{ apps.name }}
  h4(v-if="checked") To download a new app into {{ phone.name }} please go 
    router-link.name(:to="appUrl" style="color: rgb(212, 54, 54)") here

</template>
<script>

import {mapState, mapActions} from 'vuex'


export default {
  name: 'PhoneCard',
  props: ['phone'],
  components: {
  },
  data () {
    return {
      checked:''
    }
  },
   computed: {
    ...mapState({ 
      currentapps: (state) => state.currentapps,
    }),
    phoneUrl() {
      return `/phone/${this.phone._id}`
    },
    appUrl() {
      return `/apps`
    }
  },
  methods: {
    ...mapActions(['choosePhone','rmvPhone'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
    display: inline-block;
    text-align: right;
    padding: 20px;
    border: 4px solid rgb(227, 238, 226);
    border-radius: 5px;
    background: rgb(234, 241, 231);
    margin: 20px;
    min-width: 200px;
}
input[type="checkbox"] {
  display: block;
}
.rm-btn {
  padding: 10px;
  border: 4px solid rgb(212, 54, 54);
  border-radius: 100%;
  background-color: #fff1cc;
  outline: none;
}
.rm-btn:hover {
   background-color: rgb(212, 54, 54);
   color:white;
}
.name {
  margin: 15px;
  font-size: 18px;
  text-decoration: none;
  color: black;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 1px;
}
.appname { 
  color: rgb(91, 172, 219)
}
.current {
  float:left;
  margin: 15px;
}
</style>
