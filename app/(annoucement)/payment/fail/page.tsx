import { ROUTES } from '@/common/constants/routes.constant'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { AlertCircle, Home, MessageCircle, RefreshCcw } from 'lucide-react'
import Link from 'next/link'

export default function FailPage() {
  return (
    <div className='min-h-screen bg-gradient-to-b from-red-100 to-red-200 flex items-center justify-center p-4'>
      <Card className='w-full max-w-md'>
        <CardHeader className='text-center'>
          <AlertCircle className='w-16 h-16 text-red-500 mx-auto mb-4' />
          <CardTitle className='text-2xl font-bold text-red-700'>Đặt xe không thành công</CardTitle>
        </CardHeader>
        <CardContent className='space-y-6'>
          <p className='text-center text-muted-foreground'>
            Rất tiếc, chúng tôi không thể hoàn tất việc đặt vé xe buýt của bạn vào lúc này.
          </p>
          <div className='bg-muted p-6 rounded-lg text-center'>
            <p className='font-semibold text-lg mb-3'>Lý do có thể:</p>
            <ul className='list-disc list-inside text-sm text-muted-foreground space-y-1'>
              <li>Lỗi xử lý thanh toán</li>
              <li>Chỗ ngồi không còn trống</li>
              <li>Sự cố kết nối mạng</li>
              <li>Trục trặc hệ thống tạm thời</li>
            </ul>
          </div>
          <p className='text-center text-sm text-muted-foreground'>
            Đừng lo lắng! Bạn có thể thử đặt lại hoặc liên hệ với nhóm hỗ trợ của chúng tôi để được hỗ trợ.
          </p>
        </CardContent>
        <CardFooter className='flex flex-col space-y-4 pt-6'>
          <Link href={ROUTES.tickets_booking.path} className='w-full'>
            <Button className='w-full'>
              <RefreshCcw className='mr-2 h-4 w-4' /> Thử đặt chỗ lại
            </Button>
          </Link>
          <Link href='/' className='w-full'>
            <Button variant='ghost' className='w-full'>
              <Home className='mr-2 h-4 w-4' /> Quay lại trang chủ
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  )
}
