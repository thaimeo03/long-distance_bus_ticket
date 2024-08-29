import { IBooking } from './bookings.interface'
import { IBus } from './buses.interface'

export interface ISeat {
  id: string
  seatNumber: number
  isAvailable: boolean
  bus?: IBus
  booking: IBooking
}
