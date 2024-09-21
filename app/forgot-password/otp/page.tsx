'use client'
import { verifyForgotPasswordOtp } from '@/apis/users.api'
import { ROUTES } from '@/common/constants/routes.constant'
import { ErrorResponse } from '@/common/interfaces/response.interface'
import { IVerifyForgotPasswordOTPBody } from '@/common/interfaces/users.interface'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp'
import { useToast } from '@/hooks/use-toast'
import useUserStore from '@/stores/user.store'
import { useMutation } from '@tanstack/react-query'
import { REGEXP_ONLY_DIGITS } from 'input-otp'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function OTP() {
  // Hooks
  const router = useRouter()
  const { toast } = useToast()
  const { forgotPasswordTTL, setForgotPasswordTTL, email } = useUserStore()

  const verifyForgotPasswordOTPMutation = useMutation({
    mutationFn: (body: IVerifyForgotPasswordOTPBody) => verifyForgotPasswordOtp(body),
    onSuccess: (data) => {
      setForgotPasswordTTL(data.data.TTL)
      router.push(ROUTES.forgot_password_reset.path)
    },
    onError: (error: ErrorResponse) => {
      toast({
        title: (error.response?.data.message as string) || error.message,
        variant: 'destructive'
      })
    }
  })

  // States
  const [otp, setOtp] = useState('')
  const [timeLeft, setTimeLeft] = useState(0)

  useEffect(() => {
    if (!forgotPasswordTTL) {
      router.push(ROUTES.forgot_password.path)
    } else setTimeLeft(forgotPasswordTTL / 1000)
  }, [])

  useEffect(() => {
    if (timeLeft > 0) {
      const timerId = setTimeout(() => setTimeLeft(timeLeft - 1), 1000)
      return () => clearTimeout(timerId)
    }
    if (timeLeft === 0) {
      setForgotPasswordTTL(null)
    }
  }, [timeLeft])

  // Handlers
  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (otp.length === 6 && email) {
      verifyForgotPasswordOTPMutation.mutate({ email, OTP: otp })
    }
  }

  return (
    <div className='w-full h-screen grid place-items-center'>
      <Card className='w-[350px]'>
        <CardHeader>
          <CardTitle>Nhập OTP</CardTitle>
          <CardDescription>Chúng tôi đã gửi mã OTP đến email của bạn</CardDescription>
        </CardHeader>
        <CardContent className='w-full flex justify-center pb-2'>
          <form onSubmit={handleSubmitForm}>
            <InputOTP value={otp} onChange={(otp) => setOtp(otp)} maxLength={6} pattern={REGEXP_ONLY_DIGITS}>
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
            <Button className='w-full mt-4'>Xác thực OTP</Button>
          </form>
        </CardContent>
        <CardFooter className='w-full flex justify-between mt-2'>
          <Link href={ROUTES.forgot_password.path} className='text-sm underline hover:text-red-500'>
            Quay lại
          </Link>
          <p className='text-sm text-muted-foreground'>
            Còn lại: {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}
