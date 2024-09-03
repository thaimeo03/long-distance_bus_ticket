import { create } from 'zustand'

interface IBookingInfoState {
  bookingInfo: {
    bookingId: string
    price: number
    seats: number[]
  }

  setBookingInfo: (info: IBookingInfoState['bookingInfo']) => void
}

const useBookingInfoStore = create<IBookingInfoState>((set) => ({
  bookingInfo: {
    bookingId: '',
    price: 0,
    seats: []
  },
  setBookingInfo: (info) => set({ bookingInfo: info })
}))

export default useBookingInfoStore
