import * as yup from 'yup'

export const ICancelBookingSchema = yup.object({
  ticketCode: yup
    .string()
    .matches(/^[a-z0-9]{8}$/, 'Mã vé độ dài 8 ký tự thường và không chứa ký tự đặc biệt')
    .required('Vui lòng nhập mã vé'),
  email: yup.string().email('Email không hợp lệ').required('Vui lòng nhập email')
})
