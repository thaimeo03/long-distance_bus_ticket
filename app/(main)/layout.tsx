import Header from './components/header'
import Footer from '../../components/footer'
import Thumbnail from './components/thumbnail'
import GetUserInfoProvider from './components/get-user-infor-provider'

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <GetUserInfoProvider>
      <div className='min-h-screen h-full'>
        <Header />
        <Thumbnail />

        <>{children}</>

        <Footer />
      </div>
    </GetUserInfoProvider>
  )
}
