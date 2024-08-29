import { IAvailableScheduleResponse } from '@/common/interfaces/schedules.interface'
import { create } from 'zustand'

interface IScheduleState {
  hasSearched: boolean
  scheduleList: IAvailableScheduleResponse[] | null
  setScheduleList: (scheduleList: IAvailableScheduleResponse[]) => void
}

const useScheduleStore = create<IScheduleState>((set) => ({
  hasSearched: false,
  scheduleList: null,
  setScheduleList: (scheduleList: IAvailableScheduleResponse[]) => set({ scheduleList })
}))

export default useScheduleStore
