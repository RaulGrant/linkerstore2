import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Footer } from "@/components/footer"
import {
  Settings,
  Package,
  FileText,
  Users,
  BarChart3,
  Plus,
  Edit,
  Trash2,
  Upload,
  Save
} from "lucide-react"
import Link from "next/link"

export default function AdminPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 lg:px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-sm">LP</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              LinkerPro Admin
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/store" className="text-gray-600 hover:text-blue-600 transition-colors">
              Ver Tienda
            </Link>
            <Link href="/admin" className="text-blue-600 font-medium">
              Panel Admin
            </Link>
          </nav>

          <Link href="/login">
            <Button variant="ghost" className="text-gray-600 hover:text-blue-600">
              Cerrar Sesión
            </Button>
          </Link>
        </div>
      </header>

      <main className="flex-1 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-6 py-8">
          
          {/* Título */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Panel de Administración</h1>
            <p className="text-gray-600">Gestiona productos, contenido y configuraciones de la tienda industrial</p>
          </div>

          {/* Estadísticas rápidas */}
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Total Productos</p>
                    <p className="text-2xl font-bold text-gray-900">47</p>
                  </div>
                  <Package className="h-8 w-8 text-blue-600" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Artículos/Guías</p>
                    <p className="text-2xl font-bold text-gray-900">12</p>
                  </div>
                  <FileText className="h-8 w-8 text-green-600" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Usuarios Registrados</p>
                    <p className="text-2xl font-bold text-gray-900">156</p>
                  </div>
                  <Users className="h-8 w-8 text-purple-600" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Clics Este Mes</p>
                    <p className="text-2xl font-bold text-gray-900">2,341</p>
                  </div>
                  <BarChart3 className="h-8 w-8 text-orange-600" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Secciones principales */}
          <div className="grid lg:grid-cols-2 gap-8">
            
            {/* Gestión de Productos */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Package className="h-6 w-6 text-blue-600 mr-3" />
                  Gestión de Productos
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 mb-4">
                  Administra el catálogo de productos industriales, enlaces de Amazon y contenido.
                </p>
                
                <div className="grid grid-cols-2 gap-3">
                  <Button asChild className="justify-start" variant="outline">
                    <Link href="/admin/products">
                      <Plus className="h-4 w-4 mr-2" />
                      Nuevo Producto
                    </Link>
                  </Button>
                  
                  <Button asChild className="justify-start" variant="outline">
                    <Link href="/admin/products">
                      <Edit className="h-4 w-4 mr-2" />
                      Editar Productos
                    </Link>
                  </Button>
                  
                  <Button asChild className="justify-start" variant="outline">
                    <Link href="/admin/images">
                      <Upload className="h-4 w-4 mr-2" />
                      Subir Imágenes
                    </Link>
                  </Button>
                  
                  <Button asChild className="justify-start" variant="outline">
                    <Link href="/admin/analytics">
                      <BarChart3 className="h-4 w-4 mr-2" />
                      Ver Analytics
                    </Link>
                  </Button>
                </div>

                <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                  <p className="text-sm text-blue-700">
                    <strong>Últimos productos añadidos:</strong> Casco Truper, Detector Gas Bitwo, Extintor Aerosol
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Gestión de Contenido */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="h-6 w-6 text-green-600 mr-3" />
                  Gestión de Contenido
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 mb-4">
                  Crea y edita artículos, guías de compra, comparativas y reseñas detalladas.
                </p>
                
                <div className="grid grid-cols-2 gap-3">
                  <Button className="justify-start" variant="outline">
                    <Plus className="h-4 w-4 mr-2" />
                    Nuevo Artículo
                  </Button>
                  
                  <Button className="justify-start" variant="outline">
                    <Edit className="h-4 w-4 mr-2" />
                    Editar Guías
                  </Button>
                  
                  <Button className="justify-start" variant="outline">
                    <Upload className="h-4 w-4 mr-2" />
                    Subir Infografías
                  </Button>
                  
                  <Button className="justify-start" variant="outline">
                    <Save className="h-4 w-4 mr-2" />
                    Borradores
                  </Button>
                </div>

                <div className="mt-4 p-3 bg-green-50 rounded-lg">
                  <p className="text-sm text-green-700">
                    <strong>Artículos pendientes:</strong> "Guía EPP para soldadores", "Comparativa detectores de gas"
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Enlaces de Amazon */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Settings className="h-6 w-6 text-orange-600 mr-3" />
                  Enlaces de Amazon
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 mb-4">
                  Gestiona los enlaces de afiliados, verifica su funcionamiento y actualiza URLs.
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium text-sm">Enlaces Activos</p>
                      <p className="text-xs text-gray-600">47 productos enlazados</p>
                    </div>
                    <div className="text-green-600 text-sm">✓ Verificados</div>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium text-sm">Conversiones este mes</p>
                      <p className="text-xs text-gray-600">143 clics → 23 ventas</p>
                    </div>
                    <div className="text-blue-600 text-sm">16.1% CTR</div>
                  </div>
                </div>

                <Button className="w-full" variant="outline">
                  <Settings className="h-4 w-4 mr-2" />
                  Configurar Enlaces
                </Button>
              </CardContent>
            </Card>

            {/* Usuarios y Analytics */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BarChart3 className="h-6 w-6 text-purple-600 mr-3" />
                  Analytics y Usuarios
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 mb-4">
                  Monitorea el comportamiento de usuarios, productos más vistos y métricas de conversión.
                </p>
                
                <div className="space-y-3">
                  <div className="p-3 bg-purple-50 rounded-lg">
                    <p className="font-medium text-sm text-purple-800">Producto más visto</p>
                    <p className="text-xs text-purple-600">Chaleco de Seguridad Reflectante (234 vistas)</p>
                  </div>
                  
                  <div className="p-3 bg-purple-50 rounded-lg">
                    <p className="font-medium text-sm text-purple-800">Categoría popular</p>
                    <p className="text-xs text-purple-600">EPP Básico (45% del tráfico)</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <Button asChild className="justify-start" variant="outline" size="sm">
                    <Link href="/admin/users">
                      <Users className="h-4 w-4 mr-2" />
                      Ver Usuarios
                    </Link>
                  </Button>
                  
                  <Button asChild className="justify-start" variant="outline" size="sm">
                    <Link href="/admin/analytics">
                      <BarChart3 className="h-4 w-4 mr-2" />
                      Reportes
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

          </div>

          {/* Acciones rápidas */}
          <div className="mt-8">
            <Card>
              <CardHeader>
                <CardTitle>Acciones Rápidas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  <Button asChild className="bg-gradient-to-r from-blue-600 to-indigo-600">
                    <Link href="/admin/products">
                      <Plus className="h-4 w-4 mr-2" />
                      Agregar Producto Nuevo
                    </Link>
                  </Button>
                  
                  <Button asChild variant="outline">
                    <Link href="/admin/analytics">
                      <FileText className="h-4 w-4 mr-2" />
                      Crear Comparativa
                    </Link>
                  </Button>
                  
                  <Button asChild variant="outline">
                    <Link href="/admin/images">
                      <Upload className="h-4 w-4 mr-2" />
                      Subir Imágenes Batch
                    </Link>
                  </Button>
                  
                  <Button asChild variant="outline">
                    <Link href="/admin/products">
                      <Settings className="h-4 w-4 mr-2" />
                      Verificar Enlaces
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  )
}
