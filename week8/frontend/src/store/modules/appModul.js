import axios from "axios"

const state = {
    apps: [],
    singleApp: ""
}
    
const mutations = { 
    SET_APPS(state, apps) {
        state.apps = apps
    },

    DEL_APP(state, id) {
        state.apps = state.apps.filter(data => data.id !== id)
    },
  
    SET_NEWAPP(state, data) {
        state.apps.unshift(data)
    }, 

    SET_SINGLEAPP(state, data) {
        state.singleApp = data
    }
}

const actions = { 
    async fetchApps({ commit }) { 
        const apps = await axios.get(`${process.env.VUE_APP_API_URL}/platform/all/json`)
        commit("SET_APPS", apps.data)
    },

    async rmvPlatform({ commit }, id) {
        const resp = await axios.delete(`${process.env.VUE_APP_API_URL}/platform/${id}`)
        commit("DEL_APP", resp.data)
        location.reload()
      },
      
    async addPlatform({ commit }, app) {
        let loading = true
        commit("SET_LOADING", loading)
        const response = await axios.post(`${process.env.VUE_APP_API_URL}/platform`, app)
        setTimeout(() => {
            commit("SET_NEWAPP", response.data)
            loading = false
            commit("SET_LOADING", loading)
        }, 2000)
    },

    async getSingleApp({ commit }, id) {
        try {
          const singleApp = await axios.get(`${process.env.VUE_APP_API_URL}/platform/${id}`)
          commit("SET_SINGLEAPP", singleApp.data)
        }
        catch (err) {
          alert("there is no such a App", err)
          window.location = "/"
        }
      }
}

  export default {
    state,
    actions,
    mutations
  }
