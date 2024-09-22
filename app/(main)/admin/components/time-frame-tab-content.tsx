'use client'
import { getDepartureTimeAnalysis } from '@/apis/admin.api'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts'

interface ITimeFrameRenderData {
  time: string
  count: number
}

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d']

export default function TimeFrameTabContent() {
  // States
  const [timeFrameRenderData, setTimeFrameRenderData] = useState<ITimeFrameRenderData[]>([])

  // Hooks
  const { data: timeFrameData, isSuccess } = useQuery({
    queryKey: ['departure-time-analysis'],
    queryFn: getDepartureTimeAnalysis
  })

  useEffect(() => {
    if (isSuccess) {
      const timeFrameRenderData: ITimeFrameRenderData[] = timeFrameData.data.map((item) => {
        return {
          time: item.timeslot,
          count: Number(item.departurecount)
        }
      })
      setTimeFrameRenderData(timeFrameRenderData)
    }
  }, [isSuccess, timeFrameData])

  return (
    <Card>
      <CardHeader>
        <CardTitle>Phân Tích Khung Giờ</CardTitle>
        <CardDescription>Phân tích các khung giờ được đặt nhiều nhất</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width='100%' height={300}>
          <BarChart data={timeFrameRenderData}>
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis dataKey='time' />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey='count' fill='#f45a50' name='Số Lượt Đặt'>
              {timeFrameRenderData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
