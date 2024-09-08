import { DataResponse, MessageResponse } from '@/common/interfaces/response.interface'
import api from './api'
import { IRegisterBody } from '@/common/interfaces/users.interface'

export const registerUser = async (body: IRegisterBody) => {
  const res = await api.post<MessageResponse>('/users/register', body)
  return res.data
}
