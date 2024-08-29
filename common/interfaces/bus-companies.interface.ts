import { IBus } from './buses.interface'

export interface IBusCompany {
  id: string
  name: string
  mainImage: string
  bus?: IBus[]
}
