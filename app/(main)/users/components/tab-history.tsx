import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

export default function TabHistory() {
  return (
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
  )
}
