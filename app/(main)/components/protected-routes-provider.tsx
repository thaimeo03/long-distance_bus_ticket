'use client'
import { ROUTES } from '@/common/constants/routes.constant'
import useUserStore from '@/stores/user.store'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function ProtectedRoutesProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const { isAuth } = useUserStore()

  if (!isAuth) {
    router.push(ROUTES.login.path)
  }

  useEffect(() => {
    if (!isAuth) {
      router.push(ROUTES.login.path)
    }
  }, [isAuth])

  return isAuth ? <>{children}</> : null
}
