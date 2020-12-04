<template>
  <v-container>
    <TextField />

    <v-row>
      <v-col cols="12"></v-col>
      <WeatherCard />
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'
import TextField from '@/components/TextField.vue'
import WeatherCard from '@/components/WeatherCard.vue'
export default {
  data() {
    return {}
  },
  components: {
    TextField,
    WeatherCard
  },
  computed: {
    ...mapState(['coords'])
  },

  methods: {}
}
</script>

<style lang="scss" scoped></style>
