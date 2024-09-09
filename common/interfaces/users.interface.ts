import { Role, Sex } from '../enums/users.enum'
import { IBooking } from './bookings.interface'

export interface IRegisterBody {
  fullName: string
  email: string
  phoneNumber: string
  password: string
  confirmPassword: string
}

export interface ILoginBody {
  email: string
  password: string
}

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
