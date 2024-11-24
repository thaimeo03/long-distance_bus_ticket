import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import RouteTable from './route-table'
import AddRouteForm from './add-route-form'

export default function RouteDetailsTabContent() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Chi tiết tuyến đường</CardTitle>
        <CardDescription>Phân tích doanh thu theo tháng, tuần và công ty</CardDescription>
      </CardHeader>
      <CardContent>
        <div>
          <AddRouteForm />
        </div>
        <RouteTable />
      </CardContent>
    </Card>
  )
}
