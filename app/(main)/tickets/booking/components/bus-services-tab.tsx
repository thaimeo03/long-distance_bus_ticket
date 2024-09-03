'use client'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import React, { useState } from 'react'
import { twMerge } from 'tailwind-merge'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
// import required modules
import { Navigation } from 'swiper/modules'
import useScheduleStore from '@/stores/schedule.store'
import { IBus } from '@/common/interfaces/buses.interface'
import { IRouteStop } from '@/common/interfaces/route-stops.interface'
import { formatTime } from '@/lib/utils'

interface IBusServiceTabsProps {
  name: React.ReactNode
  content: React.ReactNode
}

interface IBusServiceTabs {
  bus: IBus
  routeStops: IRouteStop[]
}

export default function BusServiceTabs({ bus, routeStops }: IBusServiceTabs) {
  const { hasSearched } = useScheduleStore()
  const [curTabIndex, setCurTabIndex] = useState<number | null>(null)

  const tabs: IBusServiceTabsProps[] = [
    {
      name: <div>Hình ảnh</div>,
      content: (
        <div className='h-60'>
          <Swiper navigation={true} modules={[Navigation]} className='mySwiper h-full'>
            {bus.images.map((item, index) => (
              <SwiperSlide key={index}>
                <img src={item} className='w-full h-full object-contain' alt={bus.name} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )
    },
    {
      name: <div>{hasSearched ? 'Điểm đón & trả khách' : 'Các điểm dừng xe'}</div>,
      content: (
        <div className='h-60 p-4 grid grid-cols-2'>
          {hasSearched && (
            <div className='col-span-2'>
              <p className='text-lg font-bold text-gray-700'>Các điểm đón - trả khách</p>
              <div className='mt-4 flex gap-5 flex-wrap'>
                {routeStops.map((stop, index) => (
                  <div className='flex space-x-4' key={index}>
                    <span className='text-sm font-bold'>{formatTime(stop.arrivalTime)}</span>
                    <span className='text-sm'>{stop.location}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )
    }
  ]

  return (
    <div className='flex'>
      {tabs.map((item, index) => (
        <Popover key={index} onOpenChange={(open) => setCurTabIndex(open ? index : null)}>
          <PopoverTrigger
            onClick={() => setCurTabIndex(index)}
            className={twMerge(
              'px-6 border-r border-primary hover:text-primary',
              index === tabs.length - 1 ? 'border-r-0' : '',
              curTabIndex === index ? 'text-primary' : ''
            )}
          >
            {item.name}
          </PopoverTrigger>
          <PopoverContent className='w-[720px] -translate-x-1/4'>{item.content}</PopoverContent>
        </Popover>
      ))}
    </div>
  )
}
