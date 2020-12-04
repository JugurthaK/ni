<template>
  <v-app-bar app color="primary" dark>
    <v-toolbar-title> Nom à trouver </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn
      text
      rounded
      v-for="link in links"
      :to="link.url"
      :key="`${link.label}-navbar-link`"
      >{{ link.label }}</v-btn
    >

    <v-btn
      v-if="!this.$vuetify.theme.dark"
      class="mx-2"
      fab
      dark
      small
      color="dark"
      @click="updateTheme"
    >
      <v-icon dark>
        mdi-weather-night
      </v-icon>
    </v-btn>

    <v-btn
      v-else
      class="mx-2"
      fab
      dark
      small
      color="amber darken-4"
      @click="updateTheme"
    >
      <v-icon dark>
        mdi-weather-sunny
      </v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
import { mapState } from 'vuex'
//import LocationHandler from '@/components/LocationHandler.vue'
export default {
  components: {
    //  LocationHandler
  },
  data() {
    return {}
  },
  computed: {
    ...mapState(['links', 'coords'])
  },

  methods: {
    updateTheme() {
      this.$vuetify.theme.dark
        ? (this.$vuetify.theme.dark = false)
        : (this.$vuetify.theme.dark = true)
    }
  }
}
</script>

<style lang="scss" scoped></style>
