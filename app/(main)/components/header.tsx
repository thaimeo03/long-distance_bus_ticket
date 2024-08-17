import { Header as AntdHeader } from 'antd/es/layout/layout'
import { Menu } from 'antd'
import { ItemType, MenuItemType } from 'antd/es/menu/interface'
import { HomeOutlined, ShopOutlined, UserOutlined, WarningOutlined } from '@ant-design/icons'
import Link from 'next/link'
import { ROUTES } from '@/common/constants/routes.constant'

const items: ItemType<MenuItemType>[] = [
  { key: '1', label: <Link href={ROUTES.home.path}>{ROUTES.home.name}</Link>, icon: <HomeOutlined /> },
  {
    key: '2',
    label: <Link href={ROUTES.tickets_booking.path}>{ROUTES.tickets_booking.name}</Link>,
    icon: <ShopOutlined />
  },
  {
    key: '3',
    label: <Link href={ROUTES.tickets_cancellation.path}>{ROUTES.tickets_cancellation.name}</Link>,
    icon: <WarningOutlined />
  },
  {
    key: '4',
    label: 'Tài khoản',
    icon: <UserOutlined />,
    children: [
      { key: '4-1', label: <Link href='/register'>Đăng ký</Link> },
      { key: '4-2', label: <Link href='/login'>Đăng nhập</Link> }
    ]
  }
]

export default function Header() {
  return (
    <AntdHeader
      style={{
        backgroundColor: 'white',
        display: 'flex',
        alignItems: 'center',
        padding: '0'
      }}
    >
      <span style={{ paddingLeft: 86 }}>Logo here</span>
      <Menu
        theme='light'
        mode='horizontal'
        defaultSelectedKeys={['1']}
        items={items}
        style={{
          justifyContent: 'end',
          fontSize: 16,
          fontWeight: 500,
          gap: 8,
          flex: 1,
          minWidth: 0,
          padding: '0 86px'
        }}
      />
    </AntdHeader>
  )
}
