import { IPrice } from './prices.interface'
import { IRouteStop, IRouteStopWithNextPrice } from './route-stops.interface'

export interface IRoute {
  id: string
  startLocation: string
  endLocation: string
  distanceKm: number
  durationHours: number
  routeStops: IRouteStop[]
  prices: IPrice[]
}

export interface IRouteDetails extends Omit<IRoute, 'routeStops' | 'prices'> {
  routeStops: IRouteStopWithNextPrice[]
}
