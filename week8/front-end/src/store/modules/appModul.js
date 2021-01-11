import axios from "axios"

const state = {
    platforms: [],
}
    
const mutations= { 
    SET_APPS(state, platforms) {
        state.platforms = platforms
    },

    DEL_PLATF(state, id) {
        state.platforms = state.platforms.filter(data => data.id !== id)
    },
  
    SET_NEWPLATF(state, data) {
        state.platforms.unshift(data)
    }
}

const actions = { 
    async fetchApps({ commit }) { 
        const apps = await axios.get(`${process.env.VUE_APP_API_URL}/platform/all/json`)
        commit("SET_APPS", apps.data)
    },

    async rmvPlatform({ commit }, id) {
        const resp = await axios.delete(`${process.env.VUE_APP_API_URL}/platform/${id}`)
        commit("DEL_PLATF", resp.data)
        location.reload()
      },
      
    async addPlatform({ commit }, platform) {
        const response = await axios.post(`${process.env.VUE_APP_API_URL}/platform`, platform)
        commit("SET_NEWPLATF", response.data)
        
        setTimeout(() => {
          location.reload()
        }, 3000)
    },
}

  export default {
    state,
    actions,
    mutations
  }