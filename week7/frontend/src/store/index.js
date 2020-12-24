import { createStore } from 'vuex'

export default createStore({
  state: {
    counter : 0
  },
  mutations: {
    SET_COUNTER(state,newCount) {
      state.counter = newCount
    }
  },
  actions: {
    incrementCounter({commit, state}) {
      const newCount = state.counter + 1
      commit('SET_COUNTER', newCount) //name the mutation
    }
  },
  fetchPeople({commit}) {
    const allPeople = axios('http://localhost:3000/person/all/json')
  }
  modules: {
  }
})
