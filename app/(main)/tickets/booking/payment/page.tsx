import PaymentMethods from './components/payment_methods'
import Summary from './components/summary'

export default function PaymentPage() {
  return (
    <div className='h-[calc(100vh-233px)] container'>
      <div className='mt-8 flex gap-8'>
        <PaymentMethods />
        <Summary />
      </div>
    </div>
  )
}
