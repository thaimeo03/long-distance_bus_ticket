import axios, { AxiosInstance } from 'axios'
import { refreshToken } from './auth.api'

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

    this.addInterceptor()
  }

  // Add interceptor to handle refresh token with error 401
  addInterceptor() {
    this.apiInstance.interceptors.response.use(
      (response) => response,
      async (error) => {
        const originalRequest = error.config

        if (
          error.response &&
          error.response.status === 401 &&
          !originalRequest._retry &&
          originalRequest.url !== '/auth/refresh-token'
        ) {
          originalRequest._retry = true // Prevent infinite loop

          try {
            // Call refresh token API
            await refreshToken()

            // Retry original request
            return this.apiInstance(originalRequest)
          } catch (error) {
            return Promise.reject(error)
          }
        }

        return Promise.reject(error)
      }
    )
  }
}

const api = new Api()
export default api.apiInstance
