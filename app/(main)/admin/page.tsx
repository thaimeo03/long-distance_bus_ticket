import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import RouteDetailsTabContent from './components/route-details-tab-content'
import TabHistory from './components/tab-history'

export default function BusTicketDashboard() {
  return (
    <div className='container mx-auto p-4 min-h-screen'>
      <Tabs defaultValue='history'>
        <TabsList className='mb-4'>
          <TabsTrigger value='history' className='shadow'>
            Lịch sử mua vé
          </TabsTrigger>
          <TabsTrigger value='route-details'>Chi tiết tuyến đường</TabsTrigger>
        </TabsList>

        <TabsContent value='history'>
          <TabHistory />
        </TabsContent>

        <TabsContent value='route-details'>
          <RouteDetailsTabContent />
        </TabsContent>
      </Tabs>
    </div>
  )
}
