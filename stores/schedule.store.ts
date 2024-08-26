import { IScheduleItem } from '@/app/(main)/tickets/booking/components/schedule-list'
import { create } from 'zustand'

interface IScheduleState {
  hasSearched: boolean
  scheduleList: IScheduleItem[] | null
  setScheduleList: (scheduleList: IScheduleItem[]) => void
}

const useScheduleStore = create<IScheduleState>((set) => ({
  hasSearched: true,
  scheduleList: null,
  setScheduleList: (scheduleList: IScheduleItem[]) => set({ scheduleList })
}))

export default useScheduleStore
