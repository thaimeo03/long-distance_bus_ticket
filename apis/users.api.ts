import { DataResponse, MessageResponse } from '@/common/interfaces/response.interface'
import api from './api'
import { ILoginBody, IRegisterBody } from '@/common/interfaces/users.interface'

export const registerUser = async (body: IRegisterBody) => {
  const res = await api.post<MessageResponse>('/users/register', body)
  return res.data
}

export const loginUser = async (body: ILoginBody) => {
  const res = await api.post<MessageResponse>('/users/login', body)
  return res.data
}