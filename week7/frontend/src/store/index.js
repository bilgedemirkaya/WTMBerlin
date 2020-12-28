import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    allPeople: [],
    phones: [],
    platforms: [],
    papps: [],
    phoneChoice:'',
    appChoice:'',
    isNew:false
  },

  mutations: {
    SET_PPL(state,allPeople) {
      state.allPeople = allPeople
    },
    SET_PHONES(state,phones) {
      state.phones = phones
    },
    SET_APPS(state,platforms) {
      state.platforms = platforms
    },
    SET_PAPPS(state,personApps) {
      state.papps = personApps
    },
    SET_PHONE(state,phoneChoice) {
      state.phoneChoice = phoneChoice
    },
    SET_APP(state,appChoice) {
      state.appChoice = appChoice
    },
    SET_ISNEW(state, isNew) {
      state.isNew = isNew
    },
    SET_NEWPHONE(state,data) {
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
    }
  },
  actions: {
    incrementCounter({commit, state}) {
      const newCount = state.counter + 1
      commit('SET_COUNTER', newCount) //name the mutation
    },
    async fetchPeople({commit}) {
      const allPeople = await axios.get('http://localhost:3000/person/all/json')
     // console.log(allPeople)
      commit('SET_PPL', allPeople.data)
    },
    async fetchPhones({commit}) { 
      const phones = await axios.get('http://localhost:3000/phone/all/json')
      commit('SET_PHONES', phones.data)
    },
    async fetchApps({commit}) { 
      const apps = await axios.get('http://localhost:3000/platform/all/json')
      commit('SET_APPS', apps.data)
    },
    async choosePhone({commit},id) {
      // get current apps
      const personApps = await axios.get(`http://localhost:3000/phone/${id}`)
      commit('SET_PAPPS', personApps.data.apps)

      // save phone choice
      const phoneChoice = personApps.data._id
      commit('SET_PHONE',phoneChoice)
      console.log(phoneChoice)
    },
    removeComponent({commit}) {
      const isNew = true
      commit('SET_ISNEW',isNew)
    },
    async addPhone({ commit }, phone) {
      const response = await axios.post('http://localhost:3000/phone',phone)
      commit('SET_NEWPHONE', response.data)
      console.log(response.data)
      setTimeout(() => {
        location.reload()
      },3000)
    },
    async rmvPhone({commit}, id) {
      const resp = await axios.delete(`http://localhost:3000/phone/${id}`)
      commit('DEL_PHONE', resp.data)
      location.reload()
    },
    async rmvPlatform({commit}, id) {
      const resp = await axios.delete(`http://localhost:3000/platform/${id}`)
      commit('DEL_PLATF', resp.data)
      location.reload()
    },
    async addPlatform({ commit }, platform) {
      const response = await axios.post('http://localhost:3000/platform',platform)
      commit('SET_NEWPLATF', response.data)
      console.log(response.data)
      setTimeout(() => {
        location.reload()
      },3000)
    },
    async downloadApp() {
      let phoneId = this.state.phoneChoice
      let appId = this.state.appChoice
      let choisenapp = {app : appId}
      const down = await axios.post(`http://localhost:3000/phone/${phoneId}/download`, choisenapp)
      alert("App downloaded, you can check if it is there in phones")
      console.log(down)
      location.assign("http://localhost:8081")
    },
    async choosePlatform({commit},id) {
      const platforms = await axios.get(`http://localhost:3000/platform/${id}`)
      // save app choice
      const appChoice = platforms.data._id
      commit('SET_APP',appChoice)
      console.log(appChoice)
    },
  }, 
  modules: {
  }
})
