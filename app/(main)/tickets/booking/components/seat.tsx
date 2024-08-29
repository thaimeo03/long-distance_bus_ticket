'use client'
import { ISeat } from '@/common/interfaces/seats.interface'
import { Button } from '@/components/ui/button'
import useScheduleStore from '@/stores/schedule.store'
import { Armchair, ShipWheel } from 'lucide-react'
import { useState } from 'react'
import { twMerge } from 'tailwind-merge'

export interface ISeatProps {
  seats: ISeat[]
}

export interface ISeatItemProps {
  seat: ISeat
  handleBookSeat?: () => void
}

function transformSeats(seats: ISeat[]): (ISeat | null)[][] {
  const matrixSeats: (ISeat | null)[][] = []

  // 4 rows and if seats.length is not divisible by 4, add empty seat before the last row
  const cols = Math.ceil(seats.length / 4)
  let rest = seats.length % 4
  for (let r = 0; r < 4; r++) {
    const row: (ISeat | null)[] = []

    if (r === 3 && rest !== 0) {
      while (rest--) {
        row.push(null)
      }
    }

    for (let c = 0; c < cols; c++) {
      if (r * cols + c < seats.length) {
        row.push(seats[r * cols + c])
      }
    }

    matrixSeats.push(row)
  }

  return matrixSeats
}

export function Seat({ seats }: ISeatProps) {
  const [curSeats, setCurSeats] = useState<ISeat[][]>(transformSeats(seats) as ISeat[][])
  const [curBooks, setCurBooks] = useState<number[]>([])

  const handleBookSeat = ({ i, j, seatNum }: { i: number; j: number; seatNum: number }) => {
    if (curSeats[i][j].isAvailable === true) setCurBooks((prev) => [...prev, seatNum])

    return setCurSeats((prev) => {
      const newSeats = JSON.parse(JSON.stringify(prev))

      newSeats[i][j].isAvailable = newSeats[i][j].isAvailable === true && false

      return newSeats
    })
  }

  const handleCancelSeat = (seatNum: number) => {
    setCurBooks((prev) => prev.filter((item) => item !== seatNum))

    return setCurSeats((prev) => {
      const newSeats = JSON.parse(JSON.stringify(prev)) as ISeat[][]

      newSeats.map((row) =>
        row.map((seat) => {
          if (seat?.seatNumber === seatNum) {
            seat.isAvailable = true
          }

          return seat
        })
      )

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
                    seat ? (
                      <SeatItem
                        handleBookSeat={() => handleBookSeat({ i, j, seatNum: seat.seatNumber })}
                        key={j}
                        seat={seat}
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
            <div key={curBook} className='flex items-center p-1 border'>
              <span className='text font-semibold'>{curBook}</span>
              <div
                onClick={() => handleCancelSeat(curBook)}
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

export function SeatItem({ seat, handleBookSeat }: ISeatItemProps) {
  return (
    <div
      onClick={handleBookSeat}
      className={twMerge('w-fit group select-none', seat.isAvailable && 'cursor-pointer')}
      title={seat.isAvailable ? 'Còn trống' : 'Đã đặt'}
    >
      <span
        className={twMerge('block text-xs text-center group-hover:text-primary', !seat.isAvailable && 'text-primary')}
      >
        {seat.seatNumber}
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
