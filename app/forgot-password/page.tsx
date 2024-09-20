'use client'
import { ROUTES } from '@/common/constants/routes.constant'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function ForgotPassword() {
  // Hooks
  const router = useRouter()

  // Handlers
  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Handle form submission
    router.push(ROUTES.forgot_password_otp.path)
  }

  return (
    <div className='w-full h-screen grid place-items-center'>
      <Card className='w-[350px]'>
        <CardHeader>
          <CardTitle>Quên mật khẩu</CardTitle>
          <CardDescription>Nhập email để lấy mã OTP</CardDescription>
        </CardHeader>
        <CardContent className='pb-2'>
          <form onSubmit={handleSubmitForm}>
            <div className='grid w-full items-center gap-4'>
              <div className='flex flex-col space-y-1.5'>
                <Label htmlFor='email'>Email</Label>
                <Input id='email' type='email' placeholder='thaimeo@gmail.com' />
              </div>
            </div>
            <Button className='w-full mt-4'>Lấy mã OTP</Button>
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
