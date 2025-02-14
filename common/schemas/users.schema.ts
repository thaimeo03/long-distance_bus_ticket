import * as yup from 'yup'
import { IUpdateProfileBody } from '../interfaces/users.interface'

export const IRegisterSchema = yup.object({
  fullName: yup
    .string()
    .min(3, 'Họ tên phải có độ dài lớn hơn 3 ký tự')
    .matches(/^[\p{L} ]+$/u, { message: 'Họ tên không chứa số và ký tự đặc biệt' })
    .required('Vui lòng nhập họ và tên'),
  email: yup.string().email('Email không hợp lệ').required('Vui lòng nhập email'),
  phoneNumber: yup
    .string()
    .matches(/^[0-9]{10}$/, 'Số điện thoại phải có độ dài 10 ký tự và chỉ chứa số')
    .required('Vui lòng nhập số điện thoại'),
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

export const IUpdateProfileSchema = yup.object<IUpdateProfileBody>({
  fullName: yup
    .string()
    .min(3, 'Họ tên phải có độ dài lớn hơn 3 ký tự')
    .matches(/^[\p{L} ]+$/u, { message: 'Họ tên không chứa số và ký tự đặc biệt' })
    .required('Vui lòng nhập họ và tên'),
  phoneNumber: yup
    .string()
    .matches(/^[0-9]{10}$/, 'Số điện thoại phải có độ dài 10 ký tự và chỉ chứa số')
    .required('Vui lòng nhập số điện thoại'),
  age: yup.number().min(1, 'Vui lòng điền đầy đủ tuổi').max(100, 'Vui lòng điền đầy đủ tuổi')
} as const)

export const IForgotPasswordSchema = yup.object({
  email: yup.string().email('Email không hợp lệ').required('Vui lòng điền email')
})

export const IResetPasswordSchema = yup.object({
  newPassword: yup.string().min(6, 'Mãt khẩu phải có ít nhất 6 ký tự').required('Vui lòng nhập mật khẩu'),
  confirmNewPassword: yup
    .string()
    .oneOf([yup.ref('newPassword')], 'Mật khẩu không trùng nhau')
    .required('Vui lòng xác nhận mật khẩu')
})
