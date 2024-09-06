'use client'
import { cancelBooking } from '@/apis/bookings.api'
import { ICancelBookingBody } from '@/common/interfaces/bookings.interface'
import { ErrorResponse } from '@/common/interfaces/response.interface'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useToast } from '@/hooks/use-toast'
import { useMutation } from '@tanstack/react-query'
import { Mail, Ticket } from 'lucide-react'
import { useState } from 'react'

interface ICancelForm {
  ticketCode: string
  email: string
}

export default function Cancellation() {
  // Hooks
  const { toast } = useToast()

  // States
  const [cancelForm, setCancelForm] = useState<ICancelForm>({
    ticketCode: '',
    email: ''
  })

  // query
  const cancelBookingMutation = useMutation({
    mutationFn: (body: ICancelBookingBody) => cancelBooking(body),
    onSuccess: (data) => {
      toast({
        description: data.message,
        style: {
          backgroundColor: '#50c878',
          color: 'white'
        }
      })
    },
    onError: (error: ErrorResponse) => {
      toast({
        description: error.response?.data.message,
        variant: 'destructive'
      })
    }
  })

  // Handlers
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCancelForm({ ...cancelForm, [e.target.id]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    cancelBookingMutation.mutate(cancelForm)
  }

  return (
    <div className='h-[calc(100vh-233px)]'>
      <div className='h-full mt-10 w-full flex justify-center'>
        <form onSubmit={handleSubmit}>
          <h1 className='text-lg font-bold text-center'>Hủy vé của bạn</h1>

          <div className='mt-16 flex space-x-12 items-center'>
            <div className='flex items-center space-x-2 border-b border-b-black'>
              <Label htmlFor='ticketCode'>
                <Ticket className='w-5 h-5' />
              </Label>
              <Input
                type='text'
                id='ticketCode'
                value={cancelForm.ticketCode}
                onChange={handleChange}
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
                value={cancelForm.email}
                onChange={handleChange}
                placeholder='Nhập email mua vé'
                className='w-[328px] placeholder:text-sm placeholder:font-semibold placeholder:uppercase border-none outline-none focus-visible:ring-0 focus-visible:ring-offset-0'
              />
            </div>
          </div>

          <div className='mt-10 w-full flex justify-end'>
            <Button type='submit' variant='destructive' className='px-10'>
              Hủy vé
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
