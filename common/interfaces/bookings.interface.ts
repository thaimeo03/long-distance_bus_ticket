import { IPayment } from './payment.interface'
import { IRouteStop } from './route-stops.interface'
import { ISchedule } from './schedules.interface'
import { ISeat } from './seats.interface'
import { IUser } from './users.interface'

export interface ICancelBookingBody {
  ticketCode: string
  email: string
}

export interface ICreateBookingBody {
  fullName: string
  email: string
  age: number
  phoneNumber: string
  seats: number[]
  busId: string
  scheduleId: string
  pickupStopId: string
  dropOffStopId: string
}

export interface ICreateBookingResponse {
  bookingId: string
  quantity: number
}

export interface IBooking {
  id: string
  bookingStatus: boolean
  quantity: number
  bookingDate: Date
  user?: IUser
  schedule?: ISchedule
  seats?: ISeat[]
  payment?: IPayment
  pickupStop?: IRouteStop
  dropOffStop?: IRouteStop
}

export interface IBookingHistoryResponse {
  code: string
  quantity: number
  amount: string
  paymentStatus: boolean
  seats: number[]
  pickupLocation: string
  dropOffLocation: string
  departureTime: string
  busName: string
  bookingDate: string
}

export interface IBookingInfoResponse {
  id: string
  quantity: number
  seats: Array<{
    id: string
    seatNumber: number
    isAvailable: boolean
  }>
  schedule: {
    departureTime: string
  }
  user: {
    email: string
    fullName: string
    phoneNumber: string
    age: number
  }
  payment: {
    amount: string
  }
  pickupStop: {
    location: string
  }
  dropOffStop: {
    location: string
  }
}
