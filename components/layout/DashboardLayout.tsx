"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { 
  SidebarProvider, 
  Sidebar, 
  SidebarContent, 
  SidebarHeader, 
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { createClient } from "@/lib/supabase-browser"

interface SidebarLink {
  href: string
  label: string
  icon?: React.ReactNode
}

const freelancerLinks: SidebarLink[] = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/projects", label: "Proyectos" },
  { href: "/proposals", label: "Mis Propuestas" },
  { href: "/portfolio", label: "Mi Portfolio" },
  { href: "/map-empresas", label: "Mapa de Empresas" },
]

const companyLinks: SidebarLink[] = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/projects", label: "Mis Proyectos" },
  { href: "/proposals", label: "Propuestas Recibidas" },
  { href: "/map-freelancers", label: "Mapa de Freelancers" },
]

interface DashboardLayoutProps {
  children: React.ReactNode
  userType?: "freelancer" | "company"
}

export default function DashboardLayout({
  children,
  userType = "freelancer",
}: DashboardLayoutProps) {
  const pathname = usePathname()
  const router = useRouter()
  const supabase = createClient()

  const links = userType === "freelancer" ? freelancerLinks : companyLinks

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.push("/login")
    router.refresh()
  }

  return (
    <SidebarProvider>
      <div className="h-screen flex">
        <Sidebar>
          <SidebarHeader>
            <h1 className="text-xl font-bold p-4">LinkerPro</h1>
          </SidebarHeader>
          
          <SidebarContent>
            <SidebarMenu>
              {links.map((link) => (
                <SidebarMenuItem key={link.href}>
                  <SidebarMenuButton asChild isActive={pathname === link.href}>
                    <Link href={link.href}>
                      {link.icon}
                      <span>{link.label}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarContent>
          
          <SidebarFooter>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/profile">
                    Mi Perfil
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton onClick={handleSignOut}>
                  Cerrar Sesión
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarFooter>
        </Sidebar>

        {/* Contenido principal */}
        <main className="flex-1 overflow-auto">
          <div className="container mx-auto p-4">
            {children}
          </div>
        </main>
      </div>
    </SidebarProvider>
  )
}
