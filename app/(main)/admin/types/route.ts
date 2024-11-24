export interface RouteStop {
  location: string
  datetime: string
  priceToNextStop?: number
  distanceFromStartKm?: number
}

export interface Route {
  id: string
  startLocation: string
  endLocation: string
  distanceKm: number
  durationHours: number
  stops: RouteStop[]
}
