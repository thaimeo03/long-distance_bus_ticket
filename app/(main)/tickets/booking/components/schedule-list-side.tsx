import ScheduleList from './schedule-list'
import SortSide from './sort-side'

export default function ScheduleListSide() {
  return (
    <div className='ml-3'>
      <SortSide />
      <ScheduleList />
    </div>
  )
}
