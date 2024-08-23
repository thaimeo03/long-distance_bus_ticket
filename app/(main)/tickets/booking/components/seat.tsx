'use client'
import { Button } from '@/components/ui/button'
import { Armchair, ShipWheel } from 'lucide-react'
import { useState } from 'react'
import { twMerge } from 'tailwind-merge'

export interface ISeat {
  value: 0 | 1
  isAvailable: boolean
}

export interface ICurBook {
  i: number
  j: number
  seatNum: number
}

export interface ISeatItemProps {
  seat: ISeat
  row: ISeat[]
  i: number
  j: number
  handleBookSeat?: () => void
}

const seats: ISeat[][] = [
  [
    { value: 1, isAvailable: true },
    { value: 1, isAvailable: false },
    { value: 1, isAvailable: false },
    { value: 1, isAvailable: true },
    { value: 1, isAvailable: true },
    { value: 1, isAvailable: true },
    { value: 1, isAvailable: true }
  ],
  [
    { value: 1, isAvailable: true },
    { value: 1, isAvailable: false },
    { value: 1, isAvailable: false },
    { value: 1, isAvailable: false },
    { value: 1, isAvailable: true },
    { value: 1, isAvailable: true },
    { value: 1, isAvailable: true }
  ],
  [
    { value: 0, isAvailable: false },
    { value: 1, isAvailable: false },
    { value: 1, isAvailable: false },
    { value: 1, isAvailable: true },
    { value: 1, isAvailable: true },
    { value: 1, isAvailable: true },
    { value: 1, isAvailable: true }
  ],
  [
    { value: 0, isAvailable: true },
    { value: 1, isAvailable: true },
    { value: 1, isAvailable: true },
    { value: 1, isAvailable: true },
    { value: 1, isAvailable: true },
    { value: 1, isAvailable: true },
    { value: 1, isAvailable: false }
  ]
]

export function Seat() {
  const [curSeats, setCurSeats] = useState<ISeat[][]>(seats)
  const [curBooks, setCurBooks] = useState<ICurBook[]>([])

  const handleBookSeat = ({ i, j, seatNum }: { i: number; j: number; seatNum: number }) => {
    if (curSeats[i][j].value === 0) return

    if (curSeats[i][j].isAvailable === true) setCurBooks((prev) => [...prev, { i, j, seatNum }])

    return setCurSeats((prev) => {
      const newSeats = JSON.parse(JSON.stringify(prev))

      newSeats[i][j].isAvailable = newSeats[i][j].isAvailable === true && false

      return newSeats
    })
  }

  const handleCancelSeat = ({ i, j }: { i: number; j: number }) => {
    if (curSeats[i][j].value === 0) return

    setCurBooks((prev) => prev.filter((item) => item.i !== i || item.j !== j))

    return setCurSeats((prev) => {
      const newSeats = JSON.parse(JSON.stringify(prev))

      newSeats[i][j].isAvailable = newSeats[i][j].isAvailable === false && true

      return newSeats
    })
  }

  return (
    <div className='mt-3 p-2 border'>
      <div className='flex items-center space-x-2'>
        <div className='w-7 h-7 grid place-items-center bg-red-500 rounded-full'>
          <Armchair className='w-5 h-5 text-white' />
        </div>
        <span className='font-semibold'>Chọn các ghế ngồi</span>
      </div>
      <div className='mt-3'>
        <div className='w-fit h-[180px] border border-l-8 border-primary rounded'>
          <div className='flex h-full'>
            <div className='w-fit flex items-end'>
              <ShipWheel className='w-7 h-7 text-gray-500 mx-1 mb-4' />
            </div>
            <div className='w-fit px-2 border-l-2 border-primary'>
              {curSeats.map((row, i) => (
                <div
                  key={i}
                  className={twMerge('flex justify-end gap-5', `w-[calc(100%/${row.length})]`, i === 2 && 'mt-3')}
                >
                  {row.map((seat, j) =>
                    seat.value === 1 ? (
                      <SeatItem
                        handleBookSeat={() => handleBookSeat({ i, j, seatNum: row.length * i + j + 1 })}
                        key={j}
                        seat={seat}
                        row={row}
                        i={i}
                        j={j}
                      />
                    ) : (
                      <div key={j} className='w-6 h-6'></div>
                    )
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className='mt-5'>
        <div className='text-sm font-semibold'>Các ghế đã đặt</div>
        <div className='flex items-center gap-4 flex-wrap mt-1'>
          {curBooks.map((curBook) => (
            <div key={curBook.seatNum} className='flex items-center p-1 border'>
              <span className='text font-semibold'>{curBook.seatNum}</span>
              <div
                onClick={() => handleCancelSeat({ i: curBook.i, j: curBook.j })}
                className='p-1 text-sm text-primary underline cursor-pointer hover:font-bold'
              >
                Hủy
              </div>
            </div>
          ))}
        </div>
        <div className='mt-2 text-sm font-semibold'>
          Thành tiền:
          <span className='ml-1 text-primary'>{new Intl.NumberFormat('en-DE').format(155000 * curBooks.length)} ₫</span>
        </div>
      </div>
    </div>
  )
}

export function SeatItem({ seat, row, i, j, handleBookSeat }: ISeatItemProps) {
  return (
    <div
      onClick={handleBookSeat}
      className={twMerge('w-fit group select-none', seat.isAvailable && 'cursor-pointer')}
      title={seat.isAvailable ? 'Còn trống' : 'Đã đặt'}
    >
      <span
        className={twMerge('block text-xs text-center group-hover:text-primary', !seat.isAvailable && 'text-primary')}
      >
        {row.length * i + j + 1}
      </span>
      <Armchair
        className={twMerge(
          'w-6 h-6 rotate-90 text-gray-600 group-hover:text-primary',
          !seat.isAvailable && 'text-primary'
        )}
      />
    </div>
  )
}
