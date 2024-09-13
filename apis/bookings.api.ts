import api from './api'
import { DataResponse, MessageResponse } from '@/common/interfaces/response.interface'
import {
  IBookingHistoryResponse,
  IBookingInfoResponse,
  ICancelBookingBody,
  ICreateBookingBody,
  ICreateBookingResponse
} from '@/common/interfaces/bookings.interface'

export const createBooking = async (body: ICreateBookingBody) => {
  const res = await api.post<DataResponse<ICreateBookingResponse>>('/bookings', body)
  return res.data
}

export const cancelBooking = async (body: ICancelBookingBody) => {
  const res = await api.post<MessageResponse>('/bookings/cancel', body)
  return res.data
}

export const getBookingHistory = async () => {
  const res = await api.get<DataResponse<IBookingHistoryResponse[]>>('/bookings/history')
  return res.data
}

export const getBookingInfo = async (bookingId: string) => {
  const res = await api.get<DataResponse<IBookingInfoResponse>>(`/bookings/${bookingId}`)
  return res.data
}
