'use client'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Button } from '@/components/ui/button'

export default function ExportTabContent() {
  return (
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
  )
}
