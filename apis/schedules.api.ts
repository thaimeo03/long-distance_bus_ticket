import { IAvailableScheduleResponse } from '@/common/interfaces/schedules.interface'
import api from './api'
import { DataResponse } from '@/common/interfaces/response.interface'

export const getAllAvailableSchedules = async () => {
  const res = await api.get<DataResponse<IAvailableScheduleResponse[]>>('/schedules/all/available')
  return res.data
}
