'use client'
import { Button } from '@/components/ui/button'
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
        {formatDate(form.departureDate, 'dd/MM/yyyy')}
      </span>
      <Button
        variant='outline'
        className='max-h-8 py-0 px-8 bg-red-500 text-primary-foreground hover:bg-red-600 hover:text-primary-foreground'
      >
        Thay đổi
      </Button>
    </div>
  )
}
