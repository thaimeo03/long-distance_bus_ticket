import { IProfileResponse } from '@/common/interfaces/users.interface'
import { create } from 'zustand'

interface UserState {
  isAuth: boolean
  userInfo: IProfileResponse | null
  forgotPasswordTTL: number | null
  email: string | null

  setIsAuth: (isAuth: boolean) => void
  setUserInfo: (userInfo: IProfileResponse | null) => void
  setForgotPasswordTTL: (forgotPasswordTTL: number | null) => void
  setEmail: (email: string | null) => void
}

const useUserStore = create<UserState>((set) => ({
  isAuth: false,
  userInfo: null,
  forgotPasswordTTL: null,
  email: null,

  setIsAuth: (isAuth: boolean) => set({ isAuth }),
  setUserInfo: (userInfo: IProfileResponse | null) => set({ userInfo }),
  setForgotPasswordTTL: (forgotPasswordTTL: number | null) => set({ forgotPasswordTTL }),
  setEmail: (email: string | null) => set({ email })
}))

export default useUserStore
