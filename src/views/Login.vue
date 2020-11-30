<template>
  <v-container>
    <v-row>
      <v-col class="mt-4" offset-lg="3" lg="6">
        <v-card flat color="white">
          <v-card-title class="text-center justify-center py-6">
            <h1 class="font-weight-bold display-3">
              Connexion
            </h1>
          </v-card-title>

          <v-tabs
            v-model="tab"
            background-color="transparent"
            color="primary"
            grow
          >
            <v-tab>
              Connexion
            </v-tab>

            <v-tab>
              Créer un compte
            </v-tab>
          </v-tabs>

          <v-tabs-items v-model="tab">
            <v-tab-item>
              <v-card color="primary" flat>
                <v-card-text>AAAA</v-card-text>
              </v-card>
            </v-tab-item>

            <v-tab-item>
              <SignIn />
            </v-tab-item>
          </v-tabs-items>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import SignIn from '@/components/forms/SignIn.vue'
export default {
  components: {
    SignIn
  },
  data() {
    return {
      tab: null
    }
  }
}
</script>

<style lang="scss" scoped></style>
