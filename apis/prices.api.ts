import api from './api'
import { DataResponse } from '@/common/interfaces/response.interface'
import { IGetPriceByRouteStopQuery, IPrice } from '@/common/interfaces/prices.interface'

export const getPriceByRouteStops = async (query: IGetPriceByRouteStopQuery) => {
  const res = await api.get<DataResponse<IPrice>>('/prices', { params: query })
  return res.data
}
