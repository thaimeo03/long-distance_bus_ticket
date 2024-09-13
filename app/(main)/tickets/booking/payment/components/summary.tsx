'use client'
import { getBookingInfo } from '@/apis/bookings.api'
import { formateTimeAndDate, formatMoney } from '@/lib/utils'
import useBookingInfoStore from '@/stores/booking.store'
import { useQuery } from '@tanstack/react-query'
import { BusFront, CalendarDays, CircleUser, MapPin, TriangleAlert } from 'lucide-react'

export default function Summary() {
  const { bookingId } = useBookingInfoStore()
  const { data } = useQuery({
    queryKey: ['booking-info', bookingId],
    queryFn: () => getBookingInfo(bookingId as string)
  })
  const bookingInfo = data?.data

  if (!bookingInfo) return null

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
                <span className='font-semibold'>{formateTimeAndDate(bookingInfo.schedule.departureTime)}</span>
              </div>
              <div className='flex flex-col'>
                <span className='text-sm'>Ghế</span>
                <ul className='flex space-x-2 font-semibold'>
                  {bookingInfo.seats.map((seat) => (
                    <li key={seat.id}>{seat.seatNumber}</li>
                  ))}
                </ul>
              </div>
            </div>
          </li>
          <li className='flex space-x-2 py-4 px-2 items-center border-b-2'>
            <MapPin className='w-5 h-5 text-primary' />
            <div className='flex w-full justify-between'>
              <div className='flex flex-col'>
                <span className='text-sm'>Điểm đón</span>
                <span className='font-semibold'>{bookingInfo.pickupStop.location}</span>
              </div>
              <div className='flex flex-col items-end'>
                <span className='text-sm'>Điểm trả</span>
                <div className='flex flex-col items-end'>
                  <span className='font-semibold'>{bookingInfo.dropOffStop.location}</span>
                </div>
              </div>
            </div>
          </li>
          <li className='flex space-x-2 py-4 px-2 items-center border-b-2'>
            <CircleUser className='w-5 h-5 text-primary' />
            <div className='flex w-full justify-between'>
              <div className='flex flex-col'>
                <span className='text-sm'>Họ và tên</span>
                <span className='font-semibold'>{bookingInfo.user.fullName}</span>
              </div>
              <div className='flex flex-col items-end'>
                <span className='text-sm'>Email</span>
                <div className='flex flex-col items-end'>
                  <span className='font-semibold'>{bookingInfo.user.email}</span>
                </div>
              </div>
            </div>
          </li>
        </ul>
        <ul className='mt-3 border p-2 rounded font-bold'>
          <li className='text-red-500'>Chi tiết giá</li>
          <li className='mt-2 flex justify-between items-center'>
            <span>Tổng cộng</span>
            <span className='text-red-500'>
              {formatMoney(Number(bookingInfo.payment.amount) * bookingInfo.quantity)}
            </span>
          </li>
        </ul>
      </div>
    </div>
  )
}
