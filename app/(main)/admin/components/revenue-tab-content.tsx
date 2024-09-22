'use client'
import { getRevenueOfCompanyInMonthAnalysis, getRevenueOfCompanyInWeekAnalysis } from '@/apis/admin.api'
import { getBusCompanies } from '@/apis/bus-company.api'
import { IRevenueInMonthAnalysisResponse, IRevenueInWeekAnalysisResponse } from '@/common/interfaces/admin.interface'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { useQueries } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
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

interface IMonthlyRevenueRenderData {
  name: string
  value: number
}

interface IWeeklyRevenueRenderData extends IMonthlyRevenueRenderData {}

export default function RevenueTabContent() {
  // States
  const [selectedCompany, setSelectedCompany] = useState('all')
  // by month
  const [monthlyRevenueData, setMonthlyRevenueData] = useState<IRevenueInMonthAnalysisResponse[]>([])
  const [monthlyRevenueRenderData, setMonthlyRevenueRenderData] = useState<IMonthlyRevenueRenderData[]>([])
  // by week
  const [weeklyRevenueRenderData, setWeeklyRevenueRenderData] = useState<IWeeklyRevenueRenderData[]>([])
  const [weeklyRevenueData, setWeeklyRevenueData] = useState<IRevenueInWeekAnalysisResponse[]>([])

  // Hooks
  const [
    { data: busCompaniesData },
    { data: revenueOfCompanyInMonthAnalysisData, isSuccess: revenueOfCompanyInMonthAnalysisIsSuccess },
    { data: revenueOfCompanyInWeekAnalysisData, isSuccess: revenueOfCompanyInWeekAnalysisIsSuccess }
  ] = useQueries({
    queries: [
      {
        queryKey: ['bus-companies'],
        queryFn: getBusCompanies
      },
      {
        queryKey: ['revenue-of-company-in-month-analysis', selectedCompany],
        queryFn: () => getRevenueOfCompanyInMonthAnalysis(selectedCompany)
      },
      {
        queryKey: ['revenue-of-company-in-week-analysis', selectedCompany],
        queryFn: () => getRevenueOfCompanyInWeekAnalysis(selectedCompany)
      }
    ]
  })

  // Monthly revenue
  useEffect(() => {
    if (revenueOfCompanyInMonthAnalysisIsSuccess) {
      setMonthlyRevenueData(revenueOfCompanyInMonthAnalysisData.data)
    }
  }, [revenueOfCompanyInMonthAnalysisIsSuccess, revenueOfCompanyInMonthAnalysisData])

  useEffect(() => {
    const initData: IMonthlyRevenueRenderData[] = []
    for (let i = 1; i <= 12; i++) {
      initData.push({ name: `Tháng ${i}`, value: 0 })
    }

    const renderData = initData.map<IMonthlyRevenueRenderData>((item) => {
      const date = new Date()
      const incomingData = monthlyRevenueData.find(
        (data) => `Tháng ${data.month}` === item.name && Number(data.year) === date.getFullYear()
      )
      if (incomingData) {
        return {
          name: `Tháng ${incomingData.month}`,
          value: Number(incomingData.totalAmount)
        }
      }
      return item
    })
    setMonthlyRevenueRenderData(renderData)
  }, [monthlyRevenueData])

  // Weekly revenue
  useEffect(() => {
    if (revenueOfCompanyInWeekAnalysisIsSuccess) {
      setWeeklyRevenueData(revenueOfCompanyInWeekAnalysisData.data)
    }
  }, [revenueOfCompanyInWeekAnalysisData, revenueOfCompanyInWeekAnalysisIsSuccess])

  useEffect(() => {
    const sortedData = weeklyRevenueData.sort((a, b) => Number(a.week) - Number(b.week))
    const renderData = sortedData.map<IWeeklyRevenueRenderData>((item) => {
      return {
        name: `Tuần ${item.week}`,
        value: Number(item.totalAmount)
      }
    })
    setWeeklyRevenueRenderData(renderData)
  }, [weeklyRevenueData])

  return (
    <Card>
      <CardHeader>
        <CardTitle>Phân Tích Doanh Thu</CardTitle>
        <CardDescription>Phân tích doanh thu theo tháng, tuần và công ty</CardDescription>
      </CardHeader>
      <CardContent>
        <div className='mb-4'>
          <Select value={selectedCompany} onValueChange={setSelectedCompany}>
            <SelectTrigger className='w-40'>
              <SelectValue placeholder='Chọn Công Ty' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='all'>Tất Cả Công Ty</SelectItem>
              {busCompaniesData?.data.map((busCompany) => (
                <SelectItem key={busCompany.id} value={busCompany.id}>
                  {busCompany.name}
                </SelectItem>
              ))}
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
                <LineChart data={monthlyRevenueRenderData}>
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
                <AreaChart data={weeklyRevenueRenderData}>
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
