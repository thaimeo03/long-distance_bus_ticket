import api from './api'
import { DataResponse } from '@/common/interfaces/response.interface'
import { IRouteStop } from '@/common/interfaces/route-stops.interface'

export const getAllRouteStops = async () => {
  const res = await api.get<DataResponse<IRouteStop[]>>('/route-stops')
  return res.data
}
