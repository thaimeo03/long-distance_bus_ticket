import Header from './components/header'
import Footer from '../../components/footer'
import Thumbnail from './components/thumbnail'

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='min-h-screen h-full'>
      <Header />
      <Thumbnail />

      <div>{children}</div>

      <Footer />
    </div>
  )
}
