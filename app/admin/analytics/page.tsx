'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  BarChart3, 
  TrendingUp, 
  TrendingDown,
  Users, 
  Eye, 
  ShoppingCart,
  ExternalLink,
  Calendar,
  Download,
  RefreshCw
} from 'lucide-react';
import Link from 'next/link';

interface AnalyticsData {
  pageViews: number;
  uniqueUsers: number;
  clicksToAmazon: number;
  conversionRate: number;
  topProducts: Array<{
    name: string;
    views: number;
    clicks: number;
    conversion: number;
  }>;
  trafficSources: Array<{
    source: string;
    percentage: number;
    users: number;
  }>;
  dailyStats: Array<{
    date: string;
    views: number;
    clicks: number;
  }>;
}

export default function AnalyticsPage() {
  const [timeRange, setTimeRange] = useState('7d');
  const [loading, setLoading] = useState(false);
  const [lastUpdated, setLastUpdated] = useState(new Date());

  // Datos de ejemplo (en producción vendrían de Google Analytics API)
  const [analyticsData, setAnalyticsData] = useState<AnalyticsData>({
    pageViews: 15247,
    uniqueUsers: 8932,
    clicksToAmazon: 1834,
    conversionRate: 12.03,
    topProducts: [
      { name: 'Gafas de Seguridad 3M', views: 2341, clicks: 287, conversion: 12.3 },
      { name: 'Casco Industrial Truper', views: 1987, clicks: 245, conversion: 12.3 },
      { name: 'Chaleco Reflectante', views: 1756, clicks: 198, conversion: 11.3 },
      { name: 'Guantes de Trabajo', views: 1543, clicks: 167, conversion: 10.8 },
      { name: 'Botas de Seguridad', views: 1432, clicks: 156, conversion: 10.9 }
    ],
    trafficSources: [
      { source: 'Búsqueda Orgánica', percentage: 45.2, users: 4041 },
      { source: 'Directo', percentage: 23.8, users: 2126 },
      { source: 'Redes Sociales', percentage: 15.4, users: 1375 },
      { source: 'Referencias', percentage: 10.1, users: 902 },
      { source: 'Email', percentage: 5.5, users: 491 }
    ],
    dailyStats: [
      { date: '2025-07-26', views: 1834, clicks: 198 },
      { date: '2025-07-27', views: 2156, clicks: 234 },
      { date: '2025-07-28', views: 1987, clicks: 221 },
      { date: '2025-07-29', views: 2398, clicks: 267 },
      { date: '2025-07-30', views: 2234, clicks: 245 },
      { date: '2025-07-31', views: 2543, clicks: 289 },
      { date: '2025-08-01', views: 2095, clicks: 380 }
    ]
  });

  const refreshData = async () => {
    setLoading(true);
    // Simular carga de datos
    await new Promise(resolve => setTimeout(resolve, 1000));
    setLastUpdated(new Date());
    setLoading(false);
  };

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('es-MX').format(num);
  };

  const formatPercentage = (num: number) => {
    return `${num.toFixed(1)}%`;
  };

  const getTrendIcon = (value: number) => {
    if (value > 0) {
      return <TrendingUp className="w-4 h-4 text-green-600" />;
    } else {
      return <TrendingDown className="w-4 h-4 text-red-600" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <Link href="/admin" className="text-blue-600 hover:text-blue-800">
                ← Panel Admin
              </Link>
              <h1 className="text-xl font-semibold text-gray-900">
                Analytics y Reportes
              </h1>
            </div>
            <div className="flex items-center gap-3">
              <Select value={timeRange} onValueChange={setTimeRange}>
                <SelectTrigger className="w-32">
                  <Calendar className="w-4 h-4 mr-2" />
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1d">Hoy</SelectItem>
                  <SelectItem value="7d">7 días</SelectItem>
                  <SelectItem value="30d">30 días</SelectItem>
                  <SelectItem value="90d">90 días</SelectItem>
                </SelectContent>
              </Select>
              <Button 
                variant="outline" 
                onClick={refreshData}
                disabled={loading}
              >
                <RefreshCw className={`w-4 h-4 mr-2 ${loading ? 'animate-spin' : ''}`} />
                Actualizar
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Métricas principales */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Vistas de Página</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {formatNumber(analyticsData.pageViews)}
                  </p>
                  <div className="flex items-center mt-1">
                    {getTrendIcon(8.5)}
                    <span className="text-sm text-green-600 ml-1">+8.5%</span>
                  </div>
                </div>
                <Eye className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Usuarios Únicos</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {formatNumber(analyticsData.uniqueUsers)}
                  </p>
                  <div className="flex items-center mt-1">
                    {getTrendIcon(12.3)}
                    <span className="text-sm text-green-600 ml-1">+12.3%</span>
                  </div>
                </div>
                <Users className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Clics a Amazon</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {formatNumber(analyticsData.clicksToAmazon)}
                  </p>
                  <div className="flex items-center mt-1">
                    {getTrendIcon(15.7)}
                    <span className="text-sm text-green-600 ml-1">+15.7%</span>
                  </div>
                </div>
                <ShoppingCart className="h-8 w-8 text-orange-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Tasa de Conversión</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {formatPercentage(analyticsData.conversionRate)}
                  </p>
                  <div className="flex items-center mt-1">
                    {getTrendIcon(3.2)}
                    <span className="text-sm text-green-600 ml-1">+3.2%</span>
                  </div>
                </div>
                <BarChart3 className="h-8 w-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Productos más vistos */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="w-5 h-5" />
                Productos Más Populares
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {analyticsData.topProducts.map((product, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900 text-sm">
                        {product.name}
                      </h4>
                      <div className="flex items-center gap-4 mt-1">
                        <span className="text-xs text-gray-600">
                          {formatNumber(product.views)} vistas
                        </span>
                        <span className="text-xs text-gray-600">
                          {formatNumber(product.clicks)} clics
                        </span>
                        <span className="text-xs text-green-600 font-medium">
                          {formatPercentage(product.conversion)} CTR
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-gray-900">
                        #{index + 1}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Fuentes de tráfico */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                Fuentes de Tráfico
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {analyticsData.trafficSources.map((source, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-900">
                        {source.source}
                      </span>
                      <span className="text-sm text-gray-600">
                        {formatNumber(source.users)} usuarios
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${source.percentage}%` }}
                      ></div>
                    </div>
                    <div className="text-right">
                      <span className="text-xs text-gray-500">
                        {formatPercentage(source.percentage)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Gráfico de tendencias */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                Tendencias Diarias
              </span>
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Exportar
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-7 gap-2 text-center">
                {analyticsData.dailyStats.map((stat, index) => (
                  <div key={index} className="p-3 bg-gray-50 rounded-lg">
                    <div className="text-xs text-gray-600 mb-2">
                      {new Date(stat.date).toLocaleDateString('es-MX', { 
                        weekday: 'short', 
                        day: 'numeric' 
                      })}
                    </div>
                    <div className="space-y-1">
                      <div className="text-sm font-medium text-blue-600">
                        {formatNumber(stat.views)}
                      </div>
                      <div className="text-xs text-gray-500">vistas</div>
                      <div className="text-sm font-medium text-orange-600">
                        {formatNumber(stat.clicks)}
                      </div>
                      <div className="text-xs text-gray-500">clics</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Enlaces de Google Analytics */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ExternalLink className="w-5 h-5" />
              Enlaces de Google Analytics
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <Button 
                variant="outline" 
                className="justify-start h-auto p-4"
                onClick={() => window.open('https://analytics.google.com', '_blank')}
              >
                <div className="text-left">
                  <div className="font-medium">Dashboard Completo</div>
                  <div className="text-sm text-gray-600">Ver todos los reportes en GA4</div>
                </div>
                <ExternalLink className="w-4 h-4 ml-auto" />
              </Button>
              
              <Button 
                variant="outline" 
                className="justify-start h-auto p-4"
                onClick={() => window.open('https://analytics.google.com/analytics/web/#/report/content-pages', '_blank')}
              >
                <div className="text-left">
                  <div className="font-medium">Páginas Populares</div>
                  <div className="text-sm text-gray-600">Analizar contenido más visto</div>
                </div>
                <ExternalLink className="w-4 h-4 ml-auto" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Información de última actualización */}
        <div className="mt-8 text-center text-sm text-gray-500">
          Última actualización: {lastUpdated.toLocaleString('es-MX')}
        </div>
      </div>
    </div>
  );
}
