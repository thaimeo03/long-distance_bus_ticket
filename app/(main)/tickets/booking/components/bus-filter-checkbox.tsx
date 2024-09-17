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

export function BusFilterCheckBoxItem({ id, children }: IBusFilterCheckBoxItemProps) {
  return (
    <div className='flex items-center space-x-2 cursor-pointer'>
      <Checkbox onCheckedChange={(e) => handleChange(e, value)} id={id} value={JSON.stringify(value)} />
      <label htmlFor={id} className='flex space-x-1 items-center text-sm font-medium cursor-pointer'>
        {children}
      </label>
    </div>
  )
}
