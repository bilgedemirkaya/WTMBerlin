<script>
import { mapActions, mapState} from 'vuex'
export default {
    name: "newPhone",
    data() {
      return {
        phone: "",
        clicked: false
        }
    },
    methods: {
        ...mapActions(["addPhone","bringComponent","countDownTimer"]),
      onSubmit() {
        let newPhone = {
              name: this.phone
        }
        this.countDownTimer()
        this.addPhone(newPhone)
        this.phone =" " 
        }
    },
    computed: {
    ...mapState({ 
      countdown: (state) => state.countdown,
    }),
    }
}
</script>

<template lang="pug">
article.container
    h1 Add a new phone
    form(@submit.prevent="onSubmit")
        input(type="text" v-model="phone" placeholder="Add Phone name...")
        button(type="submit" class="btn submit" @click="() => clicked = true") Submit
        button(class="btn cancel" @click="bringComponent") Cancel      
    h3(v-if="clicked")  Thank you for adding a new phone 
      span {{ countdown }}
</template>

<style>
input[type="text"] {
  padding: 10px;
  border: 1px solid #000000;
  outline: 0;
  width: 100%;
  margin-bottom: 15px;
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
  color: white;
  border: none;
  cursor: pointer;
  outline: none;
  padding:15px;
  border-radius: 5%;
  margin-right: 25px;
}
.btn:hover {
  opacity: 0.8;
}
.submit {
background: black;
}
.cancel {
  background: red;
}
</style>