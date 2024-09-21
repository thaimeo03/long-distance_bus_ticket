'use client'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { ROUTES } from '@/common/constants/routes.constant'
import { useToast } from '@/hooks/use-toast'
import useUserStore from '@/stores/user.store'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { IResetPasswordBody } from '@/common/interfaces/users.interface'
import { yupResolver } from '@hookform/resolvers/yup'
import { IResetPasswordSchema } from '@/common/schemas/users.schema'
import { useMutation } from '@tanstack/react-query'
import { resetPassword } from '@/apis/users.api'
import { ErrorResponse } from '@/common/interfaces/response.interface'

export default function Reset() {
  // Hooks
  const router = useRouter()
  const { toast } = useToast()
  const { forgotPasswordTTL, setForgotPasswordTTL, email, setEmail } = useUserStore()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(IResetPasswordSchema)
  })

  const resetPasswordMutation = useMutation({
    mutationFn: (body: IResetPasswordBody) => resetPassword(body),
    onSuccess: (data) => {
      setForgotPasswordTTL(null)
      setEmail(null)
      toast({
        title: data.message as string
      })
    },
    onError: (error: ErrorResponse) => {
      console.log(error)
      toast({
        title: (error.response?.data.message as string) || error.message,
        variant: 'destructive'
      })
    }
  })

  // States
  useEffect(() => {
    if (!forgotPasswordTTL) {
      router.push(ROUTES.forgot_password.path)
    }
  }, [])

  // Handlers
  const handleSubmitForm = ({
    newPassword,
    confirmNewPassword
  }: {
    newPassword: string
    confirmNewPassword: string
  }) => {
    if (email) {
      resetPasswordMutation.mutate({
        email,
        newPassword
      })
    }
  }

  return (
    <div className='w-full h-screen grid place-items-center'>
      <Card className='w-[350px] mx-auto mt-16'>
        <CardHeader>
          <CardTitle>Đặt lại mật khẩu</CardTitle>
          <CardDescription>Nhập mật khẩu mới của bạn bên dưới</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(handleSubmitForm)}>
            <div className='grid w-full items-center gap-4'>
              <div className='relative flex flex-col space-y-1.5'>
                <Label htmlFor='new-password'>Mật khẩu mới</Label>
                <Input id='new-password' type='password' {...register('newPassword')} />
                <span className='absolute -bottom-4 text-xs text-red-600'>{errors.newPassword?.message}</span>
              </div>
              <div className='relative flex flex-col space-y-1.5'>
                <Label htmlFor='confirm-password'>Nhập lại mật khẩu mới</Label>
                <Input id='confirm-password' type='password' {...register('confirmNewPassword')} />
                <span className='absolute -bottom-4 text-xs text-red-600'>{errors.confirmNewPassword?.message}</span>
              </div>
            </div>
            <Button type='submit' className='w-full mt-6'>
              Đặt lại
            </Button>
          </form>
        </CardContent>
        <CardFooter className='flex justify-center'>
          <Link href={ROUTES.login.path} className='text-sm text-primary hover:underline'>
            Quay về đăng nhập
          </Link>
        </CardFooter>
      </Card>
    </div>
  )
}
