import { DataResponse, MessageResponse } from '@/common/interfaces/response.interface'
import api from './api'
import { ILoginBody, IProfileResponse, IRegisterBody, IUpdateProfileBody } from '@/common/interfaces/users.interface'

export const registerUser = async (body: IRegisterBody) => {
  const res = await api.post<MessageResponse>('/users/register', body)
  return res.data
}

export const loginUser = async (body: ILoginBody) => {
  const res = await api.post<MessageResponse>('/users/login', body)
  return res.data
}

export const logoutUser = async () => {
  const res = await api.post<MessageResponse>('/users/logout')
  return res.data
}

export const getProfile = async () => {
  const res = await api.get<DataResponse<IProfileResponse>>('/users/me')
  return res.data
}

export const updateProfile = async (body: IUpdateProfileBody) => {
  const res = await api.patch<MessageResponse>('/users/me', body)
  return res.data
}
