'use client'
import { Separator } from '@/components/ui/separator'
import { BusFilterCheckbox, IBusFilterCheckBoxItemProps } from './bus-filter-checkbox'
import { BusFilterRadioGroup, IBusFilterRadioItem } from './bus-filter-radio-group'
import { Moon, SunDim, Sunrise, Sunset } from 'lucide-react'
import useScheduleStore from '@/stores/schedule.store'

const checkBoxItems: IBusFilterCheckBoxItemProps[] = [
  {
    id: 'before_6am',
    children: (
      <>
        <Sunrise className='w-5 h-5' />
        <span>Trước 6 giờ sáng</span>
      </>
    )
  },
  {
    id: '6am_12pm',
    children: (
      <>
        <SunDim className='w-5 h-5' /> <span>6 giờ sáng đến 12 giờ trưa</span>
      </>
    )
  },
  {
    id: '12pm_6pm',
    children: (
      <>
        <Sunset className='w-5 h-5' />
        <span>12 giờ trưa đến 6 giờ tối</span>
      </>
    )
  },
  {
    id: 'after_6pm',
    children: (
      <>
        <Moon className='w-5 h-5' />
        <span>Sau 6 giờ tối</span>
      </>
    )
  }
]

const checkBoxCompanyItems: IBusFilterCheckBoxItemProps[] = [
  {
    id: 'company_1',
    children: 'Xe Việt Nam'
  },
  {
    id: 'company_2',
    children: 'Hà Hải Limousine'
  }
]

export default function BusFilterSide() {
  const { scheduleList } = useScheduleStore()

  const radioDepartureItems: IBusFilterRadioItem[] = []
  const radioArrivalItems: IBusFilterRadioItem[] = []

  if (scheduleList) {
    for (const item of scheduleList) {
      for (let i = 0; i < item.route.routeStops.length - 1; i++) {
        radioDepartureItems.push({
          label: item.route.routeStops[i].location,
          id: item.route.routeStops[i].id
        })
      }
    }

    for (const item of scheduleList) {
      radioArrivalItems.push({
        label: item.route.routeStops[item.route.routeStops.length - 1].location,
        id: item.route.routeStops[item.route.routeStops.length - 1].id
      })
    }
  }

  return (
    <div>
      <span className='font-bold'>Bộ lọc</span>

      <BusFilterCheckbox checkBoxItems={checkBoxItems} listName='Giờ đi' type='departure' />
      <BusFilterRadioGroup radioItems={radioDepartureItems} listName='Điểm đón' type='departure' />

      <Separator className='mt-5 bg-primary' />

      <BusFilterCheckbox checkBoxItems={checkBoxItems} listName='Giờ dến' type='arrival' />
      <BusFilterRadioGroup radioItems={radioArrivalItems} listName='Điểm trả' type='arrival' />

      <Separator className='mt-5 bg-primary' />
      <BusFilterCheckbox checkBoxItems={checkBoxCompanyItems} listName='Nhà xe' type='bus-company' />
    </div>
  )
}
