import api from './api'
import { DataResponse, MessageResponse } from '@/common/interfaces/response.interface'
import { ICancelBookingBody, ICreateBookingBody, ICreateBookingResponse } from '@/common/interfaces/bookings.interface'

export const createBooking = async (body: ICreateBookingBody) => {
  const res = await api.post<DataResponse<ICreateBookingResponse>>('/bookings', body)
  return res.data
}

export const cancelBooking = async (body: ICancelBookingBody) => {
  const res = await api.post<MessageResponse>('/bookings/cancel', body)
  return res.data
}
