import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { FireExtinguisher, Milk, Plug, WifiHigh } from 'lucide-react'
import BusServiceTabs from './bus-services-tab'

export default function BusList() {
  return (
    <div className='mt-10 flex flex-col gap-5'>
      {new Array(5).fill(5).map((_, index) => (
        <BusItem key={index} />
      ))}
    </div>
  )
}

interface IBusItem {}

export function BusItem() {
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
            <span className='font-semibold'>10</span>
            <span className='text-sm text-foreground'> ghế có sẵn</span>
          </div>
        </div>
      </div>

      <div className='absolute bottom-0 right-0 -translate-x-1 -translate-y-1'>
        <div className='flex items-center justify-end'>
          <BusServiceTabs />

          <Button className='bg-red-500 h-8 px-8'>Đặt chỗ</Button>
        </div>
      </div>
    </div>
  )
}
