import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatTime(timeStamp: string) {
  const date = new Date(timeStamp)

  return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false })
}

export function formatDurationHoursTime(time: number) {
  const hours = Math.floor(time)
  const minutes = Math.round((time - hours) * 60)

  return `${hours}g ${minutes}ph`
}

export function formatMoney(money: number) {
  // 155000 -> 155.000
  return money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.') + ' ₫'
}

export function formatDate(date: string) {
  return new Date(date).toLocaleDateString('en-GB')
}
