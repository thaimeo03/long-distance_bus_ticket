import { IPrice } from './prices.interface'
import { ICreateRouteStopBody, IRouteStop, IRouteStopWithNextPrice } from './route-stops.interface'

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

export interface ICreateRouteDetailsBody {
  startLocation: string
  endLocation: string
  distanceKm: number
  durationHours: number
  routeStops: ICreateRouteStopBody[]
}
