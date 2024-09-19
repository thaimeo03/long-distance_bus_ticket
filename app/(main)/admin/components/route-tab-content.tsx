'use client'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { PieChart, Pie, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts'

const routeData = [
  { route: 'New York - Boston', bookings: 1200 },
  { route: 'Los Angeles - San Francisco', bookings: 1000 },
  { route: 'Chicago - Detroit', bookings: 800 },
  { route: 'Miami - Orlando', bookings: 750 },
  { route: 'Seattle - Portland', bookings: 600 }
]

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d']

export default function RouteTabContent() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Phân Tích Tuyến Đường</CardTitle>
        <CardDescription>Phân tích các tuyến đường được đặt nhiều nhất</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width='100%' height={400}>
          <PieChart>
            <Pie
              data={routeData}
              cx='50%'
              cy='50%'
              labelLine={false}
              outerRadius={150}
              fill='#8884d8'
              dataKey='bookings'
              nameKey='route'
              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
            >
              {routeData.map((entry, index) => (
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
