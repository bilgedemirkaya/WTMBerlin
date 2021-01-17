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
      currentapps: (state) => state.phoneModul.currentapps,
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
  button(class='rm-btn' @click='rmvPhone(`${phone._id}`)') X
  h2.card-title
    router-link.name(:to='phoneUrl' class='name') {{ phone.name }}
  div(class='pretty p-default' )
    input(
      id='phones'
      type='checkbox'
      name='phone'
      v-model='checked'
      @change='choosePhone(`${phone._id}`)'
    )
    div(class='state p-success')
      img(:src='`https://picsum.photos/250/150?random=${phone._id}`', alt='phone' class='img')
      h3(v-if="checked" class="current") Current Apps: 
        p(v-for="apps in currentapps" class="appname") {{ apps.name }} ✓
  h5(v-if="checked") To download an app into {{phone.name}}... <br><br>
    button(class="here")
      router-link.name(:to="appUrl" class="clickme" ) click here 
</template>

<style>
.card {
    display: inline-block;
    vertical-align: top;
    text-align: center;
    padding: 25px;
    border: 2px solid rgb(227, 238, 226);
    border-radius: 5px;
    background: rgb(234, 241, 231);
    margin: 20px;
    height: fit-content;
    width: fit-content;
    box-shadow: 1px 1px;
}
.rm-btn {
  border: none;
  outline: none;
  padding: 5px;
  float: right;
  background: rgb(234, 241, 231);
}
.rm-btn:hover {
   background-color: rgb(212, 54, 54);
   color:white;
}
.card-title {
 text-align: center;
 margin: auto;
}
.name {
  text-decoration: none;
  color: black;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 1px;
  font-size: 18px;
}
.appname { 
  color: rgb(18, 115, 172);
  font-size: 12px;
}
.current {
  text-align: center;
  margin: 5px;
}
.here {
  border: none;
  outline: none;
}
.p-default {
  border: 1px solid rgb(227, 238, 226);
  border-radius: 5px;
  margin:10px;
}
.p-default:hover {
  background-color:rgb(213, 231, 198); 
}
.clickme {
  font-family:sans-serif !important;
}
.img {
  border-radius: 5px;
}
</style>