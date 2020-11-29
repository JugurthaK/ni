import axios from 'axios'
import Base64 from './Base64'

const apiClient = axios.create({
  baseURL: 'http://localhost:3000',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-type': 'application/json'
  }
})

export default {
  async postFile(file) {
    let fileBase64 = await Base64.getBase64(file)

    return apiClient.post('/files', { title: file.name, image: fileBase64 })
  }
}
