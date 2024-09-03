import { DataResponse } from '@/common/interfaces/response.interface'
import api from './api'
import { IProcessPaymentQuery, IProcessPaymentResponse } from '@/common/interfaces/payment.interface'

export const processPayment = async (query: IProcessPaymentQuery) => {
  const res = await api.get<DataResponse<IProcessPaymentResponse>>('/payments/pay', { params: query })
  return res.data
}
