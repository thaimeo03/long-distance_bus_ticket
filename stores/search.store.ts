import { create } from 'zustand'

interface SearchState {
  suggestion: string
  setSuggestion: (isSuggested: string) => void
}

const useSearchStore = create<SearchState>((set) => ({
  suggestion: '',
  setSuggestion: (suggestion: string) => set({ suggestion })
}))

export default useSearchStore
