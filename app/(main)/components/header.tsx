import { Menu, MenuCustomItem, MenuLinkItem } from '@/components/menu'
import { ROUTES } from '@/common/constants/routes.constant'
import UserMenuItem from './user-menu-item'

export default function Header() {
  return (
    <header className='max-h-[100px] h-[100px] bg-white shadow sticky top-0 left-0 right-0 z-50'>
      <div className='container h-full flex items-center justify-between'>
        <div className='text-primary'>Logo here</div>
        <Menu>
          <MenuLinkItem path={ROUTES.home.path}>{ROUTES.home.name}</MenuLinkItem>
          <MenuLinkItem path={ROUTES.tickets_booking.path}>{ROUTES.tickets_booking.name}</MenuLinkItem>
          <MenuLinkItem path={ROUTES.tickets_cancellation.path}>{ROUTES.tickets_cancellation.name}</MenuLinkItem>
          <MenuCustomItem>
            <UserMenuItem />
          </MenuCustomItem>
        </Menu>
      </div>
    </header>
  )
}
