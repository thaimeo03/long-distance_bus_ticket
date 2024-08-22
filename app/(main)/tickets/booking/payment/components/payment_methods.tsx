import { Coins, CreditCard } from 'lucide-react'

export default function PaymentMethods() {
  return (
    <div className='w-1/3'>
      <h1 className='text-xl font-semibold'>Chọn phương thức thanh toán</h1>

      <ul className='mt-3 border shadow-md p-2 rounded'>
        <li className='cursor-pointer hover:text-primary w-full border-b-2 px-2 py-4 hover:bg-gray-200'>
          <div className='flex items-center space-x-2'>
            <CreditCard className='w-6 h-6 text-emerald-500' />
            <span className='font-semibold text-gray-700'>Stripe</span>
          </div>
        </li>
        <li className='cursor-pointer hover:text-primary w-full px-2 py-4 hover:bg-gray-200'>
          <div className='flex items-center space-x-2'>
            <Coins className='w-6 h-6 text-yellow-500' />
            <span className='font-semibold text-gray-700'>Tiền điện tử</span>
          </div>
        </li>
      </ul>
    </div>
  )
}
