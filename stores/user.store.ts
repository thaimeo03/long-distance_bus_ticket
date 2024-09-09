import { IProfileResponse } from '@/common/interfaces/users.interface'
import { create } from 'zustand'

interface UserState {
  isAuth: boolean
  userInfo: IProfileResponse | null
  setIsAuth: (isAuth: boolean) => void
  setUserInfo: (userInfo: IProfileResponse) => void
}

const useUserStore = create<UserState>((set) => ({
  isAuth: false,
  userInfo: null,
  setIsAuth: (isAuth: boolean) => set({ isAuth }),
  setUserInfo: (userInfo: IProfileResponse) => set({ userInfo })
}))

export default useUserStore
