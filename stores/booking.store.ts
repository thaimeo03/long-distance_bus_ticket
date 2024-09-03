import { ICreateBookingBody } from '@/common/interfaces/bookings.interface'
import { create } from 'zustand'

interface IBookingInfo extends ICreateBookingBody {
  price: number
}

interface IBookingInfoState {
  bookingInfo: IBookingInfo
  bookingId?: string

  setBookingInfo: (info: IBookingInfoState['bookingInfo']) => void
  setBookingId: (bookingId: string) => void
}

const useBookingInfoStore = create<IBookingInfoState>((set) => ({
  bookingInfo: {
    fullName: '',
    email: '',
    age: 0,
    phoneNumber: '',
    seats: [],
    busId: '',
    scheduleId: '',
    price: 0,
    pickupStopId: '',
    dropOffStopId: ''
  },
  setBookingInfo: (info) => set({ bookingInfo: info }),
  setBookingId: (bookingId) => set({ bookingId })
}))

export default useBookingInfoStore
