import { OrganizationSwitcher } from '@clerk/remix'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '~/components/ui'
import {
  Calendar,
  Home,
  Inbox,
  Merge,
  Pickaxe,
  Rocket,
  Search,
  Settings,
  UserRoundCheck,
} from 'lucide-react'
import { Link, NavLink } from '@remix-run/react'

const items = [
  {
    title: 'Dashboard',
    url: '/app',
    icon: Home,
  },
  {
    title: 'Deployed Pulls',
    url: '/app/deployed-pulls',
    icon: Rocket,
  },
  {
    title: 'Merged Pulls',
    url: '/app/merged-pulls',
    icon: Merge,
  },
  {
    title: 'In-process Pulls',
    url: '/app/in-process-pulls',
    icon: Pickaxe,
  },
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      end
                      className="aria-[current]:bg-primary aria-[current]:text-primary-foreground"
                    >
                      <item.icon />
                      <span>{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              {/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
              <a href="#">
                <Settings />
                <span>Settings</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
        <OrganizationSwitcher
          appearance={{
            layout: {
              privacyPageUrl: '/app',
            },
          }}
        />
      </SidebarFooter>
    </Sidebar>
  )
}
