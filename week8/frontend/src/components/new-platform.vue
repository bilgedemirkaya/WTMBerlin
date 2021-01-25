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
        ...mapActions(["addPlatform","cancelNew","countDownTimer"]),
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
        button(type="submit" class="btn submit" @click="clicked = true") Submit
        button(class="btn cancel" @click="cancelNew") Cancel      
    h3(v-if="clicked")  Thank you for adding a new platform 
      span {{ countdown }}
</template>
