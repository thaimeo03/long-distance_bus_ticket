import api from './api'
import { IBusCompany } from '@/common/interfaces/bus-companies.interface'
import { DataResponse } from '@/common/interfaces/response.interface'

export const getBusCompanies = async () => {
  const res = await api.get<DataResponse<IBusCompany[]>>('/bus-companies')
  return res.data
}
