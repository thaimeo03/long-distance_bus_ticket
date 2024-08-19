'use client'

import { usePathname } from 'next/navigation'

export default function Thumbnail() {
  const pathname = usePathname()

  if (pathname !== '/') return null

  return (
    <div>
      <img
        src='https://s3.rdbuz.com/web/images/vnm/vnmBannerNew.webp'
        alt='thumb'
        className='absolute w-full h-[520px] object-fill'
      />
    </div>
  )
}
