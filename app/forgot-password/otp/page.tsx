'use client'
import { ROUTES } from '@/common/constants/routes.constant'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp'
import { REGEXP_ONLY_DIGITS } from 'input-otp'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function OTP() {
  const [otp, setOtp] = useState(['', '', '', '', '', ''])
  const [timeLeft, setTimeLeft] = useState(300) // 5 minutes in seconds

  useEffect(() => {
    if (timeLeft > 0) {
      const timerId = setTimeout(() => setTimeLeft(timeLeft - 1), 1000)
      return () => clearTimeout(timerId)
    }
  }, [timeLeft])

  return (
    <div className='w-full h-screen grid place-items-center'>
      <Card className='w-[350px]'>
        <CardHeader>
          <CardTitle>Nhập OTP</CardTitle>
          <CardDescription>Chúng tôi đã gửi mã OTP đến email của bạn</CardDescription>
        </CardHeader>
        <CardContent className='w-full flex justify-center pb-2'>
          <form>
            <InputOTP maxLength={6} pattern={REGEXP_ONLY_DIGITS}>
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
            Time remaining: {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}
