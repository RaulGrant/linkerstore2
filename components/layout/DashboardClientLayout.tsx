"use client"

import { ReactNode, useEffect, useState } from "react"
import { useAuth } from "@/hooks/useAuth"
import DashboardLayout from "@/components/layout/DashboardLayout"
import { useRouter } from "next/navigation"

interface DashboardClientLayoutProps {
  children: ReactNode
}

export default function DashboardClientLayout({ children }: DashboardClientLayoutProps) {
  const { user, profile, loading } = useAuth()
  const [isReady, setIsReady] = useState(false)
  const router = useRouter()

  useEffect(() => {
    // Si está cargando, esperar
    if (loading) return

    // Si no hay usuario, redirigir al login
    if (!user) {
      router.push("/login")
      return
    }

    // Si hay usuario, marcar como listo
    setIsReady(true)
  }, [user, loading, router])

  // Mostrar loading mientras se verifica autenticación
  if (loading || !isReady) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p>Cargando dashboard...</p>
        </div>
      </div>
    )
  }

  // Si no hay usuario después de loading, mostrar loading (el redirect ya se ejecutó)
  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p>Redirigiendo...</p>
        </div>
      </div>
    )
  }

  // El profile puede ser temporal, usar el user_type del user_metadata como fallback
  const userType = profile?.user_type || user.user_metadata?.user_type || "freelancer"

  return (
    <DashboardLayout userType={userType as "freelancer" | "company"}>
      {children}
    </DashboardLayout>
  )
}
