import { IBooking } from './bookings.interface'
import { IBus } from './buses.interface'
import { IRouteStop } from './route-stops.interface'
import { IRoute } from './routes.interface'

export interface IScheduleQuery {
  pickupLocation: string
  dropOffLocation: string
  departureDate: Date
}

export interface ISchedule {
  id: string
  departureTime: Date
  routeStop: IRouteStop
  bookings?: IBooking
}

export interface IAvailableScheduleResponse {
  bus: IBus
  route: IRoute
  schedules: { id: string; departureTime: Date }[]
}
