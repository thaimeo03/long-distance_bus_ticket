'use client'
import useBookingInfoStore from '@/stores/booking.store'
import { BusFront, CalendarDays, CircleUser, MapPin, TriangleAlert } from 'lucide-react'

export default function Summary() {
  const { bookingId } = useBookingInfoStore()

  return (
    <div className='w-2/3'>
      <h1 className='text-xl font-semibold'>Thông tin vé đặt</h1>

      <div className='mt-3 border shadow-md p-2 rounded'>
        <div className='flex items-center space-x-1 bg-yellow-100 p-1 select-none rounded'>
          <TriangleAlert className='w-6 h-6 text-yellow-500' />
          <p className='text-yellow-600'>Vui lòng thanh toán trong vòng 10 phút trước khi hết hiệu lực</p>
        </div>

        <ul className='mt-3 border p-2 rounded'>
          <li className='flex space-x-2 py-4 px-2 items-center border-b-2 justify-center'>
            <BusFront className='w-8 h-8 text-gray-700' />
            <div className='text-lg font-bold text-primary'>Xe Việt Nam</div>
          </li>
          <li className='flex space-x-2 py-4 px-2 items-center border-b-2'>
            <CalendarDays className='w-5 h-5 text-primary' />
            <div className='flex w-full justify-between'>
              <div className='flex flex-col'>
                <span className='text-sm'>Khởi hành</span>
                <span className='font-semibold'>22/08/2024</span>
              </div>
              <div className='flex flex-col'>
                <span className='text-sm'>Ghế</span>
                <ul className='flex space-x-3 font-semibold'>
                  <li>2</li>
                  <li>7</li>
                </ul>
              </div>
            </div>
          </li>
          <li className='flex space-x-2 py-4 px-2 items-center border-b-2'>
            <MapPin className='w-5 h-5 text-primary' />
            <div className='flex w-full justify-between'>
              <div className='flex flex-col'>
                <span className='text-sm'>Điểm đón</span>
                <span className='font-semibold'>Hà Nội</span>
                <span className='text-sm text-gray-600'>BigC Hà Đông</span>
              </div>
              <div className='flex flex-col items-end'>
                <span className='text-sm'>Điểm trả</span>
                <div className='flex flex-col items-end'>
                  <span className='font-semibold'>Thái Bình</span>
                  <span>08A Vincom Shophouse Thái Bình</span>
                </div>
              </div>
            </div>
          </li>
          <li className='flex space-x-2 py-4 px-2 items-center border-b-2'>
            <CircleUser className='w-5 h-5 text-primary' />
            <div className='flex w-full justify-between'>
              <div className='flex flex-col'>
                <span className='text-sm'>Họ tên</span>
                <span className='font-semibold'>Trần Hồng Thái</span>
              </div>
              <div className='flex flex-col items-end'>
                <span className='text-sm'>Email</span>
                <div className='flex flex-col items-end'>
                  <span className='font-semibold'>thai@example.com</span>
                </div>
              </div>
            </div>
          </li>
        </ul>
        <ul className='mt-3 border p-2 rounded font-bold'>
          <li className='text-red-500'>Chi tiết giá</li>
          <li className='mt-2 flex justify-between items-center'>
            <span>Tổng cộng</span>
            <span className='text-red-500'>155.000đ</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
