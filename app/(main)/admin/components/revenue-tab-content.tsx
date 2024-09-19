'use client'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { useState } from 'react'
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts'

const monthlyRevenueData = [
  { name: 'Th1', value: 4000 },
  { name: 'Th2', value: 3000 },
  { name: 'Th3', value: 5000 },
  { name: 'Th4', value: 4500 },
  { name: 'Th5', value: 6000 },
  { name: 'Th6', value: 5500 }
]

const weeklyRevenueData = [
  { name: 'Tuần 1', value: 1000 },
  { name: 'Tuần 2', value: 1200 },
  { name: 'Tuần 3', value: 900 },
  { name: 'Tuần 4', value: 1500 }
]

export default function RevenueTabContent() {
  const [selectedCompany, setSelectedCompany] = useState('all')

  return (
    <Card>
      <CardHeader>
        <CardTitle>Phân Tích Doanh Thu</CardTitle>
        <CardDescription>Phân tích doanh thu theo tháng, tuần và công ty</CardDescription>
      </CardHeader>
      <CardContent>
        <div className='mb-4'>
          <Select value={selectedCompany} onValueChange={setSelectedCompany}>
            <SelectTrigger>
              <SelectValue placeholder='Chọn Công Ty' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='all'>Tất Cả Công Ty</SelectItem>
              <SelectItem value='company1'>Công Ty 1</SelectItem>
              <SelectItem value='company2'>Công Ty 2</SelectItem>
              <SelectItem value='company3'>Công Ty 3</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <Card>
            <CardHeader>
              <CardTitle>Doanh Thu Hàng Tháng</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width='100%' height={300}>
                <LineChart data={monthlyRevenueData}>
                  <CartesianGrid strokeDasharray='3 3' />
                  <XAxis dataKey='name' />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type='monotone' dataKey='value' stroke='#8884d8' name='Doanh Thu' />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Doanh Thu Hàng Tuần</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width='100%' height={300}>
                <AreaChart data={weeklyRevenueData}>
                  <CartesianGrid strokeDasharray='3 3' />
                  <XAxis dataKey='name' />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Area type='monotone' dataKey='value' fill='#82ca9d' stroke='#82ca9d' name='Doanh Thu' />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
      </CardContent>
    </Card>
  )
}
