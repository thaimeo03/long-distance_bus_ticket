'use client'
import { forgotPassword } from '@/apis/users.api'
import { ROUTES } from '@/common/constants/routes.constant'
import { ErrorResponse } from '@/common/interfaces/response.interface'
import { IForgotPasswordBody } from '@/common/interfaces/users.interface'
import { IForgotPasswordSchema } from '@/common/schemas/users.schema'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useToast } from '@/hooks/use-toast'
import useUserStore from '@/stores/user.store'
import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation } from '@tanstack/react-query'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'

export default function ForgotPassword() {
  // Hooks
  const router = useRouter()
  const { toast } = useToast()
  const { setForgotPasswordTTL, setEmail } = useUserStore()

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<IForgotPasswordBody>({
    resolver: yupResolver(IForgotPasswordSchema)
  })

  const forgotPasswordMutation = useMutation({
    mutationFn: (body: IForgotPasswordBody) => forgotPassword(body),
    onSuccess: (data) => {
      setEmail(watch('email'))
      setForgotPasswordTTL(data.data.TTL)
      router.push(ROUTES.forgot_password_otp.path)
    },
    onError: (error: ErrorResponse) => {
      console.log(error)
      toast({
        title: (error.response?.data.message as string) || error.message,
        variant: 'destructive'
      })
    }
  })

  // Handlers
  const handleSubmitForm = (data: IForgotPasswordBody) => {
    forgotPasswordMutation.mutate(data)
  }

  return (
    <div className='w-full h-screen grid place-items-center'>
      <Card className='w-[350px]'>
        <CardHeader>
          <CardTitle>Quên mật khẩu</CardTitle>
          <CardDescription>Nhập email để lấy mã OTP</CardDescription>
        </CardHeader>
        <CardContent className='pb-2'>
          <form onSubmit={handleSubmit(handleSubmitForm)}>
            <div className='grid w-full items-center gap-4'>
              <div className='relative flex flex-col space-y-1.5'>
                <Label htmlFor='email'>Email</Label>
                <Input id='email' type='text' placeholder='thaimeo@gmail.com' {...register('email')} />
                <span className='absolute -bottom-4 text-xs text-red-600'>{errors.email?.message}</span>
              </div>
            </div>
            <Button className='w-full mt-6'>Lấy mã OTP</Button>
          </form>
        </CardContent>
        <CardFooter className='w-full flex justify-between mt-1'>
          <Link href={ROUTES.login.path} className='text-sm underline hover:text-red-500'>
            Quay lại
          </Link>
          <div className='text-sm font-semibold underline hover:text-red-500 cursor-pointer'>Gửi lại mã</div>
        </CardFooter>
      </Card>
    </div>
  )
}
