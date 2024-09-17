import { ScheduleSortBy, ScheduleSortOrder } from '../enums/schedules.enum'
import { IBooking } from './bookings.interface'
import { IBus } from './buses.interface'
import { IRouteStop } from './route-stops.interface'
import { IRoute } from './routes.interface'

export interface IScheduleQuery {
  pickupLocation: string
  dropOffLocation: string
  departureDate: Date | undefined
}

export interface IScheduleFilterBody {
  periodDepartures?: { startTime: number; endTime: number }[]
  periodArrivals?: { startTime: number; endTime: number }[]
  companyIds?: string[]
  sortBy?: ScheduleSortBy
  sortOrder?: ScheduleSortOrder
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
