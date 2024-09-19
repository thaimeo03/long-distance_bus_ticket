import { IProfileResponse, IUpdateRoleBody } from '@/common/interfaces/users.interface'
import api from './api'
import { DataResponse, MessageResponse } from '@/common/interfaces/response.interface'

export const getAllUsersInfo = async () => {
  const res = await api.get<DataResponse<IProfileResponse[]>>('/admin/users')
  return res.data
}

export const updateUserRole = async ({ id, body }: { id: string; body: IUpdateRoleBody }) => {
  const res = await api.put<MessageResponse>(`/admin/user/update-role/${id}`, body)
  return res.data
}
