import { IScheduleQuery } from '@/common/interfaces/schedules.interface'
import { create } from 'zustand'

interface ScheduleSearchFormState {
  form: IScheduleQuery
  setForm: (form: IScheduleQuery) => void
}

export const useScheduleSearchForm = create<ScheduleSearchFormState>((set) => ({
  form: {
    pickupLocation: '',
    dropOffLocation: '',
    departureDate: new Date()
  },
  setForm: (form: IScheduleQuery) => set({ form })
}))
