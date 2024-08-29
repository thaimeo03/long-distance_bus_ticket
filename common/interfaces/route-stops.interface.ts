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
