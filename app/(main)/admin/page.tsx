'use client'
import { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell
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

const routeData = [
  { route: 'New York - Boston', bookings: 1200 },
  { route: 'Los Angeles - San Francisco', bookings: 1000 },
  { route: 'Chicago - Detroit', bookings: 800 },
  { route: 'Miami - Orlando', bookings: 750 },
  { route: 'Seattle - Portland', bookings: 600 }
]

const timeFrameData = [
  { time: '6 giờ - 9 giờ', bookings: 800 },
  { time: '9 giờ - 12 giờ', bookings: 1200 },
  { time: '12 giờ - 15 giờ', bookings: 1500 },
  { time: '15 giờ - 18 giờ', bookings: 1300 },
  { time: '18 giờ - 21 giờ', bookings: 1000 },
  { time: '21 giờ - 24 giờ', bookings: 500 }
]

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d']

export default function BusTicketDashboard() {
  const [selectedCompany, setSelectedCompany] = useState('all')

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
        </TabsList>

        <TabsContent value='users'>
          <Card>
            <CardHeader>
              <CardTitle>Quản Lý Người Dùng</CardTitle>
              <CardDescription>Quản lý người dùng hệ thống và quyền hạn của họ</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Tên</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Vai Trò</TableHead>
                    <TableHead>Hành Động</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Nguyễn Văn A</TableCell>
                    <TableCell>nguyenvana@example.com</TableCell>
                    <TableCell>Quản trị viên</TableCell>
                    <TableCell>
                      <Button variant='outline' size='sm'>
                        Sửa
                      </Button>
                      <Button variant='outline' size='sm' className='ml-2'>
                        Xóa
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Nguyễn Văn A</TableCell>
                    <TableCell>nguyenvana@example.com</TableCell>
                    <TableCell>Quản trị viên</TableCell>
                    <TableCell>
                      <Button variant='outline' size='sm'>
                        Sửa
                      </Button>
                      <Button variant='outline' size='sm' className='ml-2'>
                        Xóa
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value='revenue'>
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
        </TabsContent>

        <TabsContent value='routes'>
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
        </TabsContent>

        <TabsContent value='timeframes'>
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
        </TabsContent>

        <TabsContent value='export'>
          <Card>
            <CardHeader>
              <CardTitle>Xuất Báo Cáo</CardTitle>
              <CardDescription>Tạo và tải xuống các báo cáo</CardDescription>
            </CardHeader>
            <CardContent>
              <div className='space-y-4'>
                <div>
                  <h3 className='text-lg font-semibold mb-2'>Chọn Loại Báo Cáo</h3>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder='Chọn Loại Báo Cáo' />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value='revenue'>Báo Cáo Doanh Thu</SelectItem>
                      <SelectItem value='routes'>Báo Cáo Phân Tích Tuyến Đường</SelectItem>
                      <SelectItem value='timeframes'>Báo Cáo Phân Tích Khung Giờ</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <h3 className='text-lg font-semibold mb-2'>Chọn Khoảng Thời Gian</h3>
                  <div className='flex space-x-4'>
                    <input type='date' className='border rounded p-2' />
                    <input type='date' className='border rounded p-2' />
                  </div>
                </div>
                <Button>Tạo và Tải Xuống Báo Cáo</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
