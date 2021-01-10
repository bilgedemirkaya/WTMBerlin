<script>
import {mapActions, mapState} from 'vuex'

export default {
    name: "newPlatform",
    data() {
      return {
        platform: "",
        clicked: false
        }
    },
    computed: {
    ...mapState({ 
      countdown: (state) => state.countdown,
    })
    },
    methods: {
        ...mapActions(["addPlatform","bringComponent","countDownTimer"]),
      onSubmit() {
            let newplatform = {
                name: this.platform
            }
        this.countDownTimer()
        this.addPlatform(newplatform)
        this.platform =' ' 
        }
    }
}
</script>
<template lang="pug">
article.container
    h3 Add a new platform
    form(@submit.prevent="onSubmit")
        input(type="text" v-model="platform" placeholder="Add platform name...")
        input(type="submit" value="Submit" class="button" @click="() => clicked = true")
        button(type="button" value="Cancel" class="btn" @click="bringComponent") Cancel      
    h3(v-if="clicked")  Thank you for adding a new platform 
      span {{ countdown }}
</template>

<style scoped>
form {
  display: flex;
  align-items: stretch;
}
input[type="text"] {
  flex: 8;
  padding: 10px;
  border: 1px solid #a38b00;
  outline: 0;
}
input[type="submit"] {
  flex: 2;
  margin: 10px;
  background: black;
  color: white;
  border: 1px #2a7553 solid;
  cursor: pointer;
}
.container { 
   display: inline-block;
   text-align: left;
   padding: 20px;
   border-radius: 3px;
   margin: 20px;
   min-width: 200px;
}
span
{
  position: relative;
  margin:10px;
  font-size: 36px;
  line-height: 18px;
  font-weight: 900;
  letter-spacing: .25em;
  vertical-align: middle;
}
.btn {
  padding: 20px;
  margin: 15px;
  border-radius: 15px;
  background: #e80909;
  color: white;
}
</style>