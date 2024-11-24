import { DataResponse, MessageResponse } from '@/common/interfaces/response.interface'
import api from './api'
import { ICreateRouteDetailsBody, IRouteDetails } from '@/common/interfaces/routes.interface'

export const getAllRouteDetails = async () => {
  const res = await api.get<DataResponse<IRouteDetails[]>>('/routes/details')
  return res.data
}

export const createRouteDetails = async (body: ICreateRouteDetailsBody) => {
  const res = await api.post<MessageResponse>('/routes/details', body)
  return res.data
}
