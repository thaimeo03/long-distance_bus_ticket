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
import { yupResolver } from '@hookform/resolvers/yup'
import { ICreateRouteDetailsSchema } from '@/common/schemas/routes.schema'

export default function AddRouteForm() {
  // Hooks
  const [isOpen, setIsOpen] = useState(false)

  const {
    register,
    setValue,
    watch,
    reset,
    handleSubmit,
    formState: { errors }
  } = useForm<ICreateRouteDetailsBody>({
    defaultValues: {
      startLocation: '',
      endLocation: '',
      distanceKm: 0,
      durationHours: 0,
      routeStops: [
        { location: '', distanceFromStartKm: undefined, arrivalTime: '' },
        { location: '', distanceFromStartKm: undefined, arrivalTime: '' }
      ]
    },
    resolver: yupResolver(ICreateRouteDetailsSchema)
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
        <Button>Thêm chi tiết tuyến đường</Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[600px] h-[80vh] flex flex-col' aria-description='Add New Route Details'>
        <DialogHeader>
          <DialogTitle>Chi tiết tuyến đường</DialogTitle>
        </DialogHeader>
        <ScrollArea className='flex-grow pr-4'>
          <form onSubmit={handleSubmit(handleSubmitRouteDetailsForm)} className='space-y-4 px-2'>
            <div className='relative'>
              <Label htmlFor='startLocation'>Điểm đầu</Label>
              <Input id='startLocation' {...register('startLocation')} required />
              <span className='absolute -bottom-4 text-xs text-red-600'>{errors.startLocation?.message}</span>
            </div>
            <div className='relative'>
              <Label htmlFor='endLocation'>Điểm cuối</Label>
              <Input id='endLocation' {...register('endLocation')} required />
              <span className='absolute -bottom-4 text-xs text-red-600'>{errors.endLocation?.message}</span>
            </div>
            <div className='relative'>
              <Label htmlFor='distanceKm'>Khoảng cách (km)</Label>
              <Input id='distanceKm' type='number' {...register('distanceKm', { valueAsNumber: true })} required />
              <span className='absolute -bottom-4 text-xs text-red-600'>{errors.distanceKm?.message}</span>
            </div>
            <div className='relative'>
              <Label htmlFor='durationHours'>Khoảng thời gian (giờ)</Label>
              <Input id='durationHours' type='text' {...register('durationHours', { valueAsNumber: true })} required />
              <span className='absolute -bottom-4 text-xs text-red-600'>{errors.durationHours?.message}</span>
            </div>
            <div className='space-y-2'>
              <Label>Các điểm dừng</Label>

              {routeStops.map((_, index) => (
                <div key={index} className='space-y-2 border-t pt-4'>
                  <div className='flex justify-between items-center'>
                    <Label>Điểm dừng {index + 1}</Label>
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
                  <Input placeholder='Địa điểm' {...register(`routeStops.${index}.location`)} required />
                  <Input
                    type='number'
                    placeholder='Khoảng cách từ điểm xuất phát (km)'
                    {...register(`routeStops.${index}.distanceFromStartKm`, { valueAsNumber: true })}
                    required
                  />
                  <div className='relative w-3/5'>
                    <span className='absolute right-4 top-1/2 -translate-y-1/2 text-sm text-muted-foreground select-none'>
                      Thời gian đến
                    </span>
                    <Input type='datetime-local' {...register(`routeStops.${index}.arrivalTime`)} required />
                  </div>
                </div>
              ))}
              <Button type='button' variant='outline' onClick={handleAddStop} className='w-full'>
                <Plus className='h-4 w-4 mr-2' /> Thêm điểm dừng
              </Button>
            </div>
            <Button type='submit' className='w-full'>
              Thêm mới
            </Button>
          </form>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}
