import { IBusItem } from '@/app/(main)/tickets/booking/components/bus-list'
import { create } from 'zustand'

interface BusState {
  busList: IBusItem[] | null
  setBusList: (busList: IBusItem[]) => void
}

const useBusStore = create<BusState>((set) => ({
  busList: null,
  setBusList: (busList: IBusItem[]) => set({ busList })
}))

export default useBusStore
