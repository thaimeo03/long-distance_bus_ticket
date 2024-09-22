'use client'
import { getRouteAnalysis } from '@/apis/admin.api'
import { IRouteAnalysisResponse } from '@/common/interfaces/admin.interface'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import { PieChart, Pie, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts'

// const routeData = [
//   { route: 'New York - Boston', bookings: 1200 },
//   { route: 'Los Angeles - San Francisco', bookings: 1000 },
//   { route: 'Chicago - Detroit', bookings: 800 },
//   { route: 'Miami - Orlando', bookings: 750 },
//   { route: 'Seattle - Portland', bookings: 600 }
// ]

interface IRouteRenderData {
  route: string
  count: number
}

const COLORS = ['#0088FE', '#f4a26c', '#FFBB28', '#FF8042', '#8b6cf4', '#82ca9d', '#c3c6c5']

export default function RouteTabContent() {
  // States
  const [routeRenderData, setRouteRenderData] = useState<IRouteRenderData[]>([])

  // Hooks
  const { data: routeData, isSuccess } = useQuery({
    queryKey: ['routes-analysis'],
    queryFn: getRouteAnalysis
  })

  useEffect(() => {
    if (isSuccess) {
      const sortedData: IRouteRenderData[] = routeData.data
        .map((item: IRouteAnalysisResponse) => ({ route: item.route, count: Number(item.count) }))
        .sort((a, b) => Number(b.count) - Number(a.count))

      const slicedData = sortedData.slice(0, 6)
      const restCount =
        sortedData.reduce((acc, item) => acc + item.count, 0) - slicedData.reduce((acc, item) => acc + item.count, 0)
      slicedData.push({ route: 'Còn lại', count: restCount })

      setRouteRenderData(slicedData || [])
    }
  }, [isSuccess, routeData])

  return (
    <Card>
      <CardHeader>
        <CardTitle>Phân Tích Tuyến Đường</CardTitle>
        <CardDescription>Phân tích các tuyến đường được đặt nhiều nhất</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width='100%' height={500}>
          <PieChart>
            <Pie
              data={routeRenderData}
              cx='50%'
              cy='50%'
              labelLine={false}
              outerRadius={150}
              fill='#8884d8'
              dataKey='count'
              nameKey='route'
              label={({ name, percent }) => `${(percent * 100).toFixed(0)}%`}
            >
              {routeRenderData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
