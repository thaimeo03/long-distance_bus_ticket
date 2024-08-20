import ProtectedRoutesProvider from '../components/protected-routes-provider'

export default function UserLayout({ children }: { children: React.ReactNode }) {
  return <ProtectedRoutesProvider>{children}</ProtectedRoutesProvider>
}
