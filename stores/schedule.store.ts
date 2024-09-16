import {
  IAvailableScheduleResponse,
  IScheduleFilterBody,
  IScheduleQuery
} from '@/common/interfaces/schedules.interface'
import { create } from 'zustand'

interface IScheduleState {
  hasSearched: boolean
  scheduleList: IAvailableScheduleResponse[] | null
  scheduleSearch: { query: IScheduleQuery; body?: IScheduleFilterBody } | null

  setHasSearched: (hasSearched: boolean) => void
  setScheduleList: (scheduleList: IAvailableScheduleResponse[]) => void
  setScheduleSearch: (scheduleSearch: { query: IScheduleQuery; body?: IScheduleFilterBody } | null) => void
}

const useScheduleStore = create<IScheduleState>((set) => ({
  hasSearched: false,
  scheduleList: null,
  scheduleSearch: null,

  setHasSearched: (hasSearched: boolean) => set({ hasSearched }),
  setScheduleList: (scheduleList: IAvailableScheduleResponse[]) => set({ scheduleList }),
  setScheduleSearch: (scheduleSearch: { query: IScheduleQuery; body?: IScheduleFilterBody } | null) =>
    set({ scheduleSearch })
}))

export default useScheduleStore
