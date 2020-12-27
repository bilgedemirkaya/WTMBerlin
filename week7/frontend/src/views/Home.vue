<script>
import PhoneCard from '@/components/phone-card.vue'
import {mapState, mapActions} from 'vuex'

export default {
  name: 'Home',
  components: {
    PhoneCard,
  },
  computed: {
    ...mapState({
     phones: (state) => state.phones
    }) 
  },
  methods: {
    ...mapActions({  
      fetchPhones: 'fetchPhones',
    })
  },
  created() {
    this.fetchPhones()
  }
}
</script>

<template lang= "pug">
h1 Welcome to the website where you can download new apps to your phone!
h3 Please choose your phone or  <button class="button">  <span>Add new phone</span> </button>
phone-card(v-for="phone in phones",:phone="phone")
</template>

<style lang="sass">
$color: #111
$primary: #ffffff 

.button
  position: relative
  margin: auto
  padding: 19px 22px
  transition: all .2s ease
  border: none
  outline: none
  background: linear-gradient(-90deg, #354d2e, #88fcf0)
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
    margin-left: 10px
    fill: none
    stroke-linecap: round
    stroke-linejoin: round
    stroke: $color
    stroke-width: 2
    transform: translateX(-5px)
    transition: all .3s ease
  &:hover
    &:before
      width: 100%
      background: rgba($primary,1)
    svg
      transform: translateX(0)
  &:active
    transform: scale(.96)
</style>