import { SidebarProvider, SidebarTrigger } from '~/components/ui'
import { AppSidebar } from '~/components/app-sidebar'
import {
  UserButton,
  OrganizationSwitcher,
  OrganizationProfile,
  OrganizationList,
  useOrganization,
} from '@clerk/remix'
import { getAuth } from '@clerk/remix/ssr.server'
import { type LoaderFunction, redirect } from '@remix-run/cloudflare'
import { Outlet } from '@remix-run/react'

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

      <main>
        <SidebarTrigger />
        <Outlet />
      </main>
    </SidebarProvider>
  )
}
