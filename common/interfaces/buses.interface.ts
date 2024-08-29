import { BusStatus } from '../enums/bus.enum'
import { IBusCompany } from './bus-companies.interface'
import { ISeat } from './seats.interface'

export interface IBus {
  id: string
  busNumber: string
  name: string
  status: BusStatus
  images: string[]
  busCompany?: IBusCompany
  seats?: ISeat[]
}
