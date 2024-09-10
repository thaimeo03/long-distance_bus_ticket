'use client'
import { logoutUser } from '@/apis/users.api'
import { ROUTES } from '@/common/constants/routes.constant'
import { ErrorResponse } from '@/common/interfaces/response.interface'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { useToast } from '@/hooks/use-toast'
import useUserStore from '@/stores/user.store'
import { useMutation } from '@tanstack/react-query'
import { User } from 'lucide-react'
import Link from 'next/link'

export default function UserMenuItem() {
  const { toast } = useToast()
  const { isAuth, setIsAuth, setUserInfo } = useUserStore()

  const logoutMutation = useMutation({
    mutationFn: () => logoutUser(),
    onSuccess: () => {
      setIsAuth(false)
      setUserInfo(null)
    },
    onError: (error: ErrorResponse) => {
      toast({
        title: (error.response?.data?.message as string) || error.message,
        variant: 'destructive'
      })
    }
  })

  const handleLogout = () => {
    logoutMutation.mutate()
  }

  return (
    <Popover>
      <PopoverTrigger className='outline-none font-semibold'>
        {!isAuth ? (
          ROUTES.users.name
        ) : (
          <Avatar className='border border-black hover:border-primary'>
            <AvatarImage src={undefined} alt='@shadcn' />
            <AvatarFallback>
              <User />
            </AvatarFallback>
          </Avatar>
        )}
      </PopoverTrigger>
      <PopoverContent className='w-fit font-medium'>
        {!isAuth ? (
          <div className='flex flex-col gap-1'>
            <Link href={ROUTES.login.path} className='text-sm hover:text-primary'>
              {ROUTES.login.name}
            </Link>
            <Link href={ROUTES.register.path} className='text-sm mt-2 hover:text-primary'>
              {ROUTES.register.name}
            </Link>
          </div>
        ) : (
          <div className='flex flex-col gap-1'>
            <Link href={ROUTES.users.path} className='text-sm hover:text-primary'>
              {ROUTES.users.name}
            </Link>
            <div onClick={handleLogout} className='text-sm mt-2 hover:text-primary cursor-pointer'>
              {ROUTES.logout.name}
            </div>
          </div>
        )}
      </PopoverContent>
    </Popover>
  )
}
