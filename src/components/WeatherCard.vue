<template>
  <v-card class="mx-auto" width="800" loading="weather">
    <v-list-item two-line>
      <v-list-item-content>
        <v-list-item-title class="headline">
          {{ weather.name }}
        </v-list-item-title>
        <v-list-item-subtitle
          >Latitude: {{ weather.coord.lat }}, Longitude:
          {{ weather.coord.lon }}</v-list-item-subtitle
        >
      </v-list-item-content>
    </v-list-item>

    <v-card-text>
      <v-row align="center">
        <v-col class="display-3" cols="6">
          {{ Math.round(weather.main.temp) }}&deg;C
        </v-col>
        <v-col cols="6">
          <v-img :src="imgSrc" alt="Sunny image" width="92"></v-img>
        </v-col>
      </v-row>
    </v-card-text>

    <v-list-item>
      <v-list-item-icon>
        <v-icon>mdi-arrow-up-thick</v-icon>
      </v-list-item-icon>
      <v-list-item-subtitle>
        Min : {{ Math.floor(weather.main.temp_min) }}&deg;C | Max :
        {{ Math.ceil(weather.main.temp_max) }}&deg;C</v-list-item-subtitle
      >
    </v-list-item>

    <v-list-item>
      <v-list-item-icon>
        <v-icon>mdi-water</v-icon>
      </v-list-item-icon>
      <v-list-item-subtitle>
        Humidity : {{ weather.main.humidity }}%</v-list-item-subtitle
      >
    </v-list-item>

    <v-list-item>
      <v-list-item-icon>
        <v-icon>mdi-send</v-icon>
      </v-list-item-icon>
      <v-list-item-subtitle
        >Wind : {{ weather.wind.speed }} km/h |
        {{ weather.wind.deg }}&deg;</v-list-item-subtitle
      >
    </v-list-item>

    <v-divider></v-divider>

    <v-card-actions>
      <v-btn text>
        Make a Report
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      labels: ['SU', 'MO', 'TU', 'WED', 'TH', 'FR', 'SA'],
      time: 0,
      forecast: [
        {
          day: 'Tuesday',
          icon: 'mdi-white-balance-sunny',
          temp: '24\xB0/12\xB0'
        },
        {
          day: 'Wednesday',
          icon: 'mdi-white-balance-sunny',
          temp: '22\xB0/14\xB0'
        },
        { day: 'Thursday', icon: 'mdi-cloud', temp: '25\xB0/15\xB0' }
      ]
    }
  },
  computed: {
    ...mapState(['weather']),
    imgSrc() {
      return `https://openweathermap.org/img/wn/${this.weather.weather[0].icon}@4x.png`
    }
  }
}
</script>

<style lang="scss" scoped></style>
