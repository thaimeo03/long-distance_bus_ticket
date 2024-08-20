'use client'
import { ROUTES } from '@/common/constants/routes.constant'
import { MenuLinkItem } from '@/components/menu'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import useUserStore from '@/stores/user.store'
import { User } from 'lucide-react'

export default function UserMenuItem() {
  const { isAuth, userInfo } = useUserStore()

  return (
    <Popover>
      <PopoverTrigger className='outline-none font-semibold'>
        {!isAuth ? (
          ROUTES.users.name
        ) : (
          <Avatar className='border border-black hover:border-primary'>
            <AvatarImage src={userInfo?.avatar} alt='@shadcn' />
            <AvatarFallback>
              <User />
            </AvatarFallback>
          </Avatar>
        )}
      </PopoverTrigger>
      <PopoverContent className='w-fit'>
        <MenuLinkItem path={!isAuth ? ROUTES.login.path : ROUTES.users.path} className='text-sm'>
          {!isAuth ? ROUTES.login.name : ROUTES.users.name}
        </MenuLinkItem>
        <MenuLinkItem path={!isAuth ? ROUTES.register.path : ROUTES.logout.path} className='text-sm mt-2'>
          {!isAuth ? ROUTES.register.name : ROUTES.logout.name}
        </MenuLinkItem>
      </PopoverContent>
    </Popover>
  )
}
