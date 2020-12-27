<template lang="pug">
article.container
    h3 Add a new phone
    form(@submit.prevent="onSubmit")
        input(type="text" v-model="phone" placeholder="Add Phone name...")
        input(type="submit" value="Submit" class="button")
</template>

<script>
import { mapActions} from 'vuex'
export default {
    name: "newPhone",
    data() {
    return {
      phone: ""
      }
    },
    methods: {
        ...mapActions(["addPhone"]),
        onSubmit() {
            let newPhone = {
                name: this.phone
            }
        this.addPhone(newPhone)
        this.phone = ' '
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
  border: 1px solid #41b883;
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

</style>