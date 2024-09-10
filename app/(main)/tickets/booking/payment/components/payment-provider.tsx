'use client'

import { ROUTES } from '@/common/constants/routes.constant'
import useBookingInfoStore from '@/stores/booking.store'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function PaymentProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const { bookingId } = useBookingInfoStore()

  useEffect(() => {
    if (!bookingId) router.push(ROUTES.tickets_booking.path)
  }, [bookingId])

  return <>{children}</>
}
