'use client';

import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  X, 
  CheckCircle, 
  AlertTriangle, 
  Info, 
  Star, 
  ShoppingCart,
  ExternalLink,
  Download,
  BookOpen,
  Users,
  DollarSign,
  HardHat,
  Zap,
  Eye,
  Wrench,
  FileText,
  Shield
} from 'lucide-react';

export interface GuideContent {
  title: string;
  category: string;
  icon: string;
  description: string;
  difficulty: 'Básico' | 'Intermedio' | 'Avanzado';
  estimatedTime: string;
  overview: string;
  essentialItems: Array<{
    name: string;
    description: string;
    importance: 'Crítico' | 'Recomendado' | 'Opcional';
    estimatedPrice: string;
  }>;
  stepByStep: Array<{
    step: number;
    title: string;
    description: string;
    tips: string[];
    warnings?: string[];
  }>;
  budgetGuide: {
    economic: { range: string; description: string; items: string[] };
    standard: { range: string; description: string; items: string[] };
    premium: { range: string; description: string; items: string[] };
  };
  commonMistakes: Array<{
    mistake: string;
    consequence: string;
    solution: string;
  }>;
  maintenance: Array<{
    frequency: string;
    task: string;
    description: string;
  }>;
  relatedProducts?: Array<{
    name: string;
    asin?: string;
    description: string;
  }>;
}

interface GuideModalProps {
  isOpen: boolean;
  onClose: () => void;
  guide: GuideContent | null;
}

