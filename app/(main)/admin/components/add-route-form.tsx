'use client'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Plus, Minus } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { ICreateRouteDetailsBody } from '@/common/interfaces/routes.interface'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createRouteDetails } from '@/apis/route.api'
import { ErrorResponse } from '@/common/interfaces/response.interface'
import { toast } from '@/hooks/use-toast'

export default function AddRouteForm() {
  // Hooks
  const [isOpen, setIsOpen] = useState(false)

  const { register, setValue, watch, reset, handleSubmit } = useForm<ICreateRouteDetailsBody>({
    defaultValues: {
      startLocation: '',
      endLocation: '',
      distanceKm: 0,
      durationHours: 0,
      routeStops: [
        { location: '', distanceFromStartKm: 0, arrivalTime: '' },
        { location: '', distanceFromStartKm: 0, arrivalTime: '' }
      ]
    }
  })

  const queryClient = useQueryClient()

  const createRouteDetailsMutation = useMutation({
    mutationFn: (data: ICreateRouteDetailsBody) => createRouteDetails(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['all-route-details'] })
    },
    onError: (error: ErrorResponse) => {
      toast({
        title: (error.response?.data?.message as string) || error.message,
        variant: 'destructive'
      })
    }
  })

  const routeStops = watch('routeStops')

  // Handlers
  const handleAddStop = () => {
    setValue('routeStops', [...routeStops, { location: '', distanceFromStartKm: 0, arrivalTime: '' }])
  }

  const handleRemoveStop = (index: number) => {
    const newRouteStops = routeStops.filter((_, i) => i !== index)
    setValue('routeStops', newRouteStops)
  }

  const handleSubmitRouteDetailsForm = (data: ICreateRouteDetailsBody) => {
    createRouteDetailsMutation.mutate(data)

    // Reset form
    reset()
    // Close dialog
    setIsOpen(false)
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button>Add New Route</Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[600px] h-[80vh] flex flex-col' aria-description='Add New Route Details'>
        <DialogHeader>
          <DialogTitle>Add New Route</DialogTitle>
        </DialogHeader>
        <ScrollArea className='flex-grow pr-4'>
          <form onSubmit={handleSubmit(handleSubmitRouteDetailsForm)} className='space-y-4 px-2'>
            <div>
              <Label htmlFor='startLocation'>Start Location</Label>
              <Input id='startLocation' {...register('startLocation')} required />
            </div>
            <div>
              <Label htmlFor='endLocation'>End Location</Label>
              <Input id='endLocation' {...register('endLocation')} required />
            </div>
            <div>
              <Label htmlFor='distanceKm'>Distance (km)</Label>
              <Input id='distanceKm' type='number' {...register('distanceKm', { valueAsNumber: true })} required />
            </div>
            <div>
              <Label htmlFor='durationHours'>Duration (hours)</Label>
              <Input id='durationHours' {...register('durationHours', { valueAsNumber: true })} required />
            </div>
            <div className='space-y-2'>
              <Label>Route Stops</Label>

              {routeStops.map((_, index) => (
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
                  <Input placeholder='Location' {...register(`routeStops.${index}.location`)} required />
                  <Input
                    type='number'
                    placeholder='Distance from start (km)'
                    {...register(`routeStops.${index}.distanceFromStartKm`, { valueAsNumber: true })}
                    required
                  />
                  <Input type='datetime-local' {...register(`routeStops.${index}.arrivalTime`)} required />
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
