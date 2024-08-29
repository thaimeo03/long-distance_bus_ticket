import { Role, Sex } from '../enums/users.enum'
import { IBooking } from './bookings.interface'

export interface IUser {
  id: string
  email: string
  phoneNumber: string
  age?: number
  isDraft: boolean
  role: Role
  sex?: Sex
  dateOfBirth?: Date
  bookings?: IBooking[]
}
