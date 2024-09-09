import * as yup from 'yup'

export const IRegisterSchema = yup.object({
  fullName: yup.string().required('Vui lòng nhập họ và tên'),
  email: yup.string().email('Email không hợp lệ').required('Vui lòng nhập email'),
  phoneNumber: yup.string().min(10, 'Vui lòng điền đầy đủ số điện thoại').required('Vui lòng nhập số điện thoại'),
  password: yup.string().min(6, 'Mãt khẩu phải có ít nhất 6 ký tự').required('Vui lòng nhập mật khẩu'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Mật khẩu không trùng nhau')
    .required('Vui lòng xác nhận mật khẩu')
})

export const ILoginSchema = yup.object({
  email: yup.string().email('Email không hợp lệ').required('Vui lòng nhập email'),
  password: yup.string().min(6, 'Mãt khẩu phải có ít nhất 6 ký tự').required('Vui lòng nhập mật khẩu')
})
