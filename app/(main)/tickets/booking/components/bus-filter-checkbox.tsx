'use client'
import { Checkbox } from '@/components/ui/checkbox'
import useScheduleStore from '@/stores/schedule.store'
import { CheckedState } from '@radix-ui/react-checkbox'
import React from 'react'

interface ICheckBoxValue {
  startTime: number
  endTime: number
}

interface IBusFilterCheckboxProps {
  checkBoxItems: IBusFilterCheckBoxItemProps[]
  listName: string
  type: 'departure' | 'arrival' | 'bus-company'
}

export interface IBusFilterCheckBoxItemProps {
  id?: string
  children: React.ReactNode
  value: ICheckBoxValue | string
  type?: 'departure' | 'arrival' | 'bus-company'
}

export function BusFilterCheckbox({ checkBoxItems, listName, type }: IBusFilterCheckboxProps) {
  return (
    <div className='mt-4'>
      <span className='text-sm font-semibold underline'>{listName}</span>
      <div className='mt-3 flex flex-col space-y-4 text-gray-600'>
        {checkBoxItems.map(({ id, children, value }, index) => (
          <BusFilterCheckBoxItem
            key={`${type}_${index}_${id}`}
            id={`${type}_${index}_${id}`}
            value={value}
            type={type}
            children={children}
          />
        ))}
      </div>
    </div>
  )
}

export function BusFilterCheckBoxItem({ id, children, value, type }: IBusFilterCheckBoxItemProps) {
  const { scheduleSearch, setScheduleSearch } = useScheduleStore()

  const handleChange = (checked: CheckedState, value: ICheckBoxValue | string) => {
    if (scheduleSearch?.query) {
      switch (type) {
        case 'departure':
          let periodDepartures: { startTime: number; endTime: number }[] | undefined = [
            ...(scheduleSearch?.body?.periodDepartures || [])
          ]
          if (checked) {
            periodDepartures = [...periodDepartures, value as ICheckBoxValue]
          } else {
            periodDepartures = periodDepartures.filter((item) => item.startTime !== (value as ICheckBoxValue).startTime)
          }
          if (periodDepartures.length === 0) periodDepartures = undefined

          setScheduleSearch({
            body: { ...scheduleSearch.body, periodDepartures },
            query: scheduleSearch.query
          })
          break
        case 'arrival':
          let periodArrivals: { startTime: number; endTime: number }[] | undefined = [
            ...(scheduleSearch?.body?.periodArrivals || [])
          ]
          if (checked) {
            periodArrivals = [...periodArrivals, value as any]
          } else {
            periodArrivals = periodArrivals.filter((item) => item.startTime !== (value as ICheckBoxValue).startTime)
          }
          if (periodArrivals.length === 0) periodArrivals = undefined

          setScheduleSearch({
            body: { ...scheduleSearch.body, periodArrivals },
            query: scheduleSearch.query
          })
          break
        case 'bus-company':
          let companyIds = scheduleSearch.body?.companyIds
          if (checked) {
            companyIds = [...(companyIds || []), value as string]
          } else {
            companyIds = companyIds?.filter((item) => item !== value)
          }
          if (companyIds?.length === 0) companyIds = undefined

          setScheduleSearch({
            body: { ...scheduleSearch.body, companyIds },
            query: scheduleSearch.query
          })
          break
      }
    }
  }

  return (
    <div className='flex items-center space-x-2 cursor-pointer'>
      <Checkbox onCheckedChange={(e) => handleChange(e, value)} id={id} value={JSON.stringify(value)} />
      <label htmlFor={id} className='flex space-x-1 items-center text-sm font-medium cursor-pointer'>
        {children}
      </label>
    </div>
  )
}
