import { DataResponse } from '@/common/interfaces/response.interface'
import api from './api'
import { IRouteDetails } from '@/common/interfaces/routes.interface'

export const getAllRouteDetails = async () => {
  const res = await api.get<DataResponse<IRouteDetails[]>>('/routes/details')
  return res.data
}
