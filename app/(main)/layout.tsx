import Header from './components/header'
import Footer from '../../components/footer'

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />

      <div>{children}</div>

      {/* <Footer /> */}
    </div>
  )
}
