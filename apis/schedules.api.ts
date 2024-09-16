import {
  IAvailableScheduleResponse,
  IScheduleFilterBody,
  IScheduleQuery
} from '@/common/interfaces/schedules.interface'
import api from './api'
import { DataResponse } from '@/common/interfaces/response.interface'

export const getAllAvailableSchedules = async ({
  query,
  body
}: {
  query: IScheduleQuery
  body?: IScheduleFilterBody
}) => {
  const res = await api.post<DataResponse<IAvailableScheduleResponse[]>>('/schedules/find', body, {
    params: query
  })
  return res.data
}
