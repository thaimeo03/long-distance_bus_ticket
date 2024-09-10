'use client'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import useUserStore from '@/stores/user.store'

export default function TabAccount() {
  const { userInfo } = useUserStore()

  return (
    <Card>
      <CardHeader>
        <CardTitle>Thông tin tài khoản</CardTitle>
        <CardDescription>Thay đổi thông tin tài khoản ở đây. Ấn lưu nếu bạn có cập nhật.</CardDescription>
      </CardHeader>
      <CardContent className='space-y-4'>
        <div className='flex space-x-4'>
          <div>
            <Label htmlFor='full_name'>Họ và tên</Label>
            <Input id='full_name' value={userInfo?.fullName} placeholder='Tran Hong Thai' className='w-[450px]' />
          </div>
          <div>
            <Label htmlFor='age'>Tuổi</Label>
            <Input id='age' value={userInfo?.age || ''} type='number' className='w-[100px]' />
          </div>
        </div>
        <div className='flex space-x-4'>
          <div>
            <Label htmlFor='email'>Email</Label>
            <Input id='email' readOnly defaultValue={userInfo?.email} placeholder='m@example.com' />
          </div>
          <div>
            <Label htmlFor='phoneNumber'>Số điện thoại</Label>
            <Input id='phoneNumber' value={userInfo?.phoneNumber} placeholder='0123456789' />
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button disabled>Cập nhật</Button>
      </CardFooter>
    </Card>
  )
}
