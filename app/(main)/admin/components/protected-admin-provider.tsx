'use client'

import { ROUTES } from '@/common/constants/routes.constant'
import { Role } from '@/common/enums/users.enum'
import useUserStore from '@/stores/user.store'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function ProtectedAdminProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const { isAuth, userInfo } = useUserStore()

  useEffect(() => {
    if (!isAuth || !userInfo || userInfo.role !== Role.Admin) {
      router.push(ROUTES.home.path)
    }
  }, [isAuth, userInfo])

  return !isAuth || !userInfo || userInfo.role !== Role.Admin ? null : <>{children}</>
}
