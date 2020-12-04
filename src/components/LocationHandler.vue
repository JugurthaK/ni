<template>
  <v-btn class="mx-2" fab dark small color="pink" @click="askPosition">
    <v-icon dark>
      mdi-map-marker
    </v-icon>
  </v-btn>
</template>

<script>
export default {
  mounted() {
    this.askPosition()
  },
  methods: {
    askPosition() {
      navigator.geolocation.getCurrentPosition(position => {
        let coords = position.coords
        this.$store.dispatch('updateCoords', { coords })
      })
    }
  }
}
</script>

<style lang="scss" scoped></style>
