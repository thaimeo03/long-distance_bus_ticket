'use client'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { cn } from '@/lib/utils'
import { format } from 'date-fns'
import { ArrowRightLeft, BusFront, BusIcon, CalendarIcon } from 'lucide-react'
import { useRef, useState } from 'react'
import SearchInput from './search-input'
import useOutSideClick from '@/hooks/useOutSideClick'
import { useQuery } from '@tanstack/react-query'
import { getAllRouteStops } from '@/apis/route-stops.api'
import { IScheduleQuery } from '@/common/interfaces/schedules.interface'
import useScheduleStore from '@/stores/schedule.store'
import { useRouter } from 'next/navigation'
import { useScheduleSearchForm } from '@/stores/local.store'
import { ROUTES } from '@/common/constants/routes.constant'

export interface IForm {
  from: string
  to: string
}

export default function BusSearch({ children }: { children: React.ReactNode }) {
  // Initialize
  const router = useRouter()
  const { setScheduleSearch, scheduleSearch } = useScheduleStore()
  const { setForm: setScheduleSearchForm } = useScheduleSearchForm()

  // Handle outside click
  const wrapperRef = useRef(null)
  const calendarRef = useRef(null)
  useOutSideClick(wrapperRef, [calendarRef])

  // States
  const [form, setForm] = useState<IForm>({
    from: '',
    to: ''
  })
  const [date, setDate] = useState<Date>()

  // Queries
  const { data: routeStops } = useQuery({
    queryKey: ['route-stops'],
    queryFn: () => getAllRouteStops()
  })

  const locations = routeStops?.data.map((stop) => stop.location) || []

  // function handler
  const handleExchange = () => {
    setForm((prev) => ({ ...prev, from: form.to, to: form.from }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Handle form submission
    const query: IScheduleQuery = {
      pickupLocation: form.from,
      dropOffLocation: form.to,
      departureDate: date
    }

    setScheduleSearchForm(query)
    setScheduleSearch({ query, body: scheduleSearch?.body })

    router.push(ROUTES.tickets_booking.path)
  }

  return (
    <div ref={wrapperRef} className='absolute z-10 top-1/2 left-1/2 translate-x-[-50%] -translate-y-1/2'>
      <form
        onSubmit={handleSubmit}
        className='max-h-[104px] flex items-center justify-between bg-white rounded-3xl shadow-md'
      >
        <div className='relative flex items-center space-x-2 py-6 pl-4 pr-12 border-r border-r-gray-300'>
          <BusIcon className='w-8 h-8 text-muted-foreground' />
          <SearchInput label='Nơi đi' id='from' value={form.from} setForm={setForm} data={locations} />

          <div
            onClick={handleExchange}
            className='absolute group bg-primary-foreground right-0 translate-x-[50%] rounded-full border border-gray-300 p-2.5 cursor-pointer'
          >
            <ArrowRightLeft className='w-5 h-5 text-muted-foreground group-hover:text-primary' />
          </div>
        </div>

        <div className='flex items-center space-x-2 py-6 pl-8 pr-12 border-r border-r-gray-300'>
          <BusFront className='w-8 h-8 text-muted-foreground' />
          <SearchInput label='Nơi đến' id='to' value={form.to} setForm={setForm} data={locations} />
        </div>

        <div className='flex items-center space-x-2 p-3'>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={'outline'}
                className={cn(
                  'w-[200px] justify-start text-left font-normal border-none',
                  !date && 'text-muted-foreground'
                )}
              >
                <CalendarIcon className='mr-2 h-6 w-6' />
                {date ? format(date, 'dd/MM/yyyy') : <span>Ngày xuất phát</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className='w-auto p-0' ref={calendarRef}>
              <Calendar mode='single' fromDate={new Date()} selected={date} onSelect={setDate} initialFocus />
            </PopoverContent>
          </Popover>
        </div>

        {children}
      </form>
    </div>
  )
}
