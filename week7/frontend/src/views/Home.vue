<script>
import PhoneCard from '@/components/phone-card.vue'
import newPhone from '@/components/new-phone.vue'
import {mapState, mapActions} from 'vuex'

export default {
  name: 'Home',
  components: {
    PhoneCard,
    newPhone
  },
  computed: {
    ...mapState({
     phones: (state) => state.phones,
     isNew: (state) => state.isNew
    }) 
  },
  methods: {
    ...mapActions(['fetchPhones','removeComponent'])
  },
  created() {
    this.fetchPhones()
  }
}
</script>

<template lang= "pug">
h1 Welcome to the website where you can download new apps to your phone!
h3 Please choose your phone or  <button class="button" @click="removeComponent">  <span>Add new phone </span> </button>
section(v-if="!isNew") 
  phone-card(v-for="phone in phones",:phone="phone")
section(v-else)
  new-phone()

</template>

<style lang="sass">
$color: #111
$primary: #ffffff 

body 
  background-color: #fff1cc
.button
  position: relative
  margin: auto
  padding: 19px 22px
  transition: all .2s ease
  border: none
  outline: none
  background: linear-gradient(-90deg, #fff1cc, #88fcf0)
  border-radius: 25px
  &:before
    content: ""
    position: absolute
    top: 0
    left: 0
    display: block
    border-radius: 28px
    background: rgba($primary,.5)
    width: 56px
    height: 56px
    transition: all .3s ease
  span
    position: relative
    font-size: 16px
    line-height: 18px
    font-weight: 900
    letter-spacing: .25em
    text-transform: uppercase
    vertical-align: middle
  svg
    position: relative
    top: 0
    margin-left: 15px
    fill: none
    stroke-linecap: round
    stroke-linejoin: round
    stroke: $color
    stroke-width: 2
    transform: translateX(-5px)
    transition: all .3s ease
  &:hover
    &:before
      width: 110%
      background: rgba($primary,1)
    svg
      transform: translateX(0)
  &:active
    transform: scale(.96)

.clickme
  font-family: 'Bungee', cursive
  font-size: 0.7rem
  position: relative
  text-transform: uppercase
  font-weight: bold
  letter-spacing: 1px
  cursor: pointer
  background: $color
  border: 2px solid darken(white, 15%)
  padding: 10px 20px
  border-radius: 45px
  color: white
  overflow: hidden
  box-shadow: 0 2px 4px darkgray
  transition: all 0.2s ease-in
  z-index: 1
  
  .circle
    position: absolute
    border-radius: 50%
    pointer-events: none
    background:
      image: radial-gradient(circle closest-side, white, lighten(palevioletred, 15%))

    width: 1px
    height: 1px
    z-index: 3
    animation:
      name: ripple
      duration: 0.5s
      timing-function: ease-in
  
  &:hover
    transform: scale(1.01)
    box-shadow: 0 6px 4px darkgray

@keyframes ripple
  0%
    transform: scale(0, 0)
    opacity: 0
  75%
    transform: scale(450, 450)
    opacity: 0.75
  100%
    transform: scale(700, 700)
    opacity: 0
.img 

  border: 2px solid black
.img:hover
  opacity: 0.7

</style>