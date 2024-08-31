import { IAvailableScheduleResponse } from '@/common/interfaces/schedules.interface'
import { create } from 'zustand'

interface IScheduleState {
  hasSearched: boolean
  scheduleList: IAvailableScheduleResponse[] | null
  setHasSearched: (hasSearched: boolean) => void
  setScheduleList: (scheduleList: IAvailableScheduleResponse[]) => void
}

const useScheduleStore = create<IScheduleState>((set) => ({
  hasSearched: false,
  scheduleList: null,
  setHasSearched: (hasSearched: boolean) => set({ hasSearched }),
  setScheduleList: (scheduleList: IAvailableScheduleResponse[]) => set({ scheduleList })
}))

export default useScheduleStore
