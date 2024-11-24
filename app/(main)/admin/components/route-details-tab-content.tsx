'use client'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import RouteTable from './route-table'
import { useQuery } from '@tanstack/react-query'
import { getAllRouteDetails } from '@/apis/route.api'

export default function RouteDetailsTabContent() {
  // Hooks
  const { data } = useQuery({
    queryKey: ['all-route-details'],
    queryFn: getAllRouteDetails
  })

  // const handleAddRoute = (newRoute: Route) => {
  //   setRoutes([...routes, newRoute])
  // }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Chi tiết tuyến đường</CardTitle>
        <CardDescription>Phân tích doanh thu theo tháng, tuần và công ty</CardDescription>
      </CardHeader>
      <CardContent>
        <div>{/* <AddRouteForm onAddRoute={handleAddRoute} /> */}</div>
        <RouteTable routes={data?.data || []} />
      </CardContent>
    </Card>
  )
}
