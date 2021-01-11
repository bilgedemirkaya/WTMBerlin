import { createStore } from "vuex"
import phoneModul from './modules/phoneModul'
import appModul from './modules/appModul'

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
    removeComponent({ commit }) {
      const isNew = true
      commit("SET_ISNEW", isNew)
    },
    
    bringComponent({ commit }) {
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
    appModul
  }
})
