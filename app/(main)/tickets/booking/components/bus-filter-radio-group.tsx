'use client'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import useScheduleStore from '@/stores/schedule.store'

interface IBusFilterRadioGroupProps {
  radioItems: IBusFilterRadioItem[]
  listName: string
  type: 'departure' | 'arrival'
}

export interface IBusFilterRadioItem {
  id?: string
  label: string
}

export function BusFilterRadioGroup({ radioItems, listName, type }: IBusFilterRadioGroupProps) {
  const { hasSearched } = useScheduleStore()

  return (
    <div className='mt-4'>
      <span className='text-sm font-semibold underline'>{listName}</span>

      {hasSearched && (
        <RadioGroup className='mt-3 text-gray-600 flex flex-wrap gap-3'>
          {radioItems.map(({ id, label }, index) => (
            <BusFilterRadioItem key={`${type}_${index}_${id!}`} id={`${type}_${index}_${id!}`} label={label} />
          ))}
        </RadioGroup>
      )}

      {!hasSearched && <div className='text-xs italic'>{`Vui lòng tìm kiếm xe để tìm ${listName} phù hợp`}</div>}
    </div>
  )
}

export function BusFilterRadioItem({ id, label }: IBusFilterRadioItem) {
  return (
    <div className='col-span-1 flex items-center space-x-2'>
      <RadioGroupItem value={label} id={id} />
      <Label htmlFor={id} className='text-sm cursor-pointer'>
        {label}
      </Label>
    </div>
  )
}
