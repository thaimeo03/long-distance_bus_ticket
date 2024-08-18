import { Menu, MenuCustomItem, MenuLinkItem } from '@/components/menu'
import { ROUTES } from '@/common/constants/routes.constant'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'

export default function Header() {
  return (
    <header className='max-h-[100px] h-[100px] bg-secondary shadow-lg'>
      <div className='container h-full flex items-center justify-between'>
        <div className='text-primary'>Logo here</div>
        <Menu>
          <MenuLinkItem path={ROUTES.home.path}>{ROUTES.home.name}</MenuLinkItem>
          <MenuLinkItem path={ROUTES.tickets_booking.path}>{ROUTES.tickets_booking.name}</MenuLinkItem>
          <MenuLinkItem path={ROUTES.tickets_cancellation.path}>{ROUTES.tickets_cancellation.name}</MenuLinkItem>
          <MenuCustomItem>
            <DropdownMenu>
              <DropdownMenuTrigger className='outline-none font-semibold'>{ROUTES.users.name}</DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <MenuLinkItem path={ROUTES.login.path}>{ROUTES.login.name}</MenuLinkItem>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <MenuLinkItem path={ROUTES.register.path}>{ROUTES.register.name}</MenuLinkItem>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </MenuCustomItem>
        </Menu>
      </div>
    </header>
  )
}
