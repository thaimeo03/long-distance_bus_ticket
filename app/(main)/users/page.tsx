import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import TabAccount from './components/tab-account'
import TabHistory from './components/tab-history'

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
            <TabAccount />
          </TabsContent>
          <TabsContent value='history'>
            <TabHistory />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
