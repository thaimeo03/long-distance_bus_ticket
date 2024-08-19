'use client'
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { useState } from 'react'
import { twMerge } from 'tailwind-merge'

const sortBy = ['Thời gian đến', 'Thời gian đi', 'Giá vé', 'Chỗ trống']

export default function SortSide() {
  const [curSortBy, setCurSortBy] = useState(sortBy[0])

  return (
    <div className='flex items-center'>
      <p className='text-sm font-semibold'>
        29 tìm thấy
        <span className='text-sm font-normal ml-1'>xe khách</span>
      </p>

      <div className='ml-20 flex items-center'>
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
