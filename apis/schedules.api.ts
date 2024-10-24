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
  console.log({ query, body })
  const res = await api.post<DataResponse<IAvailableScheduleResponse[]>>('/schedules/find', body, {
    params: {
      ...query,
      departureDate: new Date((query.departureDate as Date).getTime() + 7 * 60 * 60 * 1000)
    }
  })
  return res.data
}
