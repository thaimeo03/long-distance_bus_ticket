import { Menu, MenuCustomItem, MenuLinkItem } from '@/components/menu'
import { ROUTES } from '@/common/constants/routes.constant'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'

export default function Header() {
  return (
    <header className='max-h-[100px] h-[100px] bg-secondary shadow-lg fixed top-0 left-0 right-0 z-50'>
      <div className='container h-full flex items-center justify-between'>
        <div className='text-primary'>Logo here</div>
        <Menu>
          <MenuLinkItem path={ROUTES.home.path}>{ROUTES.home.name}</MenuLinkItem>
          <MenuLinkItem path={ROUTES.tickets_booking.path}>{ROUTES.tickets_booking.name}</MenuLinkItem>
          <MenuLinkItem path={ROUTES.tickets_cancellation.path}>{ROUTES.tickets_cancellation.name}</MenuLinkItem>
          <MenuCustomItem>
            <Popover>
              <PopoverTrigger className='outline-none font-semibold'>{ROUTES.users.name}</PopoverTrigger>
              <PopoverContent className='w-fit'>
                <MenuLinkItem path={ROUTES.login.path} className='text-sm'>
                  {ROUTES.login.name}
                </MenuLinkItem>
                <MenuLinkItem path={ROUTES.register.path} className='text-sm mt-2'>
                  {ROUTES.register.name}
                </MenuLinkItem>
              </PopoverContent>
            </Popover>
          </MenuCustomItem>
        </Menu>
      </div>
    </header>
  )
}
