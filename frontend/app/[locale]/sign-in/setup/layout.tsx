import { PropsWithChildren } from 'react'
import { PrivateRoute } from '@/app/components/PrivateRoute/PrivateRoute'

export default async function Layout({
  children,
}: Readonly<PropsWithChildren>) {
  return <PrivateRoute>{children}</PrivateRoute>
}
