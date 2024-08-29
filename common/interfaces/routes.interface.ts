import { IPrice } from './prices.interface'
import { IRouteStop } from './route-stops.interface'

export interface IRoute {
  id: string
  startLocation: string
  endLocation: string
  distanceKm: number
  durationHours: number
  routeStops: IRouteStop[]
  prices: IPrice[]
}
