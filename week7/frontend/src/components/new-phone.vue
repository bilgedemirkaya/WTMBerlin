<template lang="pug">
article.container
    h3 Add a new phone
    form(@submit.prevent="onSubmit")
        input(type="text" v-model="phone" placeholder="Add Phone name...")
        input(type="submit" value="Submit" class="button" @click="() => clicked = true")
        input(type="submit" style="backgroundColor:red" value="Cancel" class="button" @click="() => {location.reload()}")
    h3(v-if="clicked")  Thank you for adding a new phone 
      span {{ countdown }}

</template>

<script>
import { mapActions} from 'vuex'
export default {
    name: "newPhone",
    data() {
    return {
      phone: "",
      countdown: 3,
      clicked: false
      }
    },
    methods: {
        ...mapActions(["addPhone"]),
        countDownTimer() {
          setTimeout(() => {
            this.countdown -= 1
            this.countDownTimer()
            }, 1000)
            console.log(this.countdown)

            },
      onSubmit() {
            let newPhone = {
                name: this.phone
            }
        this.addPhone(newPhone)
        this.phone = ' ' 
        this.countDownTimer()
    }
    }
}
</script>

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
</style>