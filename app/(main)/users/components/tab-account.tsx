'use client'
import { updateProfile } from '@/apis/users.api'
import { ErrorResponse } from '@/common/interfaces/response.interface'
import { IUpdateProfileBody } from '@/common/interfaces/users.interface'
import { IUpdateProfileSchema } from '@/common/schemas/users.schema'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useToast } from '@/hooks/use-toast'
import useBookingInfoStore from '@/stores/booking.store'
import useUserStore from '@/stores/user.store'
import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'

export default function TabAccount() {
  // Hooks
  const { toast } = useToast()
  const { userInfo } = useUserStore()
  const { bookingInfo, setBookingInfo } = useBookingInfoStore()

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<IUpdateProfileBody>({
    resolver: yupResolver(IUpdateProfileSchema),
    defaultValues: {
      fullName: userInfo?.fullName || '',
      phoneNumber: userInfo?.phoneNumber || '',
      age: userInfo?.age || 0
    }
  })

  // Queries
  const updateProfileMutation = useMutation({
    mutationFn: (body: IUpdateProfileBody) => updateProfile(body),
    onSuccess: (data) => {
      setBookingInfo({
        ...bookingInfo,
        fullName: watch('fullName') as string,
        age: watch('age') as number,
        phoneNumber: watch('phoneNumber') as string
      })

      toast({
        title: 'Cập nhật thành công'
      })
    },
    onError: (error: ErrorResponse) => {
      toast({
        title: (error.response?.data?.message as string) || error.message,
        variant: 'destructive'
      })
    }
  })

  // Handlers
  const handleSubmitForm = (data: IUpdateProfileBody) => {
    updateProfileMutation.mutate(data)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Thông tin tài khoản</CardTitle>
        <CardDescription>Thay đổi thông tin tài khoản ở đây. Ấn lưu nếu bạn có cập nhật.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(handleSubmitForm)} className='space-y-4'>
          <div className='flex space-x-4'>
            <div className='relative'>
              <Label htmlFor='full_name'>Họ và tên</Label>
              <Input id='full_name' {...register('fullName')} placeholder='Tran Hong Thai' className='w-[450px]' />
              <span className='absolute -bottom-4 text-xs text-red-600'>{errors.fullName?.message}</span>
            </div>
            <div className='relative'>
              <Label htmlFor='age'>Tuổi</Label>
              <Input id='age' {...register('age')} type='number' className='w-[150px]' />
              <span className='absolute -bottom-4 text-xs text-red-600 line-clamp-1'>{errors.age?.message}</span>
            </div>
          </div>
          <div className='flex space-x-4'>
            <div>
              <Label htmlFor='email'>Email</Label>
              <Input
                id='email'
                readOnly
                defaultValue={userInfo?.email}
                placeholder='m@example.com'
                className='w-[450px]'
              />
            </div>
            <div className='relative'>
              <Label htmlFor='phoneNumber'>Số điện thoại</Label>
              <Input id='phoneNumber' {...register('phoneNumber')} placeholder='0123456789' className='w-[250px]' />
              <span className='absolute -bottom-9 text-xs text-red-600'>{errors.phoneNumber?.message}</span>
            </div>
          </div>
          <Button type='submit' disabled={updateProfileMutation.isPending}>
            Cập nhật
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
