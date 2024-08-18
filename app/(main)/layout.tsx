import { Layout } from 'antd'
import Header from './components/header'
import Footer from '../components/footer'

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <Layout style={{ backgroundColor: 'white' }}>
      <Header />

      <div style={{ padding: '0 86px', minHeight: 'calc(100vh - 134px)' }}>{children}</div>

      <Footer />
    </Layout>
  )
}
