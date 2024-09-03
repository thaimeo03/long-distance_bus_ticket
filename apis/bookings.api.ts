import api from './api'
import { DataResponse } from '@/common/interfaces/response.interface'
import { ICreateBookingBody, ICreateBookingResponse } from '@/common/interfaces/bookings.interface'

export const createBooking = async (body: ICreateBookingBody) => {
  const res = await api.post<DataResponse<ICreateBookingResponse>>('/bookings', body)
  return res.data
}
