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
  },
  google_auth: {
    path: `${process.env.NEXT_PUBLIC_HOST_URL}/auth/google`,
    name: 'Backend host'
  },
  admin: {
    path: '/admin',
    name: 'Trang quản trị'
  },
  forgot_password: {
    path: '/forgot-password',
    name: 'Quên mật khẩu'
  },
  forgot_password_otp: {
    path: '/forgot-password/otp',
    name: 'OTP quên mật khẩu'
  },
  forgot_password_reset: {
    path: '/forgot-password/reset',
    name: 'Đặt mật khẩu mới'
  }
} as const
