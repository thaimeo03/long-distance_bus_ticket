'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Plus, Minus } from 'lucide-react'
import { Route } from '../types/route'

interface AddRouteFormProps {
  onAddRoute: (newRoute: Route) => void
}

export default function AddRouteForm({ onAddRoute }: AddRouteFormProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [formData, setFormData] = useState({
    startLocation: '',
    endLocation: '',
    distanceKm: 0,
    durationHours: 0,
    routeStops: [
      { location: '', distanceFromStartKm: 0, arrivalTime: '' },
      { location: '', distanceFromStartKm: 0, arrivalTime: '' }
    ]
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, index?: number) => {
    const { name, value } = e.target
    if (index !== undefined && name.startsWith('routeStops')) {
      const newRouteStops = [...formData.routeStops]
      newRouteStops[index] = { ...newRouteStops[index], [name.split('.')[1]]: value }
      setFormData({ ...formData, routeStops: newRouteStops })
    } else {
      setFormData({ ...formData, [name]: value })
    }
  }

  const handleAddStop = () => {
    setFormData({
      ...formData,
      routeStops: [...formData.routeStops, { location: '', distanceFromStartKm: 0, arrivalTime: '' }]
    })
  }

  const handleRemoveStop = (index: number) => {
    const newRouteStops = formData.routeStops.filter((_, i) => i !== index)
    setFormData({ ...formData, routeStops: newRouteStops })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const newRoute: Route = {
      id: Date.now().toString(),
      startLocation: formData.startLocation,
      endLocation: formData.endLocation,
      distanceKm: Number(formData.distanceKm),
      durationHours: Number(formData.durationHours),
      stops: formData.routeStops.map((stop, index) => ({
        location: stop.location,
        datetime: new Date(stop.arrivalTime).toISOString(),
        priceToNextStop: index < formData.routeStops.length - 1 ? 50 : undefined, // Example price
        distanceFromStartKm: Number(stop.distanceFromStartKm)
      }))
    }
    onAddRoute(newRoute)
    setIsOpen(false)
    // Reset form
    setFormData({
      startLocation: '',
      endLocation: '',
      distanceKm: 0,
      durationHours: 0,
      routeStops: [
        { location: '', distanceFromStartKm: 0, arrivalTime: '' },
        { location: '', distanceFromStartKm: 0, arrivalTime: '' }
      ]
    })
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button>Add New Route</Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[600px] h-[80vh] flex flex-col'>
        <DialogHeader>
          <DialogTitle>Add New Route</DialogTitle>
        </DialogHeader>
        <ScrollArea className='flex-grow pr-4'>
          <form onSubmit={handleSubmit} className='space-y-4 px-2'>
            <div>
              <Label htmlFor='startLocation'>Start Location</Label>
              <Input
                id='startLocation'
                name='startLocation'
                value={formData.startLocation}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <Label htmlFor='endLocation'>End Location</Label>
              <Input
                id='endLocation'
                name='endLocation'
                value={formData.endLocation}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <Label htmlFor='distanceKm'>Distance (km)</Label>
              <Input
                id='distanceKm'
                name='distanceKm'
                type='number'
                value={formData.distanceKm}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <Label htmlFor='durationHours'>Duration (hours)</Label>
              <Input
                id='durationHours'
                name='durationHours'
                type='number'
                step='0.1'
                value={formData.durationHours}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className='space-y-2'>
              <Label>Route Stops</Label>
              {formData.routeStops.map((stop, index) => (
                <div key={index} className='space-y-2 border-t pt-4'>
                  <div className='flex justify-between items-center'>
                    <Label>Stop {index + 1}</Label>
                    {index > 1 && (
                      <Button
                        type='button'
                        variant='outline'
                        size='icon'
                        onClick={() => handleRemoveStop(index)}
                        aria-label={`Remove stop ${index + 1}`}
                      >
                        <Minus className='h-4 w-4' />
                      </Button>
                    )}
                  </div>
                  <Input
                    name={`routeStops.location`}
                    placeholder='Location'
                    value={stop.location}
                    onChange={(e) => handleInputChange(e, index)}
                    required
                  />
                  <Input
                    name={`routeStops.distanceFromStartKm`}
                    type='number'
                    placeholder='Distance from start (km)'
                    value={stop.distanceFromStartKm}
                    onChange={(e) => handleInputChange(e, index)}
                    required
                  />
                  <Input
                    name={`routeStops.arrivalTime`}
                    type='datetime-local'
                    value={stop.arrivalTime}
                    onChange={(e) => handleInputChange(e, index)}
                    required
                  />
                </div>
              ))}
              <Button type='button' variant='outline' onClick={handleAddStop} className='w-full'>
                <Plus className='h-4 w-4 mr-2' /> Add Stop
              </Button>
            </div>
            <Button type='submit' className='w-full'>
              Add Route
            </Button>
          </form>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}
