'use client'
import { cancelBooking } from '@/apis/bookings.api'
import { ICancelBookingBody, ICancelForm } from '@/common/interfaces/bookings.interface'
import { ErrorResponse } from '@/common/interfaces/response.interface'
import { ICancelBookingSchema } from '@/common/schemas/bookings.schema'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useToast } from '@/hooks/use-toast'
import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation } from '@tanstack/react-query'
import { Mail, Ticket } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

export default function Cancellation() {
  // Hooks
  const { toast } = useToast()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<ICancelBookingBody>({
    resolver: yupResolver(ICancelBookingSchema)
  })

  // Query
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
  const handleSubmitCancelForm = (data: ICancelBookingBody) => {
    cancelBookingMutation.mutate(data)
  }

  return (
    <div className='h-[calc(100vh-233px)]'>
      <div className='h-full mt-10 w-full flex justify-center'>
        <form onSubmit={handleSubmit(handleSubmitCancelForm)}>
          <h1 className='text-lg font-bold text-center'>Hủy vé của bạn</h1>

          <div className='mt-16 flex space-x-12 items-center'>
            <div className='relative flex items-center space-x-2 border-b border-b-black'>
              <Label htmlFor='ticketCode'>
                <Ticket className='w-5 h-5' />
              </Label>
              <Input
                type='text'
                id='ticketCode'
                placeholder='Nhập mã số vé'
                className='w-[328px] placeholder:text-sm placeholder:font-semibold placeholder:uppercase border-none outline-none focus-visible:ring-0 focus-visible:ring-offset-0'
                {...register('ticketCode')}
              />
              <span className='absolute text-red-600 text-xs -bottom-4'>{errors.ticketCode?.message}</span>
            </div>
            <div className='relative flex items-center space-x-2 border-b border-b-black'>
              <Label htmlFor='ticketCode'>
                <Mail className='w-5 h-5' />
              </Label>
              <Input
                type='email'
                id='email'
                placeholder='Nhập email mua vé'
                className='w-[328px] placeholder:text-sm placeholder:font-semibold placeholder:uppercase border-none outline-none focus-visible:ring-0 focus-visible:ring-offset-0'
                {...register('email')}
              />
              <span className='absolute text-red-600 text-xs -bottom-4'>{errors.email?.message}</span>
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
