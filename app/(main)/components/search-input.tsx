'use client'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useState } from 'react'
import { IForm } from './bus-search'
import useSearchStore from '@/stores/search.store'
import { ScrollArea } from '@/components/ui/scroll-area'

interface ISearchInputProps {
  label: string
  id: string
  value: string
  setForm: React.Dispatch<React.SetStateAction<IForm>>
  data: string[]
}

export default function SearchInput({ label, id, value, setForm, data }: ISearchInputProps) {
  const { suggestion, setSuggestion } = useSearchStore()
  const [suggestionData, setSuggestionData] = useState<string[]>([])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [id]: e.target.value }))
    setSuggestionData(data.filter((item) => item.toLowerCase().includes(e.target.value.toLowerCase())))

    if (suggestionData.length === 0) setSuggestion('')
    else setSuggestion(id)
  }

  const handleClick = (dataItem: string) => {
    setForm((prev) => ({ ...prev, [id]: dataItem }))
    setSuggestion('')
  }

  return (
    <div className='grid w-full max-w-sm items-center'>
      <Label htmlFor={id} className='cursor-pointer text-muted-foreground'>
        {label}
      </Label>
      <div className='relative'>
        <Input
          type='text'
          autoComplete='off'
          onChange={handleChange}
          id={id}
          value={value}
          placeholder=''
          className='outline-none border-none w-[200px] text-lg font-semibold p-0 focus-visible:ring-0 focus-visible:ring-offset-0'
        />

        <div hidden={!(suggestion === id)} className='absolute bottom-0 bg-white translate-y-full rounded border'>
          <ScrollArea className='h-[200px] rounded-md border p-4'>
            <ul>
              {suggestionData.map((item, index) => (
                <li
                  onClick={() => handleClick(item)}
                  key={index}
                  className='py-1 my-1 cursor-pointer hover:text-primary'
                >
                  {item}
                </li>
              ))}
            </ul>
          </ScrollArea>
        </div>
      </div>
    </div>
  )
}
