function getBase64(file) {
  let reader = new FileReader()

  return new Promise((resolve, reject) => {
    reader.onerror = () => {
      reader.abort()
      reject('Error while parsing')
    }

    reader.onload = () => {
      resolve(reader.result)
    }
    reader.readAsDataURL(file)
  })
}

export default {
  getBase64
}
