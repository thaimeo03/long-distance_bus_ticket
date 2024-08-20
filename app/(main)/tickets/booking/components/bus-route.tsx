import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export default function BusRoute() {
  return (
    <div className='flex space-x-2 px-6 py-4 border-b-2 items-center'>
      <span className='max-w-[150px] line-clamp-1 text-sm font-semibold'>Bến xe Giáp Bát (Hà nội)</span>
      <ArrowRight className='w-4 h-4 text-foreground' />
      <span className='max-w-[150px] line-clamp-1 text-sm font-semibold'>Thái Bình (Tất cả địa điểm)</span>
      <span className='px-2 border-l border-x border-x-foreground text-sm font-semibold'>20 tháng 8</span>
      <Button
        variant='outline'
        className='max-h-8 py-0 px-8 bg-red-500 text-primary-foreground hover:bg-red-600 hover:text-primary-foreground'
      >
        Thay đổi
      </Button>
    </div>
  )
}