export default function GuideModal({ isOpen, onClose, guide }: GuideModalProps) {
  const [activeTab, setActiveTab] = useState('overview');

  if (!guide) return null;

  const getIconComponent = (iconName: string) => {
    const iconProps = { className: "w-8 h-8 text-blue-600" };
    switch (iconName) {
      case 'hardhat': return <HardHat {...iconProps} />;
      case 'zap': return <Zap {...iconProps} className="w-8 h-8 text-yellow-600" />;
      case 'eye': return <Eye {...iconProps} className="w-8 h-8 text-green-600" />;
      case 'wrench': return <Wrench {...iconProps} className="w-8 h-8 text-gray-600" />;
      case 'fileText': return <FileText {...iconProps} className="w-8 h-8 text-purple-600" />;
      case 'shield': return <Shield {...iconProps} className="w-8 h-8 text-indigo-600" />;
      default: return <BookOpen {...iconProps} />;
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Básico': return 'bg-green-100 text-green-800';
      case 'Intermedio': return 'bg-yellow-100 text-yellow-800';
      case 'Avanzado': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getImportanceColor = (importance: string) => {
    switch (importance) {
      case 'Crítico': return 'text-red-600';
      case 'Recomendado': return 'text-yellow-600';
      case 'Opcional': return 'text-green-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0">
        {/* Header */}
        <DialogHeader className="p-6 pb-4 border-b">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-100 rounded-lg">
                {getIconComponent(guide.icon)}
              </div>
              <div>
                <DialogTitle className="text-2xl font-bold">{guide.title}</DialogTitle>
                <div className="flex items-center gap-3 mt-2">
                  <Badge className={getDifficultyColor(guide.difficulty)}>
                    {guide.difficulty}
                  </Badge>
                  <div className="flex items-center gap-1 text-sm text-gray-600">
                    <BookOpen className="w-4 h-4" />
                    {guide.estimatedTime}
                  </div>
                </div>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="h-10 w-10 p-0"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
          <p className="text-gray-600 mt-3">{guide.description}</p>
        </DialogHeader>

        {/* Content */}
        <div className="p-6">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-6">
              <TabsTrigger value="overview">Resumen</TabsTrigger>
              <TabsTrigger value="items">Equipos</TabsTrigger>
              <TabsTrigger value="steps">Paso a Paso</TabsTrigger>
              <TabsTrigger value="budget">Presupuesto</TabsTrigger>
              <TabsTrigger value="mistakes">Errores</TabsTrigger>
              <TabsTrigger value="maintenance">Mantenimiento</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Info className="w-5 h-5 text-blue-600" />
                    Vista General
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed mb-6">{guide.overview}</p>
                  
                  {guide.relatedProducts && guide.relatedProducts.length > 0 && (
                    <div>
                      <h4 className="font-medium text-gray-900 mb-3">Productos Destacados</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {guide.relatedProducts.map((product, index) => (
                          <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                            <h5 className="font-medium text-gray-900">{product.name}</h5>
                            <p className="text-sm text-gray-600 mt-1">{product.description}</p>
                            {/* TEMPORALMENTE COMENTADO - TIENDA EN DESARROLLO
                            {product.asin && (
                              <Button 
                                variant="outline" 
                                size="sm" 
                                className="mt-2"
                                onClick={() => window.open(`/store/${product.asin}`, '_blank')}
                              >
                                <ExternalLink className="w-3 h-3 mr-1" />
                                Ver Producto
                              </Button>
                            )}
                            */}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="items" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <ShoppingCart className="w-5 h-5 text-blue-600" />
                    Equipos Esenciales
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {guide.essentialItems.map((item, index) => (
                      <div key={index} className="border rounded-lg p-4">
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="font-medium text-gray-900">{item.name}</h4>
                          <div className="flex items-center gap-2">
                            <Badge variant="outline" className={getImportanceColor(item.importance)}>
                              {item.importance}
                            </Badge>
                            <span className="text-sm font-medium text-gray-700">{item.estimatedPrice}</span>
                          </div>
                        </div>
                        <p className="text-gray-600 text-sm">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="steps" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-blue-600" />
                    Guía Paso a Paso
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {guide.stepByStep.map((step, index) => (
                      <div key={index} className="border-l-4 border-blue-600 pl-6 py-4">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                            {step.step}
                          </div>
                          <h4 className="font-medium text-gray-900">{step.title}</h4>
                        </div>
                        <p className="text-gray-700 mb-3">{step.description}</p>
                        
                        {step.tips.length > 0 && (
                          <div className="bg-blue-50 rounded-lg p-3 mb-3">
                            <h5 className="font-medium text-blue-900 mb-2">💡 Consejos:</h5>
                            <ul className="space-y-1">
                              {step.tips.map((tip, tipIndex) => (
                                <li key={tipIndex} className="text-sm text-blue-800 flex items-start gap-2">
                                  <CheckCircle className="w-3 h-3 mt-0.5 flex-shrink-0" />
                                  {tip}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {step.warnings && step.warnings.length > 0 && (
                          <div className="bg-amber-50 rounded-lg p-3">
                            <h5 className="font-medium text-amber-900 mb-2">⚠️ Advertencias:</h5>
                            <ul className="space-y-1">
                              {step.warnings.map((warning, warnIndex) => (
                                <li key={warnIndex} className="text-sm text-amber-800 flex items-start gap-2">
                                  <AlertTriangle className="w-3 h-3 mt-0.5 flex-shrink-0" />
                                  {warning}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="budget" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <DollarSign className="w-5 h-5 text-blue-600" />
                    Guía de Presupuesto
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Economic */}
                    <div className="border rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <h4 className="font-medium text-gray-900">Económico</h4>
                        <Badge variant="outline" className="text-green-700">{guide.budgetGuide.economic.range}</Badge>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">{guide.budgetGuide.economic.description}</p>
                      <ul className="space-y-1">
                        {guide.budgetGuide.economic.items.map((item, index) => (
                          <li key={index} className="text-sm text-gray-700 flex items-start gap-2">
                            <CheckCircle className="w-3 h-3 mt-0.5 text-green-500 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Standard */}
                    <div className="border rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                        <h4 className="font-medium text-gray-900">Estándar</h4>
                        <Badge variant="outline" className="text-blue-700">{guide.budgetGuide.standard.range}</Badge>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">{guide.budgetGuide.standard.description}</p>
                      <ul className="space-y-1">
                        {guide.budgetGuide.standard.items.map((item, index) => (
                          <li key={index} className="text-sm text-gray-700 flex items-start gap-2">
                            <CheckCircle className="w-3 h-3 mt-0.5 text-blue-500 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Premium */}
                    <div className="border rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                        <h4 className="font-medium text-gray-900">Premium</h4>
                        <Badge variant="outline" className="text-purple-700">{guide.budgetGuide.premium.range}</Badge>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">{guide.budgetGuide.premium.description}</p>
                      <ul className="space-y-1">
                        {guide.budgetGuide.premium.items.map((item, index) => (
                          <li key={index} className="text-sm text-gray-700 flex items-start gap-2">
                            <CheckCircle className="w-3 h-3 mt-0.5 text-purple-500 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="mistakes" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-amber-600" />
                    Errores Comunes y Cómo Evitarlos
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {guide.commonMistakes.map((mistake, index) => (
                      <div key={index} className="border rounded-lg p-4">
                        <h4 className="font-medium text-red-700 mb-2">❌ {mistake.mistake}</h4>
                        <p className="text-sm text-gray-600 mb-2">
                          <strong>Consecuencia:</strong> {mistake.consequence}
                        </p>
                        <div className="bg-green-50 rounded p-3">
                          <p className="text-sm text-green-800">
                            <strong>✅ Solución:</strong> {mistake.solution}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="maintenance" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Star className="w-5 h-5 text-blue-600" />
                    Mantenimiento y Cuidado
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {guide.maintenance.map((item, index) => (
                      <div key={index} className="border rounded-lg p-4">
                        <div className="flex items-center gap-3 mb-2">
                          <Badge variant="outline">{item.frequency}</Badge>
                          <h4 className="font-medium text-gray-900">{item.task}</h4>
                        </div>
                        <p className="text-gray-600 text-sm">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Footer */}
        <div className="border-t p-6 bg-gray-50">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Download className="w-4 h-4" />
              Esta guía se actualiza regularmente con nueva información
            </div>
            <Button onClick={onClose}>
              Cerrar Guía
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
