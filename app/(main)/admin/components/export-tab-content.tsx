'use client'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { getBusCompanies } from '@/apis/bus-company.api'
import { useRouter } from 'next/navigation'

const HOST = process.env.NEXT_PUBLIC_HOST_URL

export default function ExportTabContent() {
  // States
  const router = useRouter()
  const [selectedCompany, setSelectedCompany] = useState('')
  const [selectedReportType, setSelectedReportType] = useState('')

  // Hooks
  const { data: busCompaniesData } = useQuery({
    queryKey: ['bus-companies'],
    queryFn: getBusCompanies
  })

  // Handlers
  const handleExportReport = () => {
    if (selectedCompany && selectedReportType) {
      if (selectedReportType === 'monthly-revenue') {
        router.push(`${HOST}/admin/report/export-analyze-report-company-bus-in-month/${selectedCompany}`)
      } else if (selectedReportType === 'weekly-revenue') {
        router.push(`${HOST}/admin/report/export-analyze-report-company-bus-in-week/${selectedCompany}`)
      }
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Xuất Báo Cáo</CardTitle>
        <CardDescription>Tạo và tải xuống các báo cáo</CardDescription>
      </CardHeader>
      <CardContent>
        <div>
          <div>
            <h3 className='text-lg font-semibold mb-2'>Chọn Loại Báo Cáo Doanh Thu</h3>

            <div className='flex space-x-4'>
              <Select value={selectedReportType} onValueChange={setSelectedReportType}>
                <SelectTrigger className='w-56'>
                  <SelectValue placeholder='Chọn Loại Báo Cáo' />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='monthly-revenue'>Báo Cáo Theo Tháng</SelectItem>
                  <SelectItem value='weekly-revenue'>Báo Cáo Theo Tuần</SelectItem>
                </SelectContent>
              </Select>

              <Select value={selectedCompany} onValueChange={setSelectedCompany}>
                <SelectTrigger className='w-40'>
                  <SelectValue placeholder='Chọn Công Ty' />
                </SelectTrigger>
                <SelectContent>
                  {busCompaniesData?.data.map((busCompany) => (
                    <SelectItem key={busCompany.id} value={busCompany.id}>
                      {busCompany.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <Button type='button' onClick={handleExportReport} className='mt-8'>
            Tạo và Tải Xuống Báo Cáo
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
