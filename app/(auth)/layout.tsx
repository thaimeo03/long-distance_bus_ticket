import Image from 'next/image'
import authTheme from '@/public/images/auth-theme.jpg'

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='w-full lg:grid lg:grid-cols-2 h-screen'>
      <div className='flex items-center justify-center py-12'>
        <div className='mx-auto grid w-[400px] gap-6 px-6 py-8 border border-gray-300 rounded'>{children}</div>
      </div>
      <div className='hidden bg-muted lg:block'>
        <Image
          src={authTheme}
          alt='Image'
          width='1920'
          height='1080'
          className='h-full w-full object-right object-cover dark:brightness-[0.2] dark:grayscale'
        />
      </div>
    </div>
  )
}
