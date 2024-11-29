import { IRoute } from './routes.interface'
import { ISchedule } from './schedules.interface'

export interface IRouteStop {
  id: string
  location: string
  distanceFromStartKm: number
  arrivalTime: string
  schedules?: ISchedule[]
  route?: IRoute
}

export interface IRouteStopWithNextPrice {
  id: string
  location: string
  distanceFromStartKm: number
  arrivalTime: string
  priceToNextStop: number | null
}

export interface ICreateRouteStopBody {
  location: string
  distanceFromStartKm: number
  arrivalTime: string
}
