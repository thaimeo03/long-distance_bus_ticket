export const ROUTES = {
  home: {
    path: '/',
    name: 'Trang chủ'
  },
  users: {
    path: '/users',
    name: 'Tài khoản'
  },
  login: {
    path: '/login',
    name: 'Đăng nhập'
  },
  register: {
    path: '/register',
    name: 'Đăng ký'
  },
  tickets_booking: {
    path: '/tickets/booking',
    name: 'Vé xe khách'
  },
  tickets_cancellation: {
    path: '/tickets/cancellation',
    name: 'Hủy vé'
  }
} as const
