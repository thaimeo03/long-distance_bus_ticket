import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Promotion() {
  return (
    <div className='w-full absolute z-10 bottom-0 translate-y-[50%] rounded-2xl bg-white p-8 shadow-lg'>
      <div className='flex justify-between'>
        <h2 className='text-2xl uppercase font-semibold'>Ưu đãi đang hot</h2>
        <Button
          variant='outline'
          className='text-lg rounded-full px-6 py-3 text-primary border-primary hover:text-white hover:bg-red-500'
        >
          Xem tất cả
        </Button>
      </div>
      <div className='mt-7 flex gap-6'>
        <Link href='' className='h-[168px] w-[20.3rem] rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600'>
          <div className='p-4 flex h-full w-full space-x-4'>
            <img
              src='https://st.redbus.in/Images/Offer180x80.png'
              alt=''
              className='w-[4.5rem] h-[4.5rem] self-center'
            />
            <div className='flex flex-col gap-2'>
              <span className='max-w-fit text-xs text-white px-2 py-1 rounded-full bg-black bg-opacity-20'>Vé xe</span>

              <h3 className='text-lg text-white font-semibold'>Tiết kiệm lên đến 25% cho đặt phòng</h3>

              <span className='text-xs text-white'>Hiệu lực đến 30 Th9</span>
            </div>
          </div>
        </Link>
        <Link href='' className='h-[168px] w-[20.3rem] rounded-xl bg-gradient-to-r from-blue-800 to-emerald-500'>
          <div className='p-4 flex h-full w-full space-x-4'>
            <img
              src='https://st.redbus.in/Images/GIAMGIAofferimage.png'
              alt=''
              className='w-[4.5rem] h-[4.5rem] self-center'
            />
            <div className='flex flex-col gap-2'>
              <span className='max-w-fit text-xs text-primary-foreground px-2 py-1 rounded-full bg-black bg-opacity-20'>
                Vé xe
              </span>

              <h3 className='text-lg text-white font-semibold'>Tiết kiệm lên đến 15%</h3>

              <span className='text-xs text-white'>Hiệu lực đến 30 Th9</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}
