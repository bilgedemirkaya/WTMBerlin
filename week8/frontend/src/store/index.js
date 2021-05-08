import { createStore } from "vuex"
import phoneModul from './modules/phoneModul'
import platformModul from './modules/platformModul'

export default createStore({
  modules: {
    phoneModul,
    platformModul
  }
})
