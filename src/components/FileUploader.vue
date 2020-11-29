<template>
  <div>
    <input
      type="file"
      name="file_upload"
      id="file_upload"
      @change="onFileSelected"
    />
    <button @click="onUpload">Upload</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedFile: ''
    }
  },
  methods: {
    onFileSelected(event) {
      this.selectedFile = event.target.files[0]
    },
    onUpload() {
      this.$store
        .dispatch('postFile', this.selectedFile)
        .then(res => console.log(res))
    }
  }
}
</script>

<style lang="scss" scoped></style>
