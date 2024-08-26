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
        <BusSearch />
        <Promotion />
      </div>
      <Partner />
      <Spotlight />
      <AppInstall />
      <Intro />
      <Questions />
    </main>
  )
}
