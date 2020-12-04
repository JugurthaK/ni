import Vue from 'vue'
import Vuex from 'vuex'
import GeoLocation from '@/services/GeoLocation.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    links: [
      {
        label: 'Home',
        url: '/'
      },
      {
        label: 'A propos',
        url: '/about'
      }
    ],
    coords: {},
    city: '',
    weather: {}
  },
  mutations: {
    ADD_FILE(state, file) {
      state.file = file
    },
    UPDATE_COORDS(state, coords) {
      state.coords = coords
    },
    UPDATE_CITY(state, city) {
      state.city = city
    },
    UPDATE_WEATHER(state, weather) {
      state.weather = weather
    }
  },
  actions: {
    updateCoords({ commit }, { coords }) {
      commit('UPDATE_COORDS', coords)
    },

    updateCity({ dispatch, commit }, { city }) {
      GeoLocation.getGeoCodeFromCity(city)
        .then(response => {
          let data = response.data.results[0].geometry
          let coords = { latitude: data.lat, longitude: data.lng }

          dispatch('updateCoords', { coords })
          commit('UPDATE_CITY', city)
        })
        .catch(err => console.log('Error fetching geocode ' + err.message))
    },

    getWeatherFromCoords({ commit, state }) {
      GeoLocation.getWeatherFromCoords(state.coords)
        .then(response => {
          commit('UPDATE_WEATHER', response.data)
        })
        .catch(err => console.error('Error ' + err.message))
    },
    getWeatherFromCity({ commit }, city) {
      GeoLocation.getWeatherFromCity(city)
        .then(response => {
          commit('UPDATE_WEATHER', response.data)
        })
        .catch(err => console.error('Error ' + err.message))
    }
  },
  modules: {}
})
