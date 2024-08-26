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

interface IBusServiceTabsProps {
  name: React.ReactNode
  content: React.ReactNode
}

export default function BusServiceTabs() {
  const { hasSearched } = useScheduleStore()
  const [curTabIndex, setCurTabIndex] = useState<number | null>(null)

  const tabs: IBusServiceTabsProps[] = [
    {
      name: <div>Hình ảnh</div>,
      content: (
        <div className='h-60'>
          <Swiper navigation={true} modules={[Navigation]} className='mySwiper h-full'>
            <SwiperSlide>
              <img
                src='https://vielimousine.com/wp-content/uploads/2021/12/DSC6090.jpg'
                className='w-full h-full object-contain'
                alt=''
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src='https://static.vexere.com/production/images/1702527338553.jpeg'
                className='w-full h-full object-contain'
                alt=''
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src='https://votrechauffeur.ma/assets/images/blog/57005-limou.jpg'
                className='w-full h-full object-contain'
                alt=''
              />
            </SwiperSlide>
          </Swiper>
        </div>
      )
    },
    {
      name: <div>{hasSearched ? 'Điểm đón & trả khách' : 'Các điểm dừng xe'}</div>,
      content: (
        <div className='h-60 p-4 grid grid-cols-2'>
          {hasSearched ? (
            <>
              <div className='col-span-1'>
                <p className='text-lg font-bold text-gray-700 mx-2'>Điểm đón</p>
                <div className='mt-4 flex flex-col gap-3'>
                  <div className='flex space-x-4'>
                    <span className='text-sm font-bold'>05:00</span>
                    <span className='text-sm'>Sân bay Nội Bài</span>
                  </div>
                  <div className='flex space-x-4'>
                    <span className='text-sm font-bold'>05:35</span>
                    <span className='text-sm'>4 Thọ Tháp</span>
                  </div>
                  <div className='flex space-x-4'>
                    <span className='text-sm font-bold'>05:50</span>
                    <span className='text-sm'>43 Nguyễn Quốc Trí</span>
                  </div>
                </div>
              </div>
              <div className='col-span-1'>
                <p className='text-lg font-bold text-gray-700 mx-2'>Điểm trả</p>
                <div className='mt-4 flex flex-col gap-3'>
                  <div className='flex space-x-4'>
                    <span className='text-sm font-bold'>08:00</span>
                    <span className='text-sm'>08A Vincom Shophouse Thái Bình</span>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className='col-span-2'>
              <p className='text-lg font-bold text-gray-700'>Điểm dừng</p>
              <div className='mt-4 flex gap-5 flex-wrap'>
                <div className='flex space-x-4'>
                  <span className='text-sm'>Sân bay Nội Bài</span>
                </div>
                <div className='flex space-x-4'>
                  <span className='text-sm'>4 Thọ Tháp</span>
                </div>
                <div className='flex space-x-4'>
                  <span className='text-sm'>43 Nguyễn Quốc Trí</span>
                </div>
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
