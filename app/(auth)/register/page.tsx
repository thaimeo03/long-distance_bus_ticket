import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { ROUTES } from '@/common/constants/routes.constant'

export default function Register() {
  return (
    <div>
      <div className='grid gap-2 text-center'>
        <h1 className='text-3xl font-bold'>Đăng ký</h1>
      </div>
      <form className='grid gap-4 mt-3'>
        <div className='grid gap-2'>
          <Label htmlFor='full_name'>Họ và tên</Label>
          <Input id='full_name' type='text' placeholder='Tran Hong Thai' required />
        </div>
        <div className='grid gap-2'>
          <Label htmlFor='phoneNumber'>Số điện thoại</Label>
          <Input id='phoneNumber' type='text' placeholder='0987654321' required />
        </div>
        <div className='grid gap-2'>
          <Label htmlFor='email'>Email</Label>
          <Input id='email' type='email' placeholder='m@example.com' required />
        </div>
        <div className='grid gap-2'>
          <div className='flex items-center'>
            <Label htmlFor='password'>Mật khẩu</Label>
          </div>
          <Input id='password' type='password' required />
        </div>
        <div className='grid gap-2'>
          <div className='flex items-center'>
            <Label htmlFor='confirm_password'>Xác nhận mật khẩu</Label>
          </div>
          <Input id='confirm_password' type='password' required />
        </div>

        <Button type='submit' className='w-full'>
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
