import { createStore } from "vuex"
import phoneModul from './modules/phoneModul'
import platformModul from './modules/platformModul'

export default createStore({
  state: {
    isNew: false,
    countdown: 3,
  },
  
  mutations: {
    SET_ISNEW(state, isNew) {
      state.isNew = isNew
    },

    RESET(state) {
      state.countdown = 3
    },

    COUNTDOWN(state) {
      state.countdown--
    }
  },

  actions: { 
    addNew({ commit }) {
      const isNew = true
      commit("SET_ISNEW", isNew)
    },
    
    cancelNew({ commit }) {
      const isNew = false
      commit("SET_ISNEW", isNew)
    },

    countDownTimer({ state, commit }) {
      commit("RESET")

      const interval = setInterval(() => {
        commit("COUNTDOWN")
        if (state.countdown === 0) {
          clearInterval(interval)
        }
      }, 1000)
    }
  }, 

  modules: {
    phoneModul,
    platformModul
  }
})
