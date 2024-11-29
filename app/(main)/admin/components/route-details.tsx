'use client'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import RouteGraph from './route-graph'
import { IRouteStopWithNextPrice } from '@/common/interfaces/route-stops.interface'
import { formateTimeAndDate, formatMoney } from '@/lib/utils'

interface RouteDetailsProps {
  stops: IRouteStopWithNextPrice[]
}

export default function RouteDetails({ stops }: RouteDetailsProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant='outline' size='sm'>
          Xem chi tiết
        </Button>
      </DialogTrigger>
      <DialogContent className='max-w-5xl'>
        <DialogHeader>
          <DialogTitle>Chi tiết tuyến đường</DialogTitle>
        </DialogHeader>
        <div className='mt-4'>
          <RouteGraph stops={stops} />
        </div>
        <div className='mt-4 max-h-40 overflow-y-auto'>
          {stops.map((stop, index) => (
            <div key={index} className='text-sm mb-2'>
              <span className='font-semibold'>{stop.location}</span> - {formateTimeAndDate(stop.arrivalTime)}
              {stop.priceToNextStop && (
                <span className='ml-2 text-primary'>{formatMoney(stop.priceToNextStop)} đến điểm tiếp theo</span>
              )}
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  )
}
