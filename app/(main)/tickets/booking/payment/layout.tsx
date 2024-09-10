import PaymentProvider from './components/payment-provider'

export default function PaymentLayout({ children }: { children: React.ReactNode }) {
  return <PaymentProvider>{children}</PaymentProvider>
}
