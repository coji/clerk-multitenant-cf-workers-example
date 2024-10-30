import { OrganizationSwitcher } from '@clerk/remix'
import { NavLink } from '@remix-run/react'
import { Home, Merge, Pickaxe, Rocket, Settings } from 'lucide-react'
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
              <NavLink
                to="/app/settings"
                end
                className="aria-[current]:bg-primary aria-[current]:text-primary-foreground"
              >
                <Settings />
                <span>Settings</span>
              </NavLink>
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
