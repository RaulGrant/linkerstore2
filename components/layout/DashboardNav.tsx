"use client"

import { useState } from "react"
import Link from "next/link"
import { useAuth } from "@/hooks/useAuth"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Bell, LogOut, Menu, X } from "lucide-react"

interface DashboardNavProps {
  currentUser: {
    name: string
    role: string
  }
}

export default function DashboardNav({ currentUser }: DashboardNavProps) {
  const { signOut } = useAuth()
  const [isOpen, setIsOpen] = useState(false)
  const isCompany = currentUser.role === "company"

  // Solo mostrar logs en desarrollo
  if (process.env.NODE_ENV === 'development') {
    console.log('🔍 DashboardNav - currentUser:', currentUser)
    console.log('🔍 DashboardNav - isCompany:', isCompany)
  }

  const navItems = isCompany
    ? [
        { href: "/dashboard", label: "Dashboard" },
        { href: "/projects", label: "Mis Proyectos" },
        { href: "/map-freelancers", label: "Freelancers" },
        { href: "/proposals", label: "Mis Propuestas" },
      ]
    : [
        { href: "/dashboard", label: "Dashboard" },
        { href: "/projects", label: "Proyectos" },
        { href: "/map-empresas", label: "Empresas" },
        { href: "/portfolio", label: "Portafolio" },
      ]

  if (process.env.NODE_ENV === 'development') {
    console.log('🔍 DashboardNav - navItems:', navItems)
  }

  return (
    <header className="bg-white border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 lg:px-6 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">LP</span>
            </div>
            <span className="text-xl font-bold text-gray-900">LinkerPro</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center space-x-4">
          {!isCompany && (
            <Button variant="ghost" size="sm" asChild>
              <Link href="/notifications">
                <Bell className="h-4 w-4 mr-2" />
                Notificaciones
              </Link>
            </Button>
          )}
          
          <Link href="/profile">
            <div className="flex items-center space-x-2 cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-semibold text-sm">
                  {currentUser.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </span>
              </div>
              <span className="text-sm font-medium">{currentUser.name}</span>
            </div>
          </Link>
          
          <Button variant="ghost" size="sm" onClick={signOut} className="hover:bg-red-50 hover:text-red-600">
            <LogOut className="h-4 w-4 mr-2" />
            Cerrar sesión
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="sm" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Abrir menú</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col space-y-4 mt-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-gray-600 hover:text-blue-600 font-medium transition-colors py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              
              <hr className="my-4" />
              
              {!isCompany && (
                <Link
                  href="/notifications"
                  className="text-gray-600 hover:text-blue-600 font-medium transition-colors py-2"
                  onClick={() => setIsOpen(false)}
                >
                  <Bell className="h-4 w-4 mr-2 inline" />
                  Notificaciones
                </Link>
              )}
              
              <Link
                href="/profile"
                className="text-gray-600 hover:text-blue-600 font-medium transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Perfil
              </Link>
              
              <Button
                variant="ghost"
                onClick={signOut}
                className="justify-start hover:bg-red-50 hover:text-red-600 py-2"
              >
                <LogOut className="h-4 w-4 mr-2" />
                Cerrar sesión
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
