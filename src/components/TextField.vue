<template>
  <v-toolbar dense floating>
    <v-text-field
      v-model="city"
      hide-details
      prepend-icon="mdi-magnify"
      label="City"
      single-line
    ></v-text-field>

    <v-btn icon @click="resolveGeoCode">
      <v-icon>mdi-crosshairs-gps</v-icon>
    </v-btn>
  </v-toolbar>
</template>

<script>
//import { mapState } from 'vuex'

export default {
  data() {
    return {
      city: ''
    }
  },
  methods: {
    resolveGeoCode() {
      let city = this.city
      if (city != '') {
        this.$store.dispatch('getWeatherFromCity', city)
      } else this.askPosition()
    },

    askPosition() {
      navigator.geolocation.getCurrentPosition(position => {
        let coords = position.coords
        this.$store.dispatch('updateCoords', { coords })
        this.$store.dispatch('getWeatherFromCoords')
      })
    },

    getWeather() {
      this.$store.dispatch('getWeather', this.city)
    }
  }
}
</script>

<style lang="scss" scoped></style>
