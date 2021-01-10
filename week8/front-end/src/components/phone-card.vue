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

<template lang='pug'>
article.card
  h2.card-title
    router-link.name(:to="phoneUrl" class="name") {{ phone.name }}
    button(class="rm-btn" @click="rmvPhone(`${phone._id}`)") x
  div(class="pretty p-default")
    input(
      id="phones"
      type='checkbox'
      name='phone'
      v-model="checked"
      @change='choosePhone(`${phone._id}`)'
    )
    div(class="state p-success")
      img(:src="`https://picsum.photos/300/200?random=${phone._id}`", alt="phone" class="img")
    h3(v-if="checked" class="current") Current Apps: 
      h6(v-for="apps in currentapps" class="appname") - {{ apps.name }}
  div 
    h5(v-if="checked") To download an app into {{phone.name}}... 
      button(class="here")
        router-link.name(:to="appUrl" class="clickme" style="color:white") click here 

</template>

<style scoped>
.card {
    display: inline-block;
    text-align: right;
    padding: 20px;
    border: 4px solid rgb(227, 238, 226);
    border-radius: 5px;
    background: rgb(234, 241, 231);
    margin: 20px;
    min-width: 100px;
    max-width: 500px;
}

.rm-btn {
  border: 2px solid rgb(209, 196, 119);
  border-radius: 10%;
  background-color:white;
  outline: none;
}
.rm-btn:hover {
   background-color: rgb(212, 54, 54);
   color:white;
}
.name {
  float:left;
  margin: 15px;
  font-size: 18px;
  text-decoration: none;
  color: black;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 1px;
}
.appname { 
  color: rgb(18, 115, 172);
  font-size: 16px;
}
.current {
  float:left;
  margin: 15px;
}
.here {
  border: none;
  outline: none;
}

.p-default {
 border: 2px solid rgb(209, 196, 119);
 background-color: white;
 position: relative;
 top: 1px;
}
.p-default:hover {
  background-color:rgb(213, 231, 198);
  padding: 5px;
}
</style>