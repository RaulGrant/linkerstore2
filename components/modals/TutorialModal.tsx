'use client';

import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  X, 
  Play,
  CheckCircle, 
  AlertTriangle, 
  Info, 
  Star, 
  ShoppingCart,
  Search,
  Filter,
  Shield,
  Eye,
  ThumbsUp,
  ThumbsDown,
  ExternalLink,
  BookOpen,
  Users,
  Award,
  TrendingUp,
  Zap,
  Clock,
  Target
} from 'lucide-react';

interface TutorialStep {
  id: string;
  title: string;
  description: string;
  tips: string[];
  warnings?: string[];
  action?: string;
}

interface TutorialSection {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  steps: TutorialStep[];
}

interface TutorialModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialSection?: string;
}

const tutorialData: TutorialSection[] = [
  {
    id: 'navigation',
    title: 'Navegación de la Tienda',
    icon: <Search className="w-6 h-6 text-blue-600" />,
    description: 'Aprende a navegar eficientemente por nuestra tienda industrial y encontrar los productos que necesitas.',
    steps: [
      {
        id: 'search',
        title: 'Búsqueda de Productos',
        description: 'Utiliza nuestra barra de búsqueda para encontrar productos específicos por nombre, marca o categoría.',
        tips: [
          'Usa términos específicos como "casco 3M" o "guantes dieléctricos"',
          'Combina marca y tipo: "Honeywell respirador"',
          'Busca por código ASIN si lo conoces',
          'Usa sinónimos: "lentes" también funciona para "gafas de seguridad"'
        ],
        action: 'Prueba buscar "cascos de seguridad" en la barra superior'
      },
      {
        id: 'categories',
        title: 'Navegación por Categorías',
        description: 'Explora nuestras categorías organizadas para encontrar el tipo de equipo que necesitas.',
        tips: [
          'EPP (Equipo de Protección Personal) para cascos, guantes, lentes',
          'Herramientas para equipos de trabajo y medición',
          'Electricidad para equipos dieléctricos y medidores',
          'Cada categoría tiene subcategorías específicas'
        ],
        action: 'Haz clic en "Tienda Industrial" en el menú principal'
      },
      {
        id: 'filters',
        title: 'Uso de Filtros',
        description: 'Refina tu búsqueda usando nuestros filtros avanzados para encontrar exactamente lo que necesitas.',
        tips: [
          'Filtra por rango de precios para ajustarse a tu presupuesto',
          'Usa filtro de marca para productos específicos',
          'Filtra por calificación para ver solo productos bien valorados',
          'Combina múltiples filtros para resultados precisos'
        ],
        action: 'Usa los filtros en el panel lateral izquierdo'
      },
      {
        id: 'product-cards',
        title: 'Información en Tarjetas de Producto',
        description: 'Entiende toda la información disponible en cada tarjeta de producto.',
        tips: [
          'La imagen principal muestra el producto claramente',
          'El título incluye marca, modelo y características clave',
          'Las estrellas indican la calificación promedio',
          'El precio está en pesos mexicanos (MXN)',
          'El badge "Amazon" indica que es un producto verificado'
        ],
        warnings: [
          'Verifica siempre las especificaciones antes de comprar',
          'Lee las reseñas para entender mejor el producto'
        ]
      }
    ]
  },
  {
    id: 'reviews',
    title: 'Interpretación de Reseñas',
    icon: <Star className="w-6 h-6 text-yellow-600" />,
    description: 'Aprende a evaluar reseñas y calificaciones para tomar decisiones informadas de compra.',
    steps: [
      {
        id: 'rating-system',
        title: 'Sistema de Calificaciones',
        description: 'Entiende cómo interpretar las estrellas y calificaciones numéricas.',
        tips: [
          '5 estrellas: Excelente calidad, cumple todas las expectativas',
          '4 estrellas: Muy bueno, pequeñas áreas de mejora',
          '3 estrellas: Bueno, pero con algunas limitaciones notables',
          '2 estrellas: Regular, problemas significativos',
          '1 estrella: Malo, no recomendado'
        ],
        action: 'Busca productos con 4+ estrellas para mejor calidad'
      },
      {
        id: 'review-quantity',
        title: 'Cantidad de Reseñas',
        description: 'La cantidad de reseñas es tan importante como la calificación promedio.',
        tips: [
          'Más de 100 reseñas: Datos estadísticamente significativos',
          '50-100 reseñas: Buena muestra, calificación confiable',
          '10-50 reseñas: Muestra moderada, considera con cuidado',
          'Menos de 10 reseñas: Muestra pequeña, investiga más'
        ],
        warnings: [
          'Productos nuevos pueden tener pocas reseñas pero ser de calidad',
          'Productos con muchas reseñas negativas recientes pueden tener problemas'
        ]
      },
      {
        id: 'review-content',
        title: 'Análisis del Contenido de Reseñas',
        description: 'Aprende qué buscar en el texto de las reseñas para evaluaciones precisas.',
        tips: [
          'Busca reseñas detalladas con experiencias específicas',
          'Presta atención a reseñas de usuarios profesionales',
          'Lee tanto reseñas positivas como negativas',
          'Busca patrones en comentarios recurrentes',
          'Valora reseñas con fotos del producto en uso'
        ],
        warnings: [
          'Desconfía de reseñas muy cortas o genéricas',
          'Reseñas extremadamente positivas sin detalles pueden ser falsas'
        ]
      },
      {
        id: 'verified-purchase',
        title: 'Compras Verificadas',
        description: 'Identifica reseñas de compradores verificados para mayor confiabilidad.',
        tips: [
          'Las reseñas "Verified Purchase" son más confiables',
          'Amazon verifica que la persona realmente compró el producto',
          'Prioriza estas reseñas sobre las no verificadas',
          'Compradores verificados tienden a ser más honestos'
        ],
        action: 'Busca la etiqueta "Compra verificada" en Amazon'
      }
    ]
  },
  {
    id: 'epp-selection',
    title: 'Selección de EPP Correcto',
    icon: <Shield className="w-6 h-6 text-green-600" />,
    description: 'Guía completa para seleccionar el Equipo de Protección Personal adecuado para tu trabajo.',
    steps: [
      {
        id: 'risk-assessment',
        title: 'Evaluación de Riesgos',
        description: 'Identifica los riesgos específicos de tu ambiente de trabajo para seleccionar EPP apropiado.',
        tips: [
          'Riesgos físicos: impactos, cortes, caídas, ruido',
          'Riesgos químicos: salpicaduras, vapores, gases',
          'Riesgos eléctricos: contacto, arco eléctrico',
          'Riesgos biológicos: bacterias, virus, hongos',
          'Factores ambientales: temperatura, humedad, polvo'
        ],
        warnings: [
          'Un riesgo no identificado puede causar accidentes graves',
          'Los riesgos pueden cambiar según la tarea específica'
        ],
        action: 'Haz una lista de todos los riesgos en tu área de trabajo'
      },
      {
        id: 'certifications',
        title: 'Certificaciones y Normas',
        description: 'Entiende las certificaciones importantes para EPP en México y internacionalmente.',
        tips: [
          'NOM (Normas Oficiales Mexicanas): obligatorias en México',
          'ANSI (American National Standards Institute): estándar internacional',
          'CE (Conformité Européenne): estándar europeo reconocido',
          'OSHA: requisitos de seguridad ocupacional',
          'Busca siempre productos certificados para tu aplicación'
        ],
        warnings: [
          'EPP sin certificación puede no proteger adecuadamente',
          'Verifica que la certificación sea vigente y específica para tu uso'
        ]
      },
      {
        id: 'fit-comfort',
        title: 'Ajuste y Comodidad',
        description: 'El EPP debe ajustar correctamente y ser cómodo para uso prolongado.',
        tips: [
          'Talla correcta: ni muy apretado ni muy suelto',
          'Materiales transpirables para uso prolongado',
          'Peso ligero reduce fatiga del usuario',
          'Ajustes regulables para diferentes usuarios',
          'Compatibilidad con otro EPP (ejemplo: lentes + casco)'
        ],
        warnings: [
          'EPP incómodo tiende a no usarse consistentemente',
          'Mal ajuste reduce significativamente la protección'
        ]
      },
      {
        id: 'quality-price',
        title: 'Relación Calidad-Precio',
        description: 'Evalúa la relación costo-beneficio considerando durabilidad y protección.',
        tips: [
          'EPP de uso diario: invierte en mayor calidad',
          'Uso ocasional: opciones económicas pueden ser suficientes',
          'Considera costo total: precio + reemplazos + mantenimiento',
          'Marcas reconocidas suelen ofrecer mejor respaldo',
          'Lee garantías y políticas de devolución'
        ],
        warnings: [
          'No comprometas seguridad por precio bajo',
          'EPP muy barato puede costar más a largo plazo'
        ]
      },
      {
        id: 'maintenance',
        title: 'Mantenimiento y Vida Útil',
        description: 'Entiende cómo mantener tu EPP y cuándo reemplazarlo.',
        tips: [
          'Inspecciona EPP antes de cada uso',
          'Limpia según instrucciones del fabricante',
          'Almacena en lugares secos y protegidos',
          'Reemplaza según cronograma o cuando esté dañado',
          'Documenta fechas de compra y uso'
        ],
        warnings: [
          'EPP dañado puede ser más peligroso que no usar nada',
          'Algunos EPP tienen fecha de vencimiento'
        ]
      }
    ]
  }
];

export default function TutorialModal({ isOpen, onClose, initialSection = 'navigation' }: TutorialModalProps) {
  const [activeSection, setActiveSection] = useState(initialSection);
  const [currentStep, setCurrentStep] = useState(0);

  const currentSectionData = tutorialData.find(section => section.id === activeSection) || tutorialData[0];
  const totalSteps = currentSectionData.steps.length;

  const nextStep = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const goToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    setCurrentStep(0);
  };

  const currentStepData = currentSectionData.steps[currentStep];

  if (!isOpen) {
    return null;
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto p-0">
        {/* Header */}
        <DialogHeader className="p-6 pb-4 border-b bg-gradient-to-r from-blue-50 to-indigo-50">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-600 rounded-lg">
                <Play className="w-8 h-8 text-white" />
              </div>
              <div>
                <DialogTitle className="text-2xl font-bold text-gray-900">
                  Tutorial de LinkerPro
                </DialogTitle>
                <p className="text-gray-600 mt-2">
                  Aprende a usar nuestra tienda industrial como un profesional
                </p>
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
        </DialogHeader>

        <div className="flex">
          {/* Sidebar */}
          <div className="w-80 bg-gray-50 border-r p-6">
            <h3 className="font-semibold text-gray-900 mb-4">Secciones del Tutorial</h3>
            <div className="space-y-2">
              {tutorialData.map((section) => (
                <Button
                  key={section.id}
                  variant={activeSection === section.id ? "default" : "ghost"}
                  className="w-full justify-start h-auto p-4"
                  onClick={() => goToSection(section.id)}
                >
                  <div className="flex items-start gap-3 min-w-0 flex-1">
                    <div className="flex-shrink-0">
                      {section.icon}
                    </div>
                    <div className="text-left min-w-0 flex-1">
                      <div className="font-medium truncate">{section.title}</div>
                      <div 
                        className="text-sm opacity-70 mt-1 leading-tight text-left"
                        style={{
                          display: '-webkit-box',
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          maxHeight: '2.5rem'
                        }}
                      >
                        {section.description}
                      </div>
                    </div>
                  </div>
                </Button>
              ))}
            </div>

            {/* Progress */}
            <div className="mt-6 p-4 bg-white rounded-lg border">
              <div className="flex items-center gap-2 mb-2">
                <Target className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-medium">Progreso</span>
              </div>
              <div className="text-2xl font-bold text-blue-600">
                {currentStep + 1} / {totalSteps}
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                <div 
                  className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${((currentStep + 1) / totalSteps) * 100}%` }}
                />
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 p-6">
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-4">
                {currentSectionData.icon}
                <div>
                  <h2 className="text-xl font-bold text-gray-900">
                    {currentSectionData.title}
                  </h2>
                  <p className="text-gray-600">
                    {currentSectionData.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Current Step */}
            <Card className="mb-6">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {currentStep + 1}
                  </div>
                  <CardTitle className="text-lg">{currentStepData.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">{currentStepData.description}</p>

                {/* Tips */}
                {currentStepData.tips.length > 0 && (
                  <div className="bg-blue-50 rounded-lg p-4 mb-4">
                    <div className="flex items-center gap-2 mb-3">
                      <CheckCircle className="w-5 h-5 text-blue-600" />
                      <h4 className="font-medium text-blue-900">Consejos Clave:</h4>
                    </div>
                    <ul className="space-y-2">
                      {currentStepData.tips.map((tip, index) => (
                        <li key={index} className="flex items-start gap-2 text-blue-800">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-sm">{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Warnings */}
                {currentStepData.warnings && currentStepData.warnings.length > 0 && (
                  <div className="bg-amber-50 rounded-lg p-4 mb-4">
                    <div className="flex items-center gap-2 mb-3">
                      <AlertTriangle className="w-5 h-5 text-amber-600" />
                      <h4 className="font-medium text-amber-900">Advertencias:</h4>
                    </div>
                    <ul className="space-y-2">
                      {currentStepData.warnings.map((warning, index) => (
                        <li key={index} className="flex items-start gap-2 text-amber-800">
                          <AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{warning}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Action */}
                {currentStepData.action && (
                  <div className="bg-green-50 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingUp className="w-5 h-5 text-green-600" />
                      <h4 className="font-medium text-green-900">Acción Práctica:</h4>
                    </div>
                    <p className="text-green-800 text-sm">{currentStepData.action}</p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Navigation */}
            <div className="flex items-center justify-between">
              <Button
                variant="outline"
                onClick={prevStep}
                disabled={currentStep === 0}
                className="flex items-center gap-2"
              >
                ← Anterior
              </Button>

              <div className="flex items-center gap-2">
                {Array.from({ length: totalSteps }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentStep(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentStep
                        ? 'bg-blue-600 scale-125'
                        : index < currentStep
                        ? 'bg-blue-300'
                        : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>

              <Button
                onClick={nextStep}
                disabled={currentStep === totalSteps - 1}
                className="flex items-center gap-2"
              >
                Siguiente →
              </Button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t p-6 bg-gray-50">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Clock className="w-4 h-4" />
              Tutorial interactivo - Aprende a tu ritmo
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" onClick={onClose}>
                Pausar Tutorial
              </Button>
              <Button onClick={() => window.open('/store', '_blank')}>
                <ExternalLink className="w-4 h-4 mr-2" />
                Ir a la Tienda
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
