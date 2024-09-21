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

export interface IProfileResponse {
  id: string
  email: string
  fullName: string
  phoneNumber: string
  age: number | null
  role: Role
  sex: Sex | null
  dateOfBirth: Date | null
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

export interface IUpdateProfileBody {
  fullName?: string
  phoneNumber?: string
  age?: number
}

export interface IUpdateRoleBody {
  role: Role
}

export interface IForgotPasswordBody {
  email: string
}

export interface IForgotPasswordResponse {
  TTL: number
}

export interface IVerifyForgotPasswordOTPBody {
  email: string
  OTP: string
}

export interface IResetPasswordBody {
  email: string
  newPassword: string
}
