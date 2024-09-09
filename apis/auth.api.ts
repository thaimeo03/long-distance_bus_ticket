import { MessageResponse } from '@/common/interfaces/response.interface'
import api from './api'

export const refreshToken = async () => {
  const res = await api.get<MessageResponse>('/auth/refresh-token')
  return res.data
}
