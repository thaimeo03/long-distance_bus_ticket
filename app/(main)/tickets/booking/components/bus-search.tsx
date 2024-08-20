import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { Search } from 'lucide-react'
import BusSea from '@/app/(main)/components/bus-search'

export default function BusSearch() {
  return (
    <div className='mr-10'>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant='outline' className='h-7 flex space-x-1 font-normal border-primary hover:text-primary'>
            <Search className='w-4 h-4' />
            <span>Tìm kiếm xe khách</span>
          </Button>
        </DialogTrigger>
        <DialogContent className='h-[35%] w-full max-w-[80%] bg-neutral-300 bg-opacity-30'>
          <div className='text-2xl font-semibold text-white mx-auto'>Tìm kiếm xe khách</div>
          <BusSea />
        </DialogContent>
      </Dialog>
    </div>
  )
}
