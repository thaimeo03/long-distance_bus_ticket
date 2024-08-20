import BusListSide from './components/bus-list-side'
import BusFilterSide from './components/bus-filter-side'
import BusRoute from './components/bus-route'

export default function Booking() {
  return (
    <div>
      <BusRoute />

      <div className='p-6 grid grid-cols-11'>
        <div className='col-span-2'>
          <BusFilterSide />
        </div>
        <div className='col-span-9'>
          <BusListSide />
        </div>
      </div>
    </div>
  )
}
