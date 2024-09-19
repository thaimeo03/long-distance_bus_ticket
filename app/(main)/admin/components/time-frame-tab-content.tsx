'use client'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts'

const timeFrameData = [
  { time: '6 giờ - 9 giờ', bookings: 800 },
  { time: '9 giờ - 12 giờ', bookings: 1200 },
  { time: '12 giờ - 15 giờ', bookings: 1500 },
  { time: '15 giờ - 18 giờ', bookings: 1300 },
  { time: '18 giờ - 21 giờ', bookings: 1000 },
  { time: '21 giờ - 24 giờ', bookings: 500 }
]

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d']

export default function TimeFrameTabContent() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Phân Tích Khung Giờ</CardTitle>
        <CardDescription>Phân tích các khung giờ được đặt nhiều nhất</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width='100%' height={300}>
          <BarChart data={timeFrameData}>
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis dataKey='time' />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey='bookings' fill='#8884d8' name='Số Lượt Đặt'>
              {timeFrameData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
