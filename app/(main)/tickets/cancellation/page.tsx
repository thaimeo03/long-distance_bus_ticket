import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Mail, Ticket } from 'lucide-react'

export default function Cancellation() {
  return (
    <div className='h-[calc(100vh-233px)]'>
      <div className='h-full mt-10 w-full flex justify-center'>
        <form>
          <h1 className='text-lg font-bold text-center'>Hủy vé của bạn</h1>

          <div className='mt-16 flex space-x-12 items-center'>
            <div className='flex items-center space-x-2 border-b border-b-black'>
              <Label htmlFor='ticketCode'>
                <Ticket className='w-5 h-5' />
              </Label>
              <Input
                type='text'
                id='ticketCode'
                placeholder='Nhập mã số vé'
                className='w-[328px] placeholder:text-sm placeholder:font-semibold placeholder:uppercase border-none outline-none focus-visible:ring-0 focus-visible:ring-offset-0'
              />
            </div>
            <div className='flex items-center space-x-2 border-b border-b-black'>
              <Label htmlFor='ticketCode'>
                <Mail className='w-5 h-5' />
              </Label>
              <Input
                type='email'
                id='email'
                placeholder='Nhập email mua vé'
                className='w-[328px] placeholder:text-sm placeholder:font-semibold placeholder:uppercase border-none outline-none focus-visible:ring-0 focus-visible:ring-offset-0'
              />
            </div>
          </div>

          <div className='mt-10 w-full flex justify-end'>
            <Button variant='destructive' className='px-10'>
              Hủy vé
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
