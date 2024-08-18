'use client'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { cn } from '@/lib/utils'
import { format } from 'date-fns'
import { ArrowRightLeft, BusFront, BusIcon, CalendarIcon } from 'lucide-react'
import { useState } from 'react'

export default function BusSearch() {
  const [date, setDate] = useState<Date>()

  return (
    <div className='absolute top-1/2 left-1/2 translate-x-[-50%] -translate-y-1/2'>
      <form className='max-h-[104px] flex items-center justify-between bg-secondary rounded-3xl shadow-md'>
        <div className='relative flex items-center space-x-2 py-6 pl-4 pr-12 border-r border-r-gray-300'>
          <BusIcon className='w-8 h-8 text-muted-foreground' />
          <div className='grid w-full max-w-sm items-center'>
            <Label htmlFor='from' className='cursor-pointer text-muted-foreground'>
              Nơi đi
            </Label>
            <Input
              type='text'
              id='from'
              placeholder=''
              className='outline-none border-none w-[200px] text-lg font-semibold p-0 focus-visible:ring-0 focus-visible:ring-offset-0'
            />
          </div>

          <div className='absolute group bg-primary-foreground right-0 translate-x-[50%] rounded-full border border-gray-300 p-2.5 cursor-pointer'>
            <ArrowRightLeft className='w-5 h-5 text-muted-foreground group-hover:text-primary' />
          </div>
        </div>

        <div className='flex items-center space-x-2 py-6 pl-8 pr-12 border-r border-r-gray-300'>
          <BusFront className='w-8 h-8 text-muted-foreground' />
          <div className='grid w-full max-w-sm items-center'>
            <Label htmlFor='to' className='cursor-pointer text-muted-foreground'>
              Nơi đến
            </Label>
            <Input
              type='text'
              id='to'
              placeholder=''
              className='outline-none border-none w-[200px] text-lg font-semibold p-0 focus-visible:ring-0 focus-visible:ring-offset-0'
            />
          </div>
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
            <PopoverContent className='w-auto p-0'>
              <Calendar mode='single' fromDate={new Date()} selected={date} onSelect={setDate} initialFocus />
            </PopoverContent>
          </Popover>
        </div>

        <Button className='px-6 py-2 text-secondary h-[104px] rounded-l-none rounded-r-3xl text-lg bg-red-500 hover:bg-red-600'>
          Tìm kiếm xe khách
        </Button>
      </form>
    </div>
  )
}
