import ProtectedAdminProvider from './components/protected-admin-provider'

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return <ProtectedAdminProvider>{children}</ProtectedAdminProvider>
}
