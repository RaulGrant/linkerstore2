'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Home, 
  User, 
  Bell, 
  FileText, 
  Building2, 
  Users, 
  Settings, 
  Menu, 
  X, 
  ChevronDown, 
  Store, 
  ShoppingBag, 
  GraduationCap,
  CreditCard,
  Wallet,
  LogOut
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

interface NavigationProps {
  user?: {
    name: string;
    email: string;
    role: 'freelancer' | 'company' | 'admin';
    avatar?: string;
  };
}

export default function Navigation({ user }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isAuthenticated = !!user;
  const isCompany = user?.role === 'company';
  const isFreelancer = user?.role === 'freelancer';

  const mainNavItems = [
    { name: 'Inicio', href: '/', icon: Home },
    { name: 'Blog', href: '/blog', icon: FileText },
    { name: 'Guías', href: '/guias', icon: GraduationCap },
    { name: 'Tienda', href: '/store', icon: Store },
    // { name: 'Freelancers', href: '/map-freelancers', icon: Users }, // Temporalmente oculto
    // { name: 'Empresas', href: '/map-empresas', icon: Building2 }, // Temporalmente oculto
  ];

  const userNavItems = isAuthenticated ? [
    { name: 'Dashboard', href: '/dashboard', icon: Home },
    { name: 'Perfil', href: '/profile', icon: User },
    { name: 'Proyectos', href: '/projects', icon: FileText },
    { name: 'Propuestas', href: '/proposals', icon: FileText },
    { name: 'Portafolio', href: '/portfolio', icon: User },
    { name: 'Métodos de Pago', href: '/payment-methods', icon: CreditCard },
    { name: 'Historial de Pagos', href: '/payments', icon: Wallet },
    { name: 'Notificaciones', href: '/notifications', icon: Bell },
    { name: 'Configuración', href: '/settings', icon: Settings },
  ] : [];

  const isActive = (href: string) => {
    if (href === '/') return pathname === href;
    return pathname.startsWith(href);
  };

  const NavLink = ({ item, mobile = false }: { item: typeof mainNavItems[0], mobile?: boolean }) => (
    <Link
      href={item.href}
      className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${
        isActive(item.href)
          ? 'bg-blue-100 text-blue-700'
          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
      } ${mobile ? 'w-full' : ''}`}
      onClick={() => mobile && setIsMobileMenuOpen(false)}
    >
      <item.icon className="h-4 w-4" />
      {item.name}
    </Link>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600">
              <span className="text-sm font-bold text-white">LP</span>
            </div>
            <span className="text-xl font-bold text-gray-900">LinkerPro</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {mainNavItems.map((item) => (
              <NavLink key={item.name} item={item} />
            ))}
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            {/* Cart - Temporalmente oculto
            <div className="hidden md:block">
              <CartSimulator />
            </div>
            */}

            {/* User Menu */}
            {/* Temporalmente oculto el sistema de autenticación
            {isAuthenticated ? (
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="sm" asChild>
                  <Link href="/notifications">
                    <Bell className="h-4 w-4" />
                    <Badge variant="destructive" className="ml-1 h-4 w-4 p-0 flex items-center justify-center text-xs">
                      3
                    </Badge>
                  </Link>
                </Button>
                
                <Link href="/profile" className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                    <span className="text-sm font-medium text-blue-700">
                      {user.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <span className="hidden md:block text-sm font-medium">
                    {user.name}
                  </span>
                </Link>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="sm" asChild>
                  <Link href="/login">Iniciar Sesión</Link>
                </Button>
                <Button size="sm" asChild>
                  <Link href="/register">Registrarse</Link>
                </Button>
              </div>
            )}
            */}

            {/* Mobile Menu */}
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="md:hidden">
                  <Menu className="h-4 w-4" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between pb-4">
                    <span className="text-lg font-semibold">Menu</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>

                  <div className="flex-1 overflow-y-auto">
                    {/* Main Navigation */}
                    <div className="space-y-1 mb-6">
                      <h4 className="text-sm font-medium text-gray-500 mb-2">Navegación</h4>
                      {mainNavItems.map((item) => (
                        <NavLink key={item.name} item={item} mobile />
                      ))}
                    </div>

                    {/* User Navigation */}
                    {isAuthenticated && (
                      <>
                        <Separator className="my-4" />
                        <div className="space-y-1 mb-6">
                          <h4 className="text-sm font-medium text-gray-500 mb-2">Mi Cuenta</h4>
                          {userNavItems.map((item) => (
                            <NavLink key={item.name} item={item} mobile />
                          ))}
                        </div>
                      </>
                    )}

                    {/* Cart in Mobile - Temporalmente oculto
                    <div className="mb-6">
                      <CartSimulator />
                    </div>
                    */}
                  </div>

                  {/* Footer */}
                  <div className="pt-4 border-t">
                    {isAuthenticated ? (
                      <Button variant="ghost" className="w-full justify-start">
                        <LogOut className="h-4 w-4 mr-2" />
                        Cerrar Sesión
                      </Button>
                    ) : (
                      <div className="space-y-2">
                        <Button variant="ghost" className="w-full" asChild>
                          <Link href="/login">Iniciar Sesión</Link>
                        </Button>
                        <Button className="w-full" asChild>
                          <Link href="/register">Registrarse</Link>
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
