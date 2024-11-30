'use client'

import { usePathname } from 'next/navigation'
import Banner from '@/public/images/vnmBannerNew.webp'
import Image from 'next/image'

export default function Thumbnail() {
  const pathname = usePathname()

  if (pathname !== '/') return null

  return (
    <div>
      <Image src={Banner} alt='thumb' className='absolute w-full h-[520px] object-fill' />
    </div>
  )
}
