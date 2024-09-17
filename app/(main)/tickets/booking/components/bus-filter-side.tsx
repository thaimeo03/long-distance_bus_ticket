'use client'
import { Separator } from '@/components/ui/separator'
import { BusFilterCheckbox, IBusFilterCheckBoxItemProps } from './bus-filter-checkbox'
import { Moon, SunDim, Sunrise, Sunset } from 'lucide-react'
import { useQuery } from '@tanstack/react-query'
import { getBusCompanies } from '@/apis/bus-company.api'

export default function BusFilterSide() {
  const checkBoxItems: IBusFilterCheckBoxItemProps[] = [
    {
      id: 'before_6am',
      value: {
        startTime: 1,
        endTime: 6
      },
      children: (
        <>
          <Sunrise className='w-5 h-5' />
          <span>Trước 6 giờ sáng</span>
        </>
      )
    },
    {
      id: '6am_12pm',
      value: {
        startTime: 6,
        endTime: 12
      },
      children: (
        <>
          <SunDim className='w-5 h-5' /> <span>6 giờ sáng đến 12 giờ trưa</span>
        </>
      )
    },
    {
      id: '12pm_6pm',
      value: {
        startTime: 12,
        endTime: 18
      },
      children: (
        <>
          <Sunset className='w-5 h-5' />
          <span>12 giờ trưa đến 6 giờ tối</span>
        </>
      )
    },
    {
      id: 'after_6pm',
      value: {
        startTime: 18,
        endTime: 24
      },
      children: (
        <>
          <Moon className='w-5 h-5' />
          <span>Sau 6 giờ tối</span>
        </>
      )
    }
  ]

  const { data } = useQuery({
    queryKey: ['bus-companies'],
    queryFn: getBusCompanies
  })

  const checkBoxCompanyItems: IBusFilterCheckBoxItemProps[] =
    data?.data.map((item) => ({
      id: item.id,
      value: item.id,
      children: item.name
    })) || []

  return (
    <div>
      <span className='font-bold'>Bộ lọc</span>

      <BusFilterCheckbox checkBoxItems={checkBoxItems} listName='Giờ đi' type='departure' />
      {/* <BusFilterRadioGroup radioItems={radioDepartureItems} listName='Điểm đón' type='departure' /> */}

      <Separator className='mt-5 bg-primary' />

      <BusFilterCheckbox checkBoxItems={checkBoxItems} listName='Giờ dến' type='arrival' />
      {/* <BusFilterRadioGroup radioItems={radioArrivalItems} listName='Điểm trả' type='arrival' /> */}

      <Separator className='mt-5 bg-primary' />
      <BusFilterCheckbox checkBoxItems={checkBoxCompanyItems} listName='Nhà xe' type='bus-company' />
    </div>
  )
}
