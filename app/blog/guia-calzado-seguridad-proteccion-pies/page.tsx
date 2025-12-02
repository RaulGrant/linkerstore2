"use client"

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Shield, 
  BookOpen, 
  CheckCircle2, 
  AlertTriangle, 
  Ruler, 
  Hammer, 
  Zap, 
  Footprints,
  Thermometer,
  Droplets,
  Activity,
  ArrowRight,
  Info,
  Star,
  TrendingUp,
  Package,
  Target,
  ShoppingBag,
  Calendar,
  Clock,
  Eye
} from 'lucide-react'
import BlogLayout from '@/components/blog/BlogLayout'
import { Badge } from "@/components/ui/badge"
import { useScrollTracking } from '@/hooks/useScrollTracking'
import { trackBlogView, trackInteraction } from '@/lib/meta-pixel'

export default function GuiaCalzadoSeguridad() {
  const [activeTab, setActiveTab] = useState('tipos')
  const scrollProgress = useScrollTracking()

  useEffect(() => {
    trackBlogView('guia-calzado-seguridad-nom-113', 'Guía de Calzado de Seguridad')
  }, [])

  const handleTabChange = (tab: string) => {
    setActiveTab(tab)
    trackInteraction('tab_switch', 'guia_calzado', tab)
  }

  const tabContent = {
    tipos: (
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Clasificación según NOM-113-STPS-2009</h3>
        <p className="text-gray-600 mb-6">
          La norma mexicana clasifica el calzado de seguridad en 7 tipos principales según la protección que ofrecen. Es crucial identificar las siglas en la etiqueta del calzado.
        </p>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Hammer className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="font-bold text-lg">Tipo II (PP) - Puntera de Protección</h4>
            </div>
            <p className="text-gray-600 text-sm mb-3">
              Destinado a proteger los dedos contra impactos y compresión. Es el más común en la industria general.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm text-gray-700">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                <span>Resistencia al impacto: 101.7 J</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-700">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                <span>Resistencia a la compresión: 11.135 kN</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-yellow-100 rounded-lg">
                <Zap className="w-6 h-6 text-yellow-600" />
              </div>
              <h4 className="font-bold text-lg">Tipo III (D) - Dieléctrico</h4>
            </div>
            <p className="text-gray-600 text-sm mb-3">
              Protege al usuario contra riesgos de choque eléctrico. Aísla al trabajador del suelo.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm text-gray-700">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                <span>Soporta 14,000 Volts a 60 Hz</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-700">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                <span>Corriente de fuga máxima: 3 mA</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-orange-100 rounded-lg">
                <Shield className="w-6 h-6 text-orange-600" />
              </div>
              <h4 className="font-bold text-lg">Tipo IV (PM) - Protección Metatarsal</h4>
            </div>
            <p className="text-gray-600 text-sm mb-3">
              Cuenta con un componente integral que protege el empeine contra impactos directos al hueso metatarso.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm text-gray-700">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                <span>Protección extendida sobre el empeine</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-700">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                <span>Ideal para industria pesada y fundición</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Activity className="w-6 h-6 text-purple-600" />
              </div>
              <h4 className="font-bold text-lg">Tipo VII (A) - Antiestático</h4>
            </div>
            <p className="text-gray-600 text-sm mb-3">
              Reduce la acumulación de electricidad estática, disipándola al suelo.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm text-gray-700">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                <span>Evita chispas en zonas explosivas</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-700">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                <span>Protege equipos electrónicos sensibles</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 mt-4">
          <h5 className="font-semibold text-blue-800 flex items-center gap-2 mb-2">
            <Info className="w-4 h-4" />
            Otros Tipos Menos Comunes
          </h5>
          <p className="text-sm text-blue-700">
            Existen también el <strong>Tipo I (Ocupacional)</strong> sin puntera, el <strong>Tipo V (Conductivo)</strong> y el <strong>Tipo VI (Resistente a la Penetración)</strong> para objetos punzocortantes en el suelo.
          </p>
        </div>
      </div>
    ),
    normativa: (
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Normativa Mexicana NOM-113-STPS-2009</h3>
        <p className="text-gray-600 mb-6">
          Esta norma establece los requisitos mínimos que debe cumplir el calzado de protección en México. Todo calzado certificado debe mostrar claramente sus especificaciones.
        </p>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-blue-600" />
            Marcado Obligatorio del Producto
          </h4>
          <div className="space-y-4">
            <p className="text-gray-600 text-sm">
              El calzado debe tener marcado de forma permanente y visible en el interior o lengüeta la siguiente información:
            </p>
            <ul className="grid md:grid-cols-2 gap-3">
              {[
                "Nombre o marca del fabricante",
                "Talla del calzado",
                "País de origen",
                "NOM-113-STPS-2009",
                "Tipo de protección (ej. PP + D)",
                "Fecha de fabricación (mes/año)"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-2 text-sm bg-gray-50 p-2 rounded">
                  <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div className="bg-amber-50 p-5 rounded-xl border border-amber-100">
            <h4 className="font-bold text-amber-800 mb-2 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5" />
              Pruebas de Laboratorio
            </h4>
            <p className="text-sm text-amber-700 mb-3">
              Para obtener la certificación, el calzado se somete a pruebas rigurosas:
            </p>
            <ul className="space-y-2 text-sm text-amber-800">
              <li>• Impacto en puntera (caída libre de peso)</li>
              <li>• Compresión (aplastamiento progresivo)</li>
              <li>• Resistencia dieléctrica (alto voltaje)</li>
              <li>• Resistencia al desgarre del cuero</li>
            </ul>
          </div>

          <div className="bg-blue-50 p-5 rounded-xl border border-blue-100">
            <h4 className="font-bold text-blue-800 mb-2 flex items-center gap-2">
              <Shield className="w-5 h-5" />
              Organismos Certificadores
            </h4>
            <p className="text-sm text-blue-700 mb-3">
              Busca siempre el sello de organismos acreditados como:
            </p>
            <ul className="space-y-2 text-sm text-blue-800">
              <li>• NYCE (Normalización y Certificación)</li>
              <li>• CIATEC (Centro de Innovación Aplicada)</li>
              <li>• Otros laboratorios acreditados por la EMA</li>
            </ul>
          </div>
        </div>
      </div>
    ),
    seleccion: (
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Criterios de Selección</h3>
        <p className="text-gray-600 mb-6">
          Elegir el calzado correcto va más allá de la talla. Considera el entorno, los riesgos específicos y la ergonomía.
        </p>

        <div className="space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
              <Footprints className="w-5 h-5 text-indigo-600" />
              1. Tipo de Suela
            </h4>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-3 bg-gray-50 rounded-lg">
                <span className="font-semibold block mb-1">Poliuretano (PU)</span>
                <p className="text-xs text-gray-600">Ligero, flexible, buena resistencia a aceites. Ideal para industria ligera y almacenes.</p>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg">
                <span className="font-semibold block mb-1">Hule / Caucho</span>
                <p className="text-xs text-gray-600">Alta resistencia al calor (hasta 300°C) y abrasión. Ideal para fundición y terrenos rudos.</p>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg">
                <span className="font-semibold block mb-1">TPU</span>
                <p className="text-xs text-gray-600">Mayor durabilidad que el PU, excelente agarre y estética. Uso general versátil.</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
              <Shield className="w-5 h-5 text-indigo-600" />
              2. Material de la Puntera (Casquillo)
            </h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="border-l-4 border-gray-400 pl-4">
                <h5 className="font-bold text-gray-800">Acero</h5>
                <p className="text-sm text-gray-600">Económico y resistente, pero pesado, conductor térmico y eléctrico. Detectable en arcos de seguridad.</p>
              </div>
              <div className="border-l-4 border-blue-400 pl-4">
                <h5 className="font-bold text-gray-800">Policarbonato / Composite</h5>
                <p className="text-sm text-gray-600">Ligero, no magnético, aislante térmico y eléctrico. Recupera forma tras impacto. Ideal para electricistas.</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
              <Thermometer className="w-5 h-5 text-indigo-600" />
              3. Entorno de Trabajo
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Droplets className="w-5 h-5 text-blue-500 mt-0.5" />
                <div>
                  <span className="font-semibold text-sm block">Humedad o Agua</span>
                  <p className="text-xs text-gray-600">Busca corte hidrofugado o botas de PVC/Hule impermeables.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Zap className="w-5 h-5 text-yellow-500 mt-0.5" />
                <div>
                  <span className="font-semibold text-sm block">Riesgo Eléctrico</span>
                  <p className="text-xs text-gray-600">Obligatorio calzado Dieléctrico (D), sin partes metálicas expuestas.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <div className="bg-green-50 p-6 rounded-xl border border-green-100">
            <h4 className="font-bold text-green-800 mb-4 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5" />
              3 Consejos Clave
            </h4>
            <ul className="space-y-4">
              <li className="bg-white p-3 rounded-lg shadow-sm">
                <span className="font-bold text-green-700 block text-sm mb-1">1. Conoce tu Riesgo</span>
                <p className="text-xs text-gray-600">Alinea la necesidad específica (eléctrico, impacto, punzocortante) con la clasificación NOM-113.</p>
              </li>
              <li className="bg-white p-3 rounded-lg shadow-sm">
                <span className="font-bold text-green-700 block text-sm mb-1">2. Prioriza la Comodidad</span>
                <p className="text-xs text-gray-600">Un calzado incómodo causa fatiga. Busca plantillas antifatiga y pruébatelos al final del día.</p>
              </li>
              <li className="bg-white p-3 rounded-lg shadow-sm">
                <span className="font-bold text-green-700 block text-sm mb-1">3. Verifica la NOM</span>
                <p className="text-xs text-gray-600">Busca explícitamente "NOM-113-STPS-2009" en la etiqueta. Es tu garantía de seguridad.</p>
              </li>
            </ul>
          </div>

          <div className="bg-red-50 p-6 rounded-xl border border-red-100">
            <h4 className="font-bold text-red-800 mb-4 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5" />
              3 Errores Comunes
            </h4>
            <ul className="space-y-4">
              <li className="bg-white p-3 rounded-lg shadow-sm">
                <span className="font-bold text-red-700 block text-sm mb-1">1. Comprar Solo por Precio</span>
                <p className="text-xs text-gray-600">Lo barato sale caro. El calzado sin certificación puede fallar cuando más lo necesitas.</p>
              </li>
              <li className="bg-white p-3 rounded-lg shadow-sm">
                <span className="font-bold text-red-700 block text-sm mb-1">2. Ignorar el Peso</span>
                <p className="text-xs text-gray-600">No uses casquillo de acero si caminas mucho; opta por policarbonato o composite.</p>
              </li>
              <li className="bg-white p-3 rounded-lg shadow-sm">
                <span className="font-bold text-red-700 block text-sm mb-1">3. Talla Incorrecta</span>
                <p className="text-xs text-gray-600">Una talla mal elegida causa ampollas. Revisa guías de tallas y opiniones sobre el ajuste.</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    ),
    recomendados: (
      <div className="space-y-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Top 7 Calzado de Seguridad 2025</h3>
        <p className="text-gray-600 mb-6">
          Selección basada en cumplimiento de NOM-113, durabilidad y opiniones de usuarios en México.
        </p>

        <div className="grid gap-6">
          {/* Producto 1 */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-blue-200 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-blue-600 text-white px-3 py-1 text-xs font-bold rounded-bl-lg">
              #1 Electricistas
            </div>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <h4 className="text-xl font-bold text-gray-900 mb-2">Berrendo 3017 Biotech Dieléctricas</h4>
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex text-yellow-400">
                    {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
                  </div>
                  <span className="text-sm text-gray-500">4.7/5 (266+ reseñas)</span>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Referente mexicano. Casquillo de policarbonato, 100% dieléctrico (NOM Tipo III). Ideal para mantenimiento y riesgo eléctrico.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary" className="bg-blue-50 text-blue-700">NOM-113 Tipo II+III</Badge>
                  <Badge variant="secondary" className="bg-gray-100 text-gray-700">Policarbonato</Badge>
                </div>
              </div>
              <div className="flex items-center justify-center md:justify-end">
                <a href="https://mercadolibre.com/sec/2VaKvc7" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                  <ShoppingBag className="w-4 h-4" />
                  Ver Precio
                </a>
              </div>
            </div>
          </div>

          {/* Producto 2 */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-yellow-200 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-yellow-600 text-white px-3 py-1 text-xs font-bold rounded-bl-lg">
              #2 Construcción
            </div>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <h4 className="text-xl font-bold text-gray-900 mb-2">Caterpillar Second Shift Steel Toe</h4>
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex text-yellow-400">
                    {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
                  </div>
                  <span className="text-sm text-gray-500">5.0/5 (Excelencia)</span>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Ícono de durabilidad. Construcción Goodyear Welt, puntera de acero y piel de grano completo. Para trabajo rudo extremo.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary" className="bg-yellow-50 text-yellow-700">Casquillo Acero</Badge>
                  <Badge variant="secondary" className="bg-gray-100 text-gray-700">Goodyear Welt</Badge>
                </div>
              </div>
              <div className="flex items-center justify-center md:justify-end">
                <a href="https://mercadolibre.com/sec/1KmV8U4" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-yellow-600 text-white px-6 py-3 rounded-lg hover:bg-yellow-700 transition-colors font-medium">
                  <ShoppingBag className="w-4 h-4" />
                  Ver Precio
                </a>
              </div>
            </div>
          </div>

          {/* Producto 3 */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-green-200 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-green-600 text-white px-3 py-1 text-xs font-bold rounded-bl-lg">
              #3 Confort
            </div>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <h4 className="text-xl font-bold text-gray-900 mb-2">Timberland PRO Pit Boss 6"</h4>
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex text-yellow-400">
                    {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
                  </div>
                  <span className="text-sm text-gray-500">4.6/5 (Global)</span>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Tecnología Anti-Fatiga PRO 24/7. Equilibrio perfecto entre protección robusta (acero) y comodidad para largas jornadas.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary" className="bg-green-50 text-green-700">Anti-Fatiga</Badge>
                  <Badge variant="secondary" className="bg-gray-100 text-gray-700">Casquillo Acero</Badge>
                </div>
              </div>
              <div className="flex items-center justify-center md:justify-end">
                <a href="https://mercadolibre.com/sec/2hukoND" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-medium">
                  <ShoppingBag className="w-4 h-4" />
                  Ver Precio
                </a>
              </div>
            </div>
          </div>

          {/* Producto 4 */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-purple-200 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-purple-600 text-white px-3 py-1 text-xs font-bold rounded-bl-lg">
              #4 Ligereza
            </div>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <h4 className="text-xl font-bold text-gray-900 mb-2">Riverline Spyder SPYG2</h4>
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex text-yellow-400">
                    {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
                  </div>
                  <span className="text-sm text-gray-500">4.6/5 (235+ reseñas)</span>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Extremadamente ligero y ergonómico. Casquillo de policarbonato y diseño deportivo. Ideal para logística y supervisión.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary" className="bg-purple-50 text-purple-700">Ergonómico</Badge>
                  <Badge variant="secondary" className="bg-gray-100 text-gray-700">Policarbonato</Badge>
                </div>
              </div>
              <div className="flex items-center justify-center md:justify-end">
                <a href="https://mercadolibre.com/sec/1Tpzibx" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors font-medium">
                  <ShoppingBag className="w-4 h-4" />
                  Ver Precio
                </a>
              </div>
            </div>
          </div>

          {/* Producto 5 */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-red-200 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-red-600 text-white px-3 py-1 text-xs font-bold rounded-bl-lg">
              #5 Diseño
            </div>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <h4 className="text-xl font-bold text-gray-900 mb-2">Timberland Pro Pit 6 (Estilo Puma)</h4>
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex text-yellow-400">
                    {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
                  </div>
                  <span className="text-sm text-gray-500">4.9/5 (79+ reseñas)</span>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Diseño deportivo moderno tipo tenis. 100% libre de metal (fibra de vidrio). Estética superior sin sacrificar seguridad.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary" className="bg-red-50 text-red-700">Deportivo</Badge>
                  <Badge variant="secondary" className="bg-gray-100 text-gray-700">Fibra de Vidrio</Badge>
                </div>
              </div>
              <div className="flex items-center justify-center md:justify-end">
                <a href="https://mercadolibre.com/sec/2LrJRAz" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors font-medium">
                  <ShoppingBag className="w-4 h-4" />
                  Ver Precio
                </a>
              </div>
            </div>
          </div>

          {/* Producto 6 */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-teal-200 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-teal-600 text-white px-3 py-1 text-xs font-bold rounded-bl-lg">
              #6 Más Vendido
            </div>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <h4 className="text-xl font-bold text-gray-900 mb-2">Nieion Tenis de Seguridad</h4>
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex text-yellow-400">
                    {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
                  </div>
                  <span className="text-sm text-gray-500">4.6/5 (23,500+ reseñas)</span>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Fenómeno de ventas online. Precio extremadamente competitivo, ligero y transpirable. Ideal para presupuesto ajustado.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary" className="bg-teal-50 text-teal-700">Económico</Badge>
                  <Badge variant="secondary" className="bg-gray-100 text-gray-700">Ligero</Badge>
                </div>
              </div>
              <div className="flex items-center justify-center md:justify-end">
                <a href="https://mercadolibre.com/sec/32PaSVu" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors font-medium">
                  <ShoppingBag className="w-4 h-4" />
                  Ver Precio
                </a>
              </div>
            </div>
          </div>

          {/* Producto 7 */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-indigo-200 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-indigo-600 text-white px-3 py-1 text-xs font-bold rounded-bl-lg">
              #7 Calidad/Precio
            </div>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <h4 className="text-xl font-bold text-gray-900 mb-2">Ekinio Tenis Industrial</h4>
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex text-yellow-400">
                    {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
                  </div>
                  <span className="text-sm text-gray-500">4.7/5 (3,800+ reseñas)</span>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Excelente valoración de usuarios. Cómodo, ligero y con protección completa (acero + kevlar). Gran opción económica.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary" className="bg-indigo-50 text-indigo-700">Valorado</Badge>
                  <Badge variant="secondary" className="bg-gray-100 text-gray-700">Acero + Kevlar</Badge>
                </div>
              </div>
              <div className="flex items-center justify-center md:justify-end">
                <a href="https://mercadolibre.com/sec/2jknq7Q" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors font-medium">
                  <ShoppingBag className="w-4 h-4" />
                  Ver Precio
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 mt-8">
          <h4 className="font-bold text-gray-900 mb-4">Tabla Comparativa Rápida</h4>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-gray-700 uppercase bg-gray-100">
                <tr>
                  <th className="px-4 py-3 rounded-tl-lg">Característica</th>
                  <th className="px-4 py-3 text-blue-700">Berrendo 3017</th>
                  <th className="px-4 py-3 text-yellow-700">CAT Second Shift</th>
                  <th className="px-4 py-3 text-red-700 rounded-tr-lg">Puma/Timberland</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b">
                  <td className="px-4 py-3 font-medium">Casquillo</td>
                  <td className="px-4 py-3">Policarbonato</td>
                  <td className="px-4 py-3">Acero</td>
                  <td className="px-4 py-3">Fibra de Vidrio</td>
                </tr>
                <tr className="bg-white border-b">
                  <td className="px-4 py-3 font-medium">Dieléctrico</td>
                  <td className="px-4 py-3">Sí (NOM Tipo III)</td>
                  <td className="px-4 py-3">Sí (EH Rated)</td>
                  <td className="px-4 py-3">Sí (NOM Tipo III)</td>
                </tr>
                <tr className="bg-white border-b">
                  <td className="px-4 py-3 font-medium">Construcción</td>
                  <td className="px-4 py-3">Inyección Directa</td>
                  <td className="px-4 py-3">Goodyear Welt</td>
                  <td className="px-4 py-3">Cementado/Pegado</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-3 font-medium">Mejor Para</td>
                  <td className="px-4 py-3">Electricistas</td>
                  <td className="px-4 py-3">Construcción</td>
                  <td className="px-4 py-3">Estilo/Ligereza</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    ),
    mantenimiento: (
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Cuidado y Reemplazo</h3>
        <p className="text-gray-600 mb-6">
          El calzado de seguridad tiene una vida útil limitada. Un mantenimiento adecuado prolonga su duración, pero saber cuándo reemplazarlo es vital para la seguridad.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h4 className="font-bold text-lg mb-4 text-green-700">Tips de Mantenimiento</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-gray-700">
                <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5" />
                <span>Limpiar diariamente el polvo y suciedad con un paño húmedo.</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-700">
                <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5" />
                <span>Hidratar la piel (si es cuero) periódicamente para evitar grietas.</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-700">
                <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5" />
                <span>Secar a la sombra y temperatura ambiente, nunca al sol directo o fuentes de calor.</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-700">
                <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5" />
                <span>Alternar el uso con otro par para permitir que el interior se ventile.</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h4 className="font-bold text-lg mb-4 text-red-700">Cuándo Reemplazar</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-gray-700">
                <AlertTriangle className="w-4 h-4 text-red-500 mt-0.5" />
                <span>Si la puntera ha sufrido un impacto fuerte o compresión (aunque no se vea daño externo).</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-700">
                <AlertTriangle className="w-4 h-4 text-red-500 mt-0.5" />
                <span>Si la suela muestra desgaste excesivo o el dibujo ha desaparecido (riesgo de resbalón).</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-700">
                <AlertTriangle className="w-4 h-4 text-red-500 mt-0.5" />
                <span>Si el casquillo está expuesto por desgaste del cuero.</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-700">
                <AlertTriangle className="w-4 h-4 text-red-500 mt-0.5" />
                <span>Si hay deformaciones estructurales o costuras rotas importantes.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }

  return (
    <BlogLayout>
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header Section */}
        <motion.div 
          className="mb-16 px-4 md:px-0"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-wrap gap-3 mb-6 justify-center md:justify-start">
            <Badge className="bg-blue-100 text-blue-800 px-4 py-2 text-base font-medium">EPP</Badge>
            <Badge className="bg-green-100 text-green-800 px-4 py-2 text-base font-medium">Protección Pies</Badge>
            <Badge className="bg-purple-100 text-purple-800 px-4 py-2 text-base font-medium">NOM-113</Badge>
            <Badge className="bg-orange-100 text-orange-800 px-4 py-2 text-base font-medium">Guía Técnica</Badge>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent mb-8 leading-tight text-center md:text-left">
            Guía Completa de Calzado de Seguridad y Protección de Pies
          </h1>
          
          <div className="flex flex-wrap items-center gap-8 text-base text-gray-600 mb-8 justify-center md:justify-start">
            <div className="flex items-center gap-3">
              <Calendar className="w-5 h-5" />
              <span>20 Nov 2024</span>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5" />
              <span>12 min de lectura</span>
            </div>
            <div className="flex items-center gap-3">
              <Eye className="w-5 h-5" />
              <span>2,850 visualizaciones</span>
            </div>
          </div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8 text-center md:text-left font-medium"
          >
            Todo lo que necesitas saber sobre la NOM-113-STPS-2009, tipos de protección y cómo elegir el calzado adecuado para tu industria.
          </motion.p>

          <motion.div 
            className="bg-gradient-to-r from-orange-50 to-red-50 border-l-4 border-orange-400 p-6 rounded-r-xl shadow-lg"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <div className="flex items-start">
              <motion.div
                animate={{ bounce: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 4 }}
              >
                <Footprints className="h-6 w-6 text-orange-500 mr-4 mt-1" />
              </motion.div>
              <div>
                <h4 className="font-bold text-orange-800 text-lg mb-2">Protección Esencial</h4>
                <p className="text-orange-700 text-base leading-relaxed">
                  El 25% de los accidentes laborales afectan los pies. Un calzado certificado NOM-113 reduce el riesgo de lesiones en un 90%.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Main Content Tabs */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-2 mb-8 border-b border-gray-200 pb-1">
            {[
              { id: 'tipos', label: 'Tipos de Protección', icon: Shield },
              { id: 'normativa', label: 'Normativa NOM-113', icon: BookOpen },
              { id: 'seleccion', label: 'Guía de Selección', icon: CheckCircle2 },
              { id: 'recomendados', label: 'Top Productos', icon: Star },
              { id: 'mantenimiento', label: 'Mantenimiento', icon: Hammer },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`
                  flex items-center gap-2 px-4 py-3 text-sm font-medium rounded-t-lg transition-all relative
                  ${activeTab === tab.id 
                    ? 'text-blue-600 bg-blue-50/50' 
                    : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                  }
                `}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"
                  />
                )}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
            >
              {tabContent[activeTab as keyof typeof tabContent]}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* CTA Section 
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 md:p-12 text-center text-white shadow-xl"
        >
          <h2 className="text-3xl font-bold mb-4">¿Buscas Calzado de Seguridad Certificado?</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg">
            En LinkerStore contamos con una amplia selección de calzado industrial que cumple con la NOM-113. Protege a tu equipo con las mejores marcas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/catalogo?categoria=calzado-seguridad" 
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Ver Catálogo de Calzado
              <ArrowRight className="w-5 h-5" />
            </a>
            <a 
              href="/contacto" 
              className="inline-flex items-center justify-center gap-2 bg-blue-800/30 text-white border border-white/20 px-8 py-4 rounded-xl font-bold hover:bg-blue-800/50 transition-colors backdrop-blur-sm"
            >
              Solicitar Asesoría
            </a>
          </div>
        </motion.div>*/}
      </div>
    </BlogLayout>
  )
}
