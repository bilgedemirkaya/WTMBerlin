import { createStore } from "vuex"
import phoneModul from "./modules/phoneModul"
import appModul from "./modules/appModul"

export default createStore({
  state: {
    loading: false
  },
  mutations: {
    SET_LOADING(state, loading) {
      state.loading = loading
    }
  },
  modules: {
    phoneModul,
    appModul
  }
})
