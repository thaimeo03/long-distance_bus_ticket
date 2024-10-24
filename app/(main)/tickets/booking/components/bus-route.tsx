'use client'
import { useScheduleSearchForm } from '@/stores/local.store'
import useScheduleStore from '@/stores/schedule.store'
import { formatDate } from 'date-fns'
import { ArrowRight } from 'lucide-react'

export default function BusRoute() {
  const { hasSearched } = useScheduleStore()
  const { form } = useScheduleSearchForm()

  if (!hasSearched) return null

  return (
    <div className='flex space-x-2 px-6 py-4 border-b-2 items-center'>
      <span className='max-w-[150px] line-clamp-1 text-sm font-semibold'>{form.pickupLocation}</span>
      <ArrowRight className='w-4 h-4 text-foreground' />
      <span className='max-w-[150px] line-clamp-1 text-sm font-semibold'>{form.dropOffLocation}</span>
      <span className='px-2 border-l border-x border-x-foreground text-sm font-semibold'>
        {form.departureDate && formatDate(form.departureDate, 'dd/MM/yyyy')}
      </span>
    </div>
  )
}
