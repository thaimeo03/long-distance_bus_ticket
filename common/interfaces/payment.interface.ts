import { PaymentMethod } from '../enums/payment.enum'
import { IBooking } from './bookings.interface'

export interface IProcessPaymentQuery {
  method: PaymentMethod
  bookingId: string
}

export interface IProcessPaymentResponse {
  url: string
}

export interface IPayment {
  id: string
  paymentStatus: boolean
  method: number
  amount: number
  paymentDate: Date
  booking?: IBooking
}
