import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle, Home, Mail } from 'lucide-react'
import Link from 'next/link'

export default function SuccessPage() {
  return (
    <div className='min-h-screen bg-gradient-to-b from-green-100 to-green-200 flex items-center justify-center p-4'>
      <Card className='w-full max-w-md'>
        <CardHeader className='text-center'>
          <CheckCircle className='w-16 h-16 text-green-500 mx-auto mb-2' />
          <CardTitle className='text-2xl font-bold text-green-700'>Đã xác nhận đặt chỗ!</CardTitle>
        </CardHeader>
        <CardContent className='space-y-6'>
          <p className='text-center text-muted-foreground'>
            Vé xe buýt của bạn đã được đặt thành công. Chúng tôi đã gửi tất cả các chi tiết đến email của bạn.
          </p>
          <div className='bg-muted p-6 rounded-lg text-center'>
            <p className='font-semibold text-lg mb-3'>Quan trọng:</p>
            <p className='mb-3'>Vui lòng kiểm tra email của bạn để biết chi tiết vé đầy đủ, bao gồm:</p>
            <ul className='list-disc list-inside text-sm text-muted-foreground space-y-1'>
              <li>Biển số xe khách</li>
              <li>Thông tin lịch trình</li>
              <li>Ngày và giờ</li>
              <li>Chỗ ngồi</li>
            </ul>
          </div>
        </CardContent>
        <CardFooter className='flex flex-col space-y-4 pt-6'>
          <Link href='https://mail.google.com' target='_blank' rel='noopener noreferrer' className='w-full'>
            <Button className='w-full'>
              <Mail className='mr-2 h-4 w-4' /> Kiểm tra email
            </Button>
          </Link>
          <Link href='/' className='w-full'>
            <Button variant='outline' className='w-full'>
              <Home className='mr-2 h-4 w-4' /> Trở về trang chủ
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  )
}
