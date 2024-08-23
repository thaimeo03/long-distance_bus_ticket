export const ROUTES = {
  home: {
    path: '/',
    name: 'Trang chủ'
  },
  users: {
    path: '/users',
    name: 'Thông tin tài khoản'
  },
  login: {
    path: '/login',
    name: 'Đăng nhập'
  },
  register: {
    path: '/register',
    name: 'Đăng ký'
  },
  logout: {
    path: '/login',
    name: 'Đăng xuất'
  },
  tickets_booking: {
    path: '/tickets/booking',
    name: 'Vé xe khách'
  },
  tickets_payment: {
    path: '/tickets/booking/payment',
    name: 'Thanh toán'
  },
  tickets_cancellation: {
    path: '/tickets/cancellation',
    name: 'Hủy vé'
  }
} as const
