'use client'

import { getProfile } from '@/apis/users.api'
import useUserStore from '@/stores/user.store'
import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'

export default function GetUserInfoProvider({ children }: { children: React.ReactNode }) {
  const { isAuth, setIsAuth, setUserInfo } = useUserStore()
  const { data, isSuccess } = useQuery({
    queryKey: ['me'],
    queryFn: getProfile
  })

  useEffect(() => {
    if (isSuccess) {
      if (isAuth === false) {
        setIsAuth(true)
      }
      setUserInfo(data.data)
    }
  }, [data, isSuccess])

  return <>{children}</>
}
