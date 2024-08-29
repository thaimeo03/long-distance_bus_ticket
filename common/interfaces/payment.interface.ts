import { IBooking } from './bookings.interface'

export interface IPayment {
  id: string
  paymentStatus: boolean
  method: number
  amount: number
  paymentDate: Date
  booking?: IBooking
}
