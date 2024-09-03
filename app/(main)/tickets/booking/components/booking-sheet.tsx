'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { Mail, User } from 'lucide-react'
import { Seat } from './seat'
import { useRouter } from 'next/navigation'
import { ROUTES } from '@/common/constants/routes.constant'
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { ScrollArea } from '@/components/ui/scroll-area'
import { ISeat } from '@/common/interfaces/seats.interface'
import { IRouteStop } from '@/common/interfaces/route-stops.interface'
import { useEffect, useMemo, useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import { IGetPriceByRouteStopQuery } from '@/common/interfaces/prices.interface'
import { getPriceByRouteStops } from '@/apis/prices.api'
import { formatMoney } from '@/lib/utils'
import useBookingInfoStore from '@/stores/booking.store'

interface IBookingSheetProps {
  seats: ISeat[]
  routeStops: IRouteStop[]
}

export default function BookingSheet({ seats, routeStops }: IBookingSheetProps) {
  const router = useRouter()
  const { bookingInfo } = useBookingInfoStore()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Handle form submission

    // Redirect to payment page
    router.push(ROUTES.tickets_payment.path)
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className='bg-red-500 h-8 px-8'>Đặt chỗ</Button>
      </SheetTrigger>
      <SheetContent side='right' aria-describedby={undefined} className='w-[650px] sm:max-w-1/2 p-0'>
        <ScrollArea className='h-full'>
          <form onSubmit={handleSubmit} className='relative w-full mr-2 p-6'>
            <SheetTitle className='text-lg font-bold text-center'>Thông tin đặt vé</SheetTitle>

            {/* Choose seats */}
            <Seat seats={seats} />

            {/* Passenger information */}
            <PassengerInfo routeStops={routeStops} />

            {/* Contact information */}
            <div className='mt-8 p-2 border'>
              <div className='flex items-center space-x-2'>
                <div className='w-7 h-7 grid place-items-center bg-yellow-500 rounded-full'>
                  <Mail className='w-5 h-5 text-white' />
                </div>
                <span className='font-semibold'>Chi tiết liên hệ</span>
              </div>
              <div className='mt-3'>
                <div className='grid grid-cols-2 space-x-4'>
                  <div className='col-span-1'>
                    <Label htmlFor='email'>Email</Label>
                    <Input type='email' id='email' placeholder='Email' className='mt-1' />
                  </div>
                  <div className='col-span-1'>
                    <Label htmlFor='phone_number'>Số điện thoại</Label>
                    <Input type='text' id='phone_number' placeholder='Số điện thoại' className='mt-1' />
                  </div>
                </div>
              </div>
            </div>

            {/* Confirm */}
            <div className='mt-8 w-full flex justify-between'>
              <div className='mt-2 text-sm font-semibold'>
                Thành tiền:
                <span className='ml-1 text-primary'>
                  {bookingInfo.price > 0 &&
                    !Number.isNaN(bookingInfo.price) &&
                    formatMoney(bookingInfo.price * bookingInfo.seats.length)}
                </span>
              </div>
              <Button
                type='submit'
                variant='outline'
                className='text-white bg-red-500 hover:bg-primary hover:text-white px-6 self-end'
              >
                Tiếp tục
              </Button>
            </div>
          </form>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  )
}

function PassengerInfo({ routeStops }: { routeStops: IRouteStop[] }) {
  const { bookingInfo, setBookingInfo } = useBookingInfoStore()
  const [curPickupId, setCurPickupId] = useState<string>('')
  const [curDropOffId, setCurDropOffId] = useState<string>('')

  useEffect(() => {
    if (curPickupId !== '' && curDropOffId !== '') {
      getPriceByRouteStopsMutation.mutate({
        pickupStopId: curPickupId,
        dropOffStopId: curDropOffId
      })
    }
  }, [curPickupId, curDropOffId])

  const getPriceByRouteStopsMutation = useMutation({
    mutationFn: (query: IGetPriceByRouteStopQuery) => getPriceByRouteStops(query),
    onSuccess: (data) => {
      setBookingInfo({
        ...bookingInfo,
        price: data.data.price
      })
    },
    onError(error) {
      console.log(error)
    }
  })

  return (
    <div className='mt-8 p-2 border'>
      <div className='flex items-center space-x-2'>
        <div className='w-7 h-7 grid place-items-center bg-emerald-500 rounded-full'>
          <User className='w-5 h-5 text-white' />
        </div>
        <span className='font-semibold'>Thông tin hành khách và địa điểm</span>
      </div>

      <div className='mt-3 grid grid-cols-2 space-x-4'>
        <div className='col-span-1'>
          <Label htmlFor='fullName'>Họ và tên</Label>
          <Input type='text' id='fullName' placeholder='Họ và tên' className='mt-1' />
        </div>
        <div className='col-span-1'>
          <Label htmlFor='age'>Tuổi</Label>
          <Input type='number' id='age' placeholder='Tuổi' className='mt-1' />
        </div>
      </div>

      <div className='mt-3 flex justify-between'>
        <Select value={curPickupId} onValueChange={(value) => setCurPickupId(value)}>
          <SelectTrigger className='w-[250px]'>
            <SelectValue placeholder='Chọn điểm đón' />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {routeStops.map((stop, index) => (
                <SelectItem key={`pickup-${index}`} value={stop.id}>
                  {stop.location}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>

        <Select value={curDropOffId} onValueChange={(value) => setCurDropOffId(value)}>
          <SelectTrigger className='w-[250px]'>
            <SelectValue placeholder='Chọn điểm trả' />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {routeStops.map((stop, index) => (
                <SelectItem key={`drop-${index}`} value={stop.id}>
                  {stop.location}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div className='mt-3'>
        {bookingInfo.price > 0 && (
          <div className='font-semibold text-sm'>
            Giá vé:
            <span className='ml-1 text-primary'>{formatMoney(bookingInfo.price)}</span>
          </div>
        )}
      </div>
    </div>
  )
}
