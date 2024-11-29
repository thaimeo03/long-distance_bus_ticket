import { Button } from '@/components/ui/button'
import BusSearch from '../components/bus-search'
import AppInstall from './components/appInstall'
import Intro from './components/intro'
import Partner from './components/parter'
import Promotion from './components/promotion'
import Questions from './components/questions'
import Spotlight from './components/spotlight'

export default function Home() {
  return (
    <main className='container'>
      <div className='relative h-[520px]'>
        <h1 className='text-4xl text-secondary font-bold text-white absolute top-1/4 left-1/2 translate-x-[-50%] -translate-y-full'>
          Mua vé xe khách trực tuyến
        </h1>
        <BusSearch>
          <Button
            type='submit'
            className='px-6 py-2 text-secondary h-[104px] rounded-l-none rounded-r-3xl text-lg bg-red-500 hover:bg-red-600'
          >
            Tìm kiếm xe khách
          </Button>
        </BusSearch>
        <Promotion />
      </div>
      {/* <Partner />
      <Spotlight />
      <AppInstall />
      <Intro />
      <Questions /> */}
    </main>
  )
}
