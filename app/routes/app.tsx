import { getAuth } from '@clerk/remix/ssr.server'
import { type LoaderFunction, redirect } from '@remix-run/cloudflare'
import { Outlet } from '@remix-run/react'
import { AppSidebar } from '~/components/app-sidebar'
import { SidebarProvider, SidebarTrigger } from '~/components/ui'

export const loader: LoaderFunction = async (args) => {
  const { userId } = await getAuth(args)
  if (!userId) {
    return redirect('/sign-in')
  }
  return {}
}

export default function AppLayout() {
  return (
    <SidebarProvider>
      <nav>
        <AppSidebar />
      </nav>

      <main className="relative">
        <SidebarTrigger className="absolute left-2 top-2" />
        <Outlet />
      </main>
    </SidebarProvider>
  )
}
