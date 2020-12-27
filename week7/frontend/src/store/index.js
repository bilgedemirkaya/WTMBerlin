import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    allPeople: [],
    phones: [],
    apps: [],
    papps: [],
    phoneChoice:''
  },

  mutations: {
    SET_PPL(state,allPeople) {
      state.allPeople = allPeople
    },
    SET_PHONES(state,phones) {
      state.phones = phones
    },
    SET_APPS(state,apps) {
      state.apps = apps
    },
    SET_PAPPS(state,personApps) {
      state.papps = personApps
    },
    SET_PHONE(state,phoneChoice) {
      state.phoneChoice = phoneChoice
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
    async fetchAps({commit}) { 
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
    }
  },
  modules: {
  }
})
