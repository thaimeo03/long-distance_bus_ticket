import axios, { AxiosInstance } from 'axios'

const HOST_URL = process.env.NEXT_PUBLIC_HOST_URL

class Api {
  apiInstance: AxiosInstance

  constructor() {
    this.apiInstance = axios.create({
      baseURL: HOST_URL || 'http://localhost:9999',
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json'
      },
      withCredentials: true
    })
  }
}

const api = new Api()
export default api.apiInstance
