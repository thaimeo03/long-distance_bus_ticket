import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { Mail, User } from 'lucide-react'
import { Seat } from './seat'

export default function BookingSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className='bg-red-500 h-8 px-8'>Đặt chỗ</Button>
      </SheetTrigger>
      <SheetContent side='right' aria-describedby={undefined} className='w-[650px] sm:max-w-1/2'>
        <form className='relative w-full h-full'>
          <SheetTitle className='text-lg font-bold text-center'>Thông tin đặt vé</SheetTitle>

          {/* Choose seats */}
          <Seat />

          {/* Passenger information */}
          <div className='mt-8 p-2 border'>
            <div className='flex items-center space-x-2'>
              <div className='w-7 h-7 grid place-items-center bg-emerald-500 rounded-full'>
                <User className='w-5 h-5 text-white' />
              </div>
              <span className='font-semibold'>Thông tin hành khách</span>
            </div>
            <div className='mt-3'>
              <div className='grid grid-cols-2 space-x-4'>
                <div className='col-span-1'>
                  <Label htmlFor='fullName'>Họ và tên</Label>
                  <Input type='text' id='fullName' placeholder='Họ và tên' className='mt-1' />
                </div>
                <div className='col-span-1'>
                  <Label htmlFor='age'>Tuổi</Label>
                  <Input type='number' id='age' placeholder='Tuổi' className='mt-1' />
                </div>
              </div>
            </div>
          </div>

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
          <Button
            variant='outline'
            className='absolute bottom-0 right-0 -translate-y-5 text-white bg-red-500 hover:bg-primary hover:text-white px-6 self-end'
          >
            Tiếp tục
          </Button>
        </form>
      </SheetContent>
    </Sheet>
  )
}
