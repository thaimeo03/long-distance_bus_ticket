import { IRouteStop } from './route-stops.interface'
import { IRoute } from './routes.interface'

export interface IGetPriceByRouteStopQuery {
  pickupStopId: string
  dropOffStopId: string
}

export interface IPrice {
  id: string
  price: number
  route?: IRoute
  startStop?: IRouteStop
  endStop?: IRouteStop
}
