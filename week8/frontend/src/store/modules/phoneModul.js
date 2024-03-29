import axios from "axios"

const state = {
      phones: [],
      singlePhone: [],
      phoneChoice: "",
      currentapps: [],
      downloadStatus: "",
}
    
const mutations = { 
      SET_PHONES(state, phones) {
        state.phones = phones
      },
  
      SET_NEWPHONE(state, data) {
        state.phones.unshift(data)
      },
  
      DELETE_PHONE(state, id) {
        state.phones = state.phones.filter(data => data.id !== id)
      },
  
      GET_PHONE(state, phone) {
        state.singlePhone = phone
      },
  
      SET_PHONE(state, phoneChoice) {
        state.phoneChoice = phoneChoice
      },

      SET_DOWNLOADSTATUS(state, status) {
        state.downloadStatus = status
      },
}

const actions = { 
      async fetchPhones({ commit }) { 
        const phones = await axios.get(`${process.env.VUE_APP_API_URL}/phone/all/json`)
        commit("SET_PHONES", phones.data)
      },

      async addPhone({ commit }, phone) {
        let loading = true
        commit("SET_LOADING", loading)
        const response = await axios.post(`${process.env.VUE_APP_API_URL}/phone`, phone)
        setTimeout(() => {
          commit("SET_NEWPHONE", response.data)
          loading = false
          commit("SET_LOADING", loading)
        }, 2000)
      },

      async removePhone({ commit }, id) {
        const resp = await axios.delete(`${process.env.VUE_APP_API_URL}/phone/${id}`)
        commit("DELETE_PHONE", resp.data)
        window.location = "/"
      },

     async getSinglePhone({ commit }, id) {
      try {
        const singlePhone = await axios.get(`${process.env.VUE_APP_API_URL}/phone/${id}`)
        commit("GET_PHONE", singlePhone.data)
      }
      catch (err) {
        alert("there is no such a phone", err)
        window.location = "/"
      }
    },

     async choosePhone({ commit }, id) {

        // get current apps
        const personApps = await axios.get(`${process.env.VUE_APP_API_URL}/phone/${id}`)
        
        // save phone choice
        const phoneChoice = personApps.data._id
        commit("SET_PHONE", phoneChoice)

      },

     async downloadApp({ commit }, appId) {
        const phoneId = this.state.phoneModul.phoneChoice
        const ids = []
  
        if (phoneId == "" || appId == null ) {
          commit("SET_DOWNLOADSTATUS", "error")
          setTimeout(() => {
            window.location = "/"
          }, 2000)
          return
        }
  
        const phone = await axios.get(`${process.env.VUE_APP_API_URL}/phone/${phoneId}`)
        phone.data.apps.forEach(app => {
          ids.push(app._id)
        })
  
        if (ids.includes(appId)) {
          commit("SET_DOWNLOADSTATUS", "info")
          setTimeout(() => {
            window.location = "/"
          }, 2000)
          return
        }
  
        const choisenapp = { app: appId }
        await axios.post(`${process.env.VUE_APP_API_URL}/phone/${phoneId}/download`, choisenapp)
        commit("SET_DOWNLOADSTATUS", "success")
        setTimeout(() => {
          window.location = "/"
        }, 2000)
      },
}

  export default {
    state,
    actions,
    mutations
  }
