import { create } from 'zustand'

interface UserState {
  isAuth: boolean
  userInfo: any
  setIsAuth: (isAuth: boolean) => void
  setUserInfo: (userInfo: any) => void
}

const useUserStore = create<UserState>((set) => ({
  isAuth: false,
  userInfo: null,
  setIsAuth: (isAuth: boolean) => set({ isAuth }),
  setUserInfo: (userInfo: any) => set({ userInfo })
}))

export default useUserStore
