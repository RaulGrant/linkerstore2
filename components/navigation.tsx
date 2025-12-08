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
  LogOut,
  HelpCircle,
  MessageCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

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

  // Function to track navigation clicks
  const handleNavClick = async (linkName: string, linkPath: string) => {
    if (typeof window !== 'undefined') {
      try {
        const { trackInteraction } = await import('@/lib/meta-pixel');
        trackInteraction('nav_click', linkName, `navigation_to_${linkPath}`);
      } catch (error) {
        console.warn('Failed to load tracking:', error);
      }
    }
  };

  const mainNavItems = [
    { name: 'Inicio', href: '/', icon: Home },
    { name: 'Tienda', href: '/catalogo', icon: ShoppingBag },
    { name: 'Blog', href: '/blog', icon: FileText },
    { name: 'Guías', href: '/guias', icon: GraduationCap },
    { name: 'Contacto', href: '/contacto', icon: MessageCircle },
    { name: 'Sobre Nosotros', href: '/sobre-nosotros', icon: Users },
    { name: 'Ayuda', href: '/ayuda', icon: HelpCircle },
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
    <>
      <style jsx>{`
        @keyframes glow {
          0% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.6), inset 0 0 20px rgba(59, 130, 246, 0.1); }
          100% { box-shadow: 0 0 30px rgba(59, 130, 246, 0.9), inset 0 0 30px rgba(59, 130, 246, 0.2); }
        }
        
        @keyframes borderGlow {
          0% { transform: scale(1); opacity: 0.7; }
          50% { transform: scale(1.05); opacity: 0.9; }
          100% { transform: scale(1); opacity: 0.7; }
        }
        
        @keyframes ringPulse {
          0% { transform: scale(1); opacity: 0.3; }
          50% { transform: scale(1.1); opacity: 0.6; }
          100% { transform: scale(1); opacity: 0.3; }
        }
      `}</style>
      
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between min-w-0">
            {/* Logo */}
            <Link 
              href="/" 
              className="flex items-center gap-2 sm:gap-3 mr-6 md:mr-8 flex-shrink-0"
              onClick={() => handleNavClick('logo', '/')}
            >
              <div className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-lg bg-blue-600 shadow-lg">
                <span className="text-xs sm:text-sm font-bold text-white">LS</span>
              </div>
              <span className="text-lg sm:text-xl font-bold text-gray-900 whitespace-nowrap">LinkerStore</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1 flex-1 justify-center">
              {mainNavItems.map((item) => (
                <NavLink key={item.name} item={item} />
              ))}
            </nav>

            {/* Right Side */}
            <div className="flex items-center gap-6 md:gap-8 lg:gap-10 flex-shrink-0">
              {/* Newsletter CTA Button */}
              <div className="relative hidden md:block">
                <Button 
                  size="lg" 
                  className="relative px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-bold text-base rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden group animate-pulse"
                  style={{
                    boxShadow: '0 0 20px rgba(59, 130, 246, 0.6), inset 0 0 20px rgba(59, 130, 246, 0.1)',
                    animation: 'glow 2s ease-in-out infinite alternate'
                  }}
                  onClick={() => {
                    const newsletterSection = document.getElementById('newsletter-section') || 
                                            document.querySelector('[data-newsletter-section]');
                    if (newsletterSection) {
                      newsletterSection.scrollIntoView({ behavior: 'smooth' });
                    }
                    handleNavClick('newsletter_cta', 'newsletter');
                  }}
                >
                  <div 
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 opacity-75 blur-sm"
                    style={{
                      animation: 'borderGlow 3s ease-in-out infinite'
                    }}
                  ></div>
                  
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {[...Array(8)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-1 h-1 bg-blue-200 rounded-full animate-bounce"
                        style={{
                          left: `${20 + (i * 10)}%`,
                          top: `${30 + (i % 2) * 40}%`,
                          animationDelay: `${i * 0.1}s`,
                          animationDuration: '0.6s'
                        }}
                      />
                    ))}
                  </div>
                  
                  <span className="relative z-10 flex items-center gap-2">
                    <span className="text-lg animate-bounce">📧</span>
                    Suscríbete
                  </span>
                  
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </Button>
                
                <div 
                  className="absolute inset-0 rounded-full border-2 border-blue-400/30 -z-10"
                  style={{
                    animation: 'ringPulse 2s ease-in-out infinite'
                  }}
                ></div>
              </div>

              {/* Mobile Menu */}
              <div className="md:hidden relative">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="p-2" 
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                  <Menu className="h-5 w-5" />
                </Button>

                {isMobileMenuOpen && (
                  <>
                    <div 
                      className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
                      onClick={() => setIsMobileMenuOpen(false)}
                    />
                    <div className="absolute top-full right-0 w-80 bg-white shadow-lg border rounded-lg z-50 p-4">
                      <div className="flex flex-col h-full">
                        <div className="flex items-center justify-between pb-4">
                          <span className="text-lg font-semibold">Menu</span>
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            className="p-1"
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

                          {/* Newsletter CTA in Mobile */}
                          <div className="mb-6 relative">
                            <Button 
                              className="relative w-full py-4 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden group"
                              style={{
                                boxShadow: '0 0 15px rgba(59, 130, 246, 0.5), inset 0 0 15px rgba(59, 130, 246, 0.1)',
                                animation: 'glow 2s ease-in-out infinite alternate'
                              }}
                              onClick={() => {
                                const newsletterSection = document.getElementById('newsletter-section') || 
                                                        document.querySelector('[data-newsletter-section]');
                                if (newsletterSection) {
                                  newsletterSection.scrollIntoView({ behavior: 'smooth' });
                                }
                                setIsMobileMenuOpen(false);
                                handleNavClick('newsletter_cta_mobile', 'newsletter');
                              }}
                            >
                              <div 
                                className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 opacity-60 blur-sm"
                                style={{
                                  animation: 'borderGlow 3s ease-in-out infinite'
                                }}
                              ></div>
                              
                              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                {[...Array(12)].map((_, i) => (
                                  <div
                                    key={i}
                                    className="absolute w-1.5 h-1.5 bg-blue-200 rounded-full animate-bounce"
                                    style={{
                                      left: `${10 + (i * 7)}%`,
                                      top: `${25 + (i % 3) * 25}%`,
                                      animationDelay: `${i * 0.08}s`,
                                      animationDuration: '0.7s'
                                    }}
                                  />
                                ))}
                              </div>
                              
                              <span className="relative z-10 flex items-center justify-center gap-3">
                                <span className="text-xl animate-bounce">📧</span>
                                Suscríbete al Newsletter
                              </span>
                              
                              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                            </Button>
                            
                            <div 
                              className="absolute inset-0 rounded-xl border-2 border-blue-400/20 -z-10"
                              style={{
                                animation: 'ringPulse 2.5s ease-in-out infinite'
                              }}
                            ></div>
                          </div>
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
                              <Button className="w-full" asChild>
                                <Link href="/contacto">Contactar Expertos</Link>
                              </Button>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}