import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export default function Users() {
  return (
    <div className='h-[calc(100vh-233px)]'>
      <div className='container mt-6'>
        <Tabs defaultValue='account' className='w-full'>
          <TabsList className='grid w-fit grid-cols-2'>
            <TabsTrigger value='account' className='shadow'>
              Tài khoản
            </TabsTrigger>
            <TabsTrigger value='history' className='shadow'>
              Lịch sử mua vé
            </TabsTrigger>
          </TabsList>
          <TabsContent value='account'>
            <Card>
              <CardHeader>
                <CardTitle>Thông tin tài khoản</CardTitle>
                <CardDescription>Thay đổi thông tin tài khoản ở đây. Ấn lưu nếu bạn có cập nhật.</CardDescription>
              </CardHeader>
              <CardContent className='space-y-4'>
                <div className='flex space-x-4'>
                  <div>
                    <Label htmlFor='full_name'>Họ và tên</Label>
                    <Input id='full_name' placeholder='Tran Hong Thai' className='w-[450px]' />
                  </div>
                  <div>
                    <Label htmlFor='age'>Tuổi</Label>
                    <Input id='age' type='number' className='w-[100px]' />
                  </div>
                </div>
                <div className='flex space-x-4'>
                  <div>
                    <Label htmlFor='email'>Email</Label>
                    <Input id='email' placeholder='m@example.com' />
                  </div>
                  <div>
                    <Label htmlFor='phoneNumber'>Số điện thoại</Label>
                    <Input id='phoneNumber' placeholder='0123456789' />
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button>Cập nhật</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value='history'>
            <Card>
              <CardHeader>
                <CardTitle>Lịch sử mua vé</CardTitle>
                <CardDescription>Thông tin mua vé trước đây.</CardDescription>
              </CardHeader>
              <CardContent className='space-y-2'>
                {/* <div className='space-y-1'>
                  <Label htmlFor='current'>Current password</Label>
                  <Input id='current' type='password' />
                </div>
                <div className='space-y-1'>
                  <Label htmlFor='new'>New password</Label>
                  <Input id='new' type='password' />
                </div> */}
              </CardContent>
              <CardFooter>{/* <Button>Save password</Button> */}</CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
