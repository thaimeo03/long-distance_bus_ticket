'use client'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { ROUTES } from '@/common/constants/routes.constant'
import { useForm } from 'react-hook-form'
import { IRegisterBody } from '@/common/interfaces/users.interface'
import { yupResolver } from '@hookform/resolvers/yup'
import { IRegisterSchema } from '@/common/schemas/users.schema'
import { useMutation } from '@tanstack/react-query'
import { registerUser } from '@/apis/users.api'
import { useToast } from '@/hooks/use-toast'
import { ErrorResponse } from '@/common/interfaces/response.interface'
import Spinner from '@/components/spinner'
import { useRouter } from 'next/navigation'

export default function Register() {
  // Hooks
  const { toast } = useToast()
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<IRegisterBody>({
    resolver: yupResolver(IRegisterSchema)
  })

  // Queries
  const registerMutation = useMutation({
    mutationFn: (body: IRegisterBody) => registerUser(body),
    onSuccess: () => {
      router.push(ROUTES.home.path)
    },
    onError: (error: ErrorResponse) => {
      toast({
        title: (error.response?.data?.message as string) || error.message,
        variant: 'destructive'
      })
    }
  })

  const handleLoginForm = (data: IRegisterBody) => {
    registerMutation.mutate(data)
  }

  return (
    <div>
      <div className='grid gap-2 text-center'>
        <h1 className='text-3xl font-bold'>Đăng ký</h1>
      </div>
      <form onSubmit={handleSubmit(handleLoginForm)} className='grid gap-6 mt-3'>
        <div className='relative grid gap-2'>
          <Label htmlFor='full_name'>Họ và tên</Label>
          <Input id='full_name' type='text' placeholder='Tran Hong Thai' {...register('fullName')} />
          <span className='absolute -bottom-4 text-xs text-red-600'>{errors.fullName?.message}</span>
        </div>
        <div className='relative grid gap-2'>
          <Label htmlFor='phoneNumber'>Số điện thoại</Label>
          <Input id='phoneNumber' type='text' placeholder='0987654321' {...register('phoneNumber')} />
          <span className='absolute -bottom-4 text-xs text-red-600'>{errors.phoneNumber?.message}</span>
        </div>
        <div className='relative grid gap-2'>
          <Label htmlFor='email'>Email</Label>
          <Input id='email' type='text' placeholder='m@example.com' {...register('email')} />
          <span className='absolute -bottom-4 text-xs text-red-600'>{errors.email?.message}</span>
        </div>
        <div className='relative grid gap-2'>
          <div className='flex items-center'>
            <Label htmlFor='password'>Mật khẩu</Label>
            <span className='absolute -bottom-4 text-xs text-red-600'>{errors.password?.message}</span>
          </div>
          <Input id='password' type='password' {...register('password')} />
        </div>
        <div className='relative grid gap-2'>
          <div className='flex items-center'>
            <Label htmlFor='confirm_password'>Xác nhận mật khẩu</Label>
            <span className='absolute -bottom-4 text-xs text-red-600'>{errors.confirmPassword?.message}</span>
          </div>
          <Input id='confirm_password' type='password' {...register('confirmPassword')} />
        </div>

        <Button type='submit' disabled={registerMutation.isPending} className='w-full'>
          {registerMutation.isPending && <Spinner className='mr-1' />}
          Đăng ký
        </Button>
      </form>
      <div className='mt-4 text-center text-sm'>
        Đã có tài khoản?{' '}
        <Link href={ROUTES.login.path} className='underline'>
          Đăng nhập
        </Link>
      </div>
    </div>
  )
}
