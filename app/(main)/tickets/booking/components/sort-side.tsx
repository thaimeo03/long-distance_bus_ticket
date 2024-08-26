'use client'
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { useState } from 'react'
import { twMerge } from 'tailwind-merge'
import BusSearch from './bus-search'
import useScheduleStore from '@/stores/schedule.store'

const sortBy = ['Thời gian đến', 'Thời gian đi', 'Giá vé', 'Chỗ trống']

export default function SortSide() {
  const { hasSearched } = useScheduleStore()
  const [curSortBy, setCurSortBy] = useState(sortBy[0])

  return (
    <div className='flex items-center'>
      <BusSearch />

      {hasSearched ? (
        <p className='text-sm font-semibold'>
          0 tìm thấy
          <span className='text-sm font-normal ml-1'>xe khách</span>
        </p>
      ) : (
        <span className='text-xs font-normal italic text-primary w-60'>
          Vui lòng chọn tìm kiếm xe để chúng tôi giúp bạn chọn lịch trình đơn giản hơn
        </span>
      )}

      <div className='flex items-center ml-auto'>
        <p className='text-sm font-semibold'>Sắp xếp theo:</p>
        <div className='flex items-center space-x-2 ml-4'>
          {sortBy.map((item, index) => (
            <Button
              key={index}
              variant='outline'
              onClick={() => setCurSortBy(item)}
              className={twMerge(
                'h-6 font-normal border border-primary hover:bg-primary hover:text-primary-foreground',
                curSortBy === item && 'bg-primary text-primary-foreground'
              )}
            >
              {item}
            </Button>
          ))}
        </div>
      </div>

      <div className='ml-8'>
        <Select defaultValue='desc'>
          <SelectTrigger className='w-[120px] h-6'>
            <SelectValue placeholder='Sắp xếp' />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value='desc'>Giảm dần</SelectItem>
              <SelectItem value='asc'>Tăng dần</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}
