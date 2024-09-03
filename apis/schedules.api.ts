import { IAvailableScheduleResponse, IScheduleQuery } from '@/common/interfaces/schedules.interface'
import api from './api'
import { DataResponse } from '@/common/interfaces/response.interface'

export const getAllAvailableSchedules = async (query: IScheduleQuery) => {
  const res = await api.get<DataResponse<IAvailableScheduleResponse[]>>('/schedules/find', { params: query })
  return res.data
}
