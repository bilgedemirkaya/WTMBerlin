import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    allPeople: [] 
  },
  mutations: {
    SET_PPL(state,allPeople) {
      state.allPeople = allPeople
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
      commit('SET_PPL',allPeople.data)
    }
  },
  modules: {
  }
})
