"use client"

import { ReactNode } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

interface ProfileTab {
  href: string
  label: string
}

const profileTabs: ProfileTab[] = [
  { href: "/profile", label: "Información General" },
  { href: "/profile/security", label: "Seguridad" },
  { href: "/profile/payment-methods", label: "Métodos de Pago" },
  { href: "/profile/notifications", label: "Notificaciones" },
]

interface ProfileLayoutProps {
  children: ReactNode
}

export default function ProfileLayout({ children }: ProfileLayoutProps) {
  const pathname = usePathname()

  return (
    <div className="container mx-auto p-6 max-w-5xl">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Mi Perfil</h1>
          <p className="text-muted-foreground">
            Gestiona tu información personal y preferencias
          </p>
        </div>

        <Separator />

        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar de navegación */}
          <Card className="w-full md:w-64 p-4">
            <nav className="space-y-2">
              {profileTabs.map((tab) => (
                <Link
                  key={tab.href}
                  href={tab.href}
                  className={`block p-2 rounded-md hover:bg-accent ${
                    pathname === tab.href ? "bg-accent" : ""
                  }`}
                >
                  {tab.label}
                </Link>
              ))}
            </nav>
          </Card>

          {/* Contenido principal */}
          <main className="flex-1">
            <Card className="p-6">
              {children}
            </Card>
          </main>
        </div>
      </div>
    </div>
  )
}
