import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import UserTabContent from './components/user-tab-content'
import RevenueTabContent from './components/revenue-tab-content'
import RouteTabContent from './components/route-tab-content'
import TimeFrameTabContent from './components/time-frame-tab-content'
import ExportTabContent from './components/export-tab-content'
import RouteDetailsTabContent from './components/route-details-tab-content'

export default function BusTicketDashboard() {
  return (
    <div className='container mx-auto p-4 min-h-screen'>
      <h1 className='text-3xl font-bold mb-6'>Bảng Điều Khiển</h1>
      <Tabs defaultValue='users'>
        <TabsList className='mb-4'>
          <TabsTrigger value='users'>Quản Lý Người Dùng</TabsTrigger>
          <TabsTrigger value='revenue'>Phân Tích Doanh Thu</TabsTrigger>
          <TabsTrigger value='routes'>Phân Tích Tuyến Đường</TabsTrigger>
          <TabsTrigger value='timeframes'>Phân Tích Khung Giờ</TabsTrigger>
          <TabsTrigger value='export'>Xuất Báo Cáo</TabsTrigger>
          <TabsTrigger value='route-details'>Chi tiết tuyến đường</TabsTrigger>
        </TabsList>

        <TabsContent value='users'>
          <UserTabContent />
        </TabsContent>

        <TabsContent value='revenue'>
          <RevenueTabContent />
        </TabsContent>

        <TabsContent value='routes'>
          <RouteTabContent />
        </TabsContent>

        <TabsContent value='timeframes'>
          <TimeFrameTabContent />
        </TabsContent>

        <TabsContent value='export'>
          <ExportTabContent />
        </TabsContent>

        <TabsContent value='route-details'>
          <RouteDetailsTabContent />
        </TabsContent>
      </Tabs>
    </div>
  )
}
