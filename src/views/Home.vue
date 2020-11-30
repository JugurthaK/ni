<template>
  <v-app>
    <FileUploader />
  </v-app>
</template>

<script>
// @ is an alias to /src
import FileUploader from '@/components/FileUploader.vue'
export default {
  name: 'Home',
  components: {
    FileUploader
  }
}
</script>
