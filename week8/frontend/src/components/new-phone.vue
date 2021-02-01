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
        ...mapActions(["addPhone","cancelNew","countDownTimer"]),
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
    h3 Add a new phone
    form(@submit.prevent="onSubmit")
        input(type="text" v-model="phone" placeholder="Add Phone name...")
        button(type="submit" class="btn submit" @click="clicked = true") Submit
        button(class="btn cancel" @click="cancelNew") Cancel      
    h3(v-if="clicked")  Thank you for adding a new phone 
      span {{ countdown }}
</template>

<style>
input[type="text"] {
  padding: 10px;
  border: 1px solid #000000;
  outline: 0;
  width: 90%;
  margin-bottom: 15px;
}
.container { 
   display: inline-block;
   text-align: left;
   padding: 20px;
   border-radius: 3px;
   margin: 20px;
   min-width: 200px;
   background-color: #edf7fa;
   box-shadow: 1px 2px;
   margin-bottom: 50px;
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
  background: rgb(170, 11, 11);
}

</style>