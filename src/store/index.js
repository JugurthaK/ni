import Vue from 'vue'
import Vuex from 'vuex'
import ApiClient from '@/services/ApiClient.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    file: {}
  },
  mutations: {
    ADD_FILE(state, file) {
      state.file = file
    }
  },
  actions: {
    postFile({ commit }, file) {
      ApiClient.postFile(file)
        .then(() => {
          commit('ADD_FILE', file)
        })
        .catch(error => console.error('Cannot upload file ' + error.message))
    }
  },
  modules: {}
})
