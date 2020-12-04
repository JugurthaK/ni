import axios from 'axios'

export default {
  getGeoCodeFromCity(city) {
    let key = 'd9530daa75014f2c9478f0f6e89ec1bf'
    return axios.get(
      `https://api.opencagedata.com/geocode/v1/json?q=${city}&key=${key}`
    )
  },

  getWeatherFromCoords(coords) {
    return axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${coords.latitude}&lon=${coords.longitude}&units=metric&appid=6d80143fae3f9fbc186cd54f528a2f4f`
    )
  },

  getWeatherFromCity(city) {
    return axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6d80143fae3f9fbc186cd54f528a2f4f&units=metric`
    )
  }
}
