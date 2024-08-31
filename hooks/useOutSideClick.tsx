'use client'

import useSearchStore from '@/stores/search.store'
import { useEffect } from 'react'

export default function useOutSideClick(ref: any, excludeRefs: any[] = []) {
  const { setSuggestion } = useSearchStore()

  /**
   * Hook that alerts clicks outside of the passed ref
   */
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event: any) {
      if (
        ref.current &&
        !ref.current.contains(event.target) &&
        !excludeRefs.some((exRef) => exRef.current && exRef.current.contains(event.target))
      ) {
        return setSuggestion('')
      }
    }
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [ref])
}
