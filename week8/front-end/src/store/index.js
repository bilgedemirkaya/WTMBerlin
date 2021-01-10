import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    phones: [],
    platforms: [],
    currentapps: [],
    phoneChoice: '',
    isNew: false,
    singlePhone: [],
    countdown: 3,
  },
  
  mutations: {
    SET_PHONES(state, phones) {
      state.phones = phones
    },

    SET_APPS(state, platforms) {
      state.platforms = platforms
    },

    SET_PAPPS(state, personApps) {
      state.currentapps = personApps
    },

    SET_PHONE(state, phoneChoice) {
      state.phoneChoice = phoneChoice
    },

    SET_ISNEW(state, isNew) {
      state.isNew = isNew
    },

    SET_NEWPHONE(state, data) {
      state.phones.unshift(data)
    },

    DEL_PHONE(state, id) {
      state.phones = state.phones.filter(data => data.id !== id)
    },

    DEL_PLATF(state, id) {
      state.platforms = state.platforms.filter(data => data.id !== id)
    },

    SET_NEWPLATF(state, data) {
      state.platforms.unshift(data)
    },

    GET_PHONE(state, phone) {
      state.singlePhone = phone
    },

    RESET(state) {
      state.countdown = 3
    },

    COUNTDOWN(state) {
      state.countdown--
    }
  },

  actions: { 
    async fetchPeople({ commit }) {
      const allPeople = await axios.get(`${process.env.VUE_APP_API_URL}/person/all/json`)
      commit('SET_PPL', allPeople.data)
    },
    async fetchPhones({ commit }) { 
      const phones = await axios.get(`${process.env.VUE_APP_API_URL}/phone/all/json`)
      commit('SET_PHONES', phones.data)
    },
    async fetchApps({ commit }) { 
      const apps = await axios.get(`${process.env.VUE_APP_API_URL}/platform/all/json`)
      commit('SET_APPS', apps.data)
    },
    async choosePhone({ commit }, id) {
      // get current apps
      const personApps = await axios.get(`${process.env.VUE_APP_API_URL}/phone/${id}`)
      commit('SET_PAPPS', personApps.data.apps)

      // save phone choice
      const phoneChoice = personApps.data._id
      commit('SET_PHONE', phoneChoice)
    },
    removeComponent({ commit }) {
      const isNew = true
      commit('SET_ISNEW', isNew)
    },
    bringComponent({ commit }) {
      const isNew = false
      commit('SET_ISNEW', isNew)
    },
    async addPhone({ commit }, phone) {
      const response = await axios.post(`${process.env.VUE_APP_API_URL}/phone`, phone)
      commit('SET_NEWPHONE', response.data)
      
      setTimeout(() => {
        window.location = '/'
      }, 3000)
    },
    async rmvPhone({ commit }, id) {
      const resp = await axios.delete(`${process.env.VUE_APP_API_URL}/phone/${id}`)
      commit('DEL_PHONE', resp.data)
      window.location = '/'
    },
    async rmvPlatform({ commit }, id) {
      const resp = await axios.delete(`${process.env.VUE_APP_API_URL}/platform/${id}`)
      commit('DEL_PLATF', resp.data)
      location.reload()
    },
    async addPlatform({ commit }, platform) {
      const response = await axios.post(`${process.env.VUE_APP_API_URL}/platform`, platform)
      commit('SET_NEWPLATF', response.data)
      
      setTimeout(() => {
        location.reload()
      }, 3000)
    },
    async downloadApp({ commit }, appId) {
      const phoneId = this.state.phoneChoice
      const ids = []

      if (phoneId == '' || appId == null ) {
        alert('You should both specify your phone and the app')
        window.location = '/'
        return
      }

      const phone = await axios.get(`${process.env.VUE_APP_API_URL}/phone/${phoneId}`)
      phone.data.apps.forEach(app => {
        ids.push(app._id)
      })

      if (ids.includes(appId)) {
        alert('You already downloaded the app')
        window.location = '/'
        return
      }

      const choisenapp = { app: appId }
      await axios.post(`${process.env.VUE_APP_API_URL}/phone/${phoneId}/download`, choisenapp)
      alert("App downloaded, you can check if it is there in phones")
      window.location = '/'
    },

    async getSinglePhone({ commit }, id) {
      try {
        const singlePhone = await axios.get(`${process.env.VUE_APP_API_URL}/phone/${id}`)
        commit('GET_PHONE', singlePhone.data)
      }
      catch (err) {
        alert('there is no such a phone', err)
        window.location = '/'
      }
    },
    countDownTimer({ state, commit }) {
      commit('RESET')

      const interval = setInterval(() => {
        commit('COUNTDOWN')
        if (state.countdown === 0) {
          clearInterval(interval)
        }
      }, 1000)
    }
  }, 

  modules: {
  }
})
