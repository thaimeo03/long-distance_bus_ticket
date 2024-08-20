import BusList from './bus-list'
import SortSide from './sort-side'

export default function BusListSide() {
  return (
    <div className='ml-3'>
      <SortSide />
      <BusList />
    </div>
  )
}
