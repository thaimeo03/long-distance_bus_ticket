'use client'
import { Progress } from '@/components/ui/progress'
import { FireExtinguisher, Milk, Plug, WifiHigh } from 'lucide-react'
import BusServiceTabs from './bus-services-tab'
import useBusStore from '@/stores/schedule.store'
import BookingSheet from './booking-sheet'

export interface IScheduleItem {
  companyImage: string
  companyName: string
  busName: string
  busNumber: string
  departureInfo: IDepartureInfo[]
  arrivalInfo: IArrivalInfo
  travelTime: string
  price: string
  seatsAvailable: number
  totalSeat: number
  busImages: string[]
}

interface IDepartureInfo {
  departureTime: string
  departurePoint: string
}

interface IArrivalInfo {
  arrivalTime: string
  arrivalPoint: string
}

export default function BusList() {
  const { scheduleList } = useBusStore()

  // console.log(busList)

  return (
    <div className='mt-10 flex flex-col gap-5'>
      {new Array(5).fill(5).map((_, index) => (
        <IScheduleItem key={index} />
      ))}
    </div>
  )
}

export function IScheduleItem() {
  return (
    <div className='relative h-44 grid grid-cols-12 gap-x-2 p-2 border border-gray-300 rounded'>
      <div className='col-span-1'>
        <img
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn-isdmgvKxAEP3bZ20lGj0CrkapaBYPCG1g&s'
          alt=''
          className='w-16 max-w-full object-cover'
        />
      </div>
      <div className='col-span-2'>
        <p className='font-semibold'>Xe Việt Nam</p>
        <span className='block mt-3 text-sm text-foreground'>Limousine</span>
        <div className='mt-1 flex items-center space-x-1 text-sm'>
          <span className='font-semibold'>Biển xe:</span>
          <span className='text-sm text-foreground'>29XL-88888</span>
        </div>
        <div className='mt-5 flex space-x-1 items-center'>
          <WifiHigh className='w-5 h-5 cursor-pointer text-gray-600' />
          <Milk className='w-5 h-5 cursor-pointer text-gray-600' />
          <Plug className='w-5 h-5 cursor-pointer text-gray-600' />
          <FireExtinguisher className='w-5 h-5 cursor-pointer text-gray-600' />
        </div>
      </div>
      <div className='col-span-2'>
        <span className='text-lg font-bold'>05:00</span>
        <span className='block mt-3 text-sm text-foreground'>Sân bay Nội bài</span>
      </div>
      <div className='col-span-2'>
        <span className='text-lg font-semibold'>08:00</span>
        <span className='block mt-3 text-sm text-foreground max-w-[90%]'>08A Vincom Shophouse Thái Bình</span>
      </div>
      <div className='col-span-1'>
        <span className='text-foreground font-medium'>03g 00ph</span>
      </div>
      <div className='col-span-2'>
        <span className='text-lg font-bold text-primary'>155.000 ₫</span>
      </div>
      <div className='col-span-2'>
        <div className='mt-4'>
          <Progress value={33} className='h-2 w-28' />
          <div className='flex mt-3 items-center space-x-1'>
            <span className='font-semibold'>10/16</span>
            <span className='text-sm text-foreground'> ghế có sẵn</span>
          </div>
        </div>
      </div>

      <div className='absolute bottom-0 right-0 -translate-x-1 -translate-y-1'>
        <div className='flex items-center justify-end'>
          <BusServiceTabs />

          <BookingSheet />
        </div>
      </div>
    </div>
  )
}
