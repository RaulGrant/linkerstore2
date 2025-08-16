"use client"

import { useState } from "react"
import { ArrowLeft, ChevronDown, ChevronUp, Search } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

const faqData = [
  {
    id: "payment",
    category: "Pagos",
    question: "¿Qué es el pago por contacto?",
    answer:
      "El pago por contacto es una tarifa de $100 MXN que las empresas pagan para contactar directamente a un freelancer. Este pago se procesa únicamente si el freelancer acepta el contacto. Si el freelancer declina la solicitud, no se realiza ningún cobro a la empresa. Este sistema protege a los freelancers de contactos no deseados y asegura que solo reciban solicitudes serias.",
  },
  {
    id: "commission",
    category: "Pagos",
    question: "¿Cuánto es la comisión por proyecto?",
    answer:
      "LinkerPro cobra una comisión del 10% tanto a la empresa como al freelancer cuando se completa un proyecto exitosamente. Por ejemplo: si un proyecto tiene un valor de $10,000 MXN, la empresa pagará $11,000 MXN (incluyendo comisión) y el freelancer recibirá $9,000 MXN (después de la comisión). Esta comisión solo se cobra al completar el proyecto satisfactoriamente.",
  },
  {
    id: "escrow",
    category: "Pagos",
    question: "¿Cómo funciona el sistema de escrow?",
    answer:
      "El sistema escrow es un mecanismo de protección donde LinkerPro retiene el pago del proyecto hasta que el trabajo se complete satisfactoriamente. Cuando una empresa contrata a un freelancer, el dinero se deposita en una cuenta escrow segura. El freelancer recibe el pago solo cuando entrega el trabajo y la empresa lo aprueba. Esto protege a ambas partes: la empresa asegura recibir el trabajo antes de pagar, y el freelancer garantiza el pago al completar el proyecto.",
  },
  {
    id: "payment-timing",
    category: "Pagos",
    question: "¿Cuándo paga la empresa y cuándo recibe el freelancer?",
    answer:
      "La empresa paga al momento de contratar al freelancer, y el dinero se deposita en escrow. El freelancer recibe el pago dentro de 24-48 horas después de que la empresa apruebe el trabajo completado. Si hay disputas, el dinero permanece en escrow hasta que se resuelva el conflicto a través de nuestro sistema de mediación.",
  },
  {
    id: "cancel",
    category: "Proyectos",
    question: "¿Puedo cancelar una propuesta o contacto?",
    answer:
      "Sí, puedes cancelar propuestas antes de que sean aceptadas sin ningún costo. Para contactos pagados, si el freelancer aún no ha respondido, puedes solicitar la cancelación y el reembolso. Una vez que un proyecto está en progreso, las cancelaciones deben acordarse entre ambas partes y pueden estar sujetas a penalizaciones según el progreso del trabajo.",
  },
  {
    id: "payment-problems",
    category: "Soporte",
    question: "¿Qué pasa si hay un problema en el pago?",
    answer:
      "Si experimentas problemas con pagos, nuestro equipo de soporte está disponible 24/7 para ayudarte. Para problemas urgentes de pago, garantizamos respuesta dentro de 4 horas. Tenemos un sistema de mediación para resolver disputas sobre la calidad del trabajo o desacuerdos sobre pagos. En casos extremos, podemos revertir transacciones o redistribuir fondos del escrow según la resolución del conflicto.",
  },
  {
    id: "notifications",
    category: "Plataforma",
    question: "¿Quién recibe notificaciones y cuándo?",
    answer:
      "Los freelancers reciben notificaciones cuando: 1) Una empresa solicita contacto (deben aceptar/declinar), 2) Reciben una propuesta directa, 3) Un proyecto es adjudicado. Las empresas reciben notificaciones cuando: 1) Un freelancer acepta/declina contacto, 2) Reciben propuestas en sus proyectos, 3) Un freelancer completa trabajo. Todas las notificaciones se envían por email y aparecen en la plataforma.",
  },
  {
    id: "decline-contact",
    category: "Freelancers",
    question: "¿Qué pasa si declino un contacto?",
    answer:
      "Si declinas un contacto como freelancer, no hay penalizaciones. La empresa no es cobrada y puede buscar otros freelancers. Declinar contactos no afecta tu calificación en la plataforma. Es mejor declinar si no puedes tomar el proyecto en lugar de aceptar y luego cancelar, ya que esto sí puede afectar tu reputación.",
  },
  {
    id: "verification",
    category: "Cuenta",
    question: "¿Cómo verifico mi perfil?",
    answer:
      "Para verificar tu perfil como freelancer, debes proporcionar: 1) Identificación oficial, 2) Certificaciones técnicas relevantes, 3) Portafolio de trabajos anteriores, 4) Referencias de clientes (opcional). Las empresas deben proporcionar: 1) Registro empresarial, 2) Identificación del representante legal, 3) Comprobante de domicilio fiscal. La verificación toma 2-5 días hábiles.",
  },
  {
    id: "project-types",
    category: "Proyectos",
    question: "¿Qué tipos de proyectos puedo publicar?",
    answer:
      "LinkerPro se especializa en proyectos técnicos industriales: Diseño CAD, Programación PLC, Automatización industrial, Soldadura certificada, Lean Manufacturing, Control de calidad, Mantenimiento industrial, Ingeniería mecánica, Procesos químicos, Instalación de maquinaria. Los proyectos deben ser específicos del sector industrial y requerir habilidades técnicas especializadas.",
  },
  {
    id: "freelancer-requirements",
    category: "Freelancers",
    question: "¿Qué requisitos debo cumplir como freelancer?",
    answer:
      "Para ser freelancer en LinkerPro debes: 1) Ser mayor de 18 años, 2) Tener experiencia comprobable en tu área técnica, 3) Proporcionar certificaciones relevantes, 4) Completar el proceso de verificación, 5) Mantener un portafolio actualizado. Preferimos freelancers con experiencia en el sector industrial mexicano y certificaciones reconocidas internacionalmente.",
  },
  {
    id: "dispute-resolution",
    category: "Soporte",
    question: "¿Cómo se resuelven las disputas?",
    answer:
      "Las disputas se resuelven a través de nuestro sistema de mediación en 3 pasos: 1) Comunicación directa entre las partes (recomendamos intentar resolver primero), 2) Mediación de LinkerPro con revisión de evidencias y comunicaciones, 3) Decisión final basada en términos de servicio y evidencia presentada. El proceso toma 5-10 días hábiles. Durante este tiempo, los fondos permanecen en escrow.",
  },
]

export default function FAQPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [openItems, setOpenItems] = useState<string[]>([])

  const categories = ["all", ...Array.from(new Set(faqData.map((item) => item.category)))]

  const filteredFAQ = faqData.filter((item) => {
    const matchesSearch =
      item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "all" || item.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const toggleItem = (id: string) => {
    setOpenItems((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 lg:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">LP</span>
              </div>
              <span className="text-xl font-bold text-gray-900">LinkerPro</span>
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 lg:px-6 py-8">
        {/* Back Button */}
        <div className="mb-6">
          <Link href="/">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Volver al Inicio
            </Button>
          </Link>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Preguntas Frecuentes</h1>
            <p className="text-xl text-gray-600">Encuentra respuestas a las preguntas más comunes sobre LinkerPro</p>
          </div>

          {/* Search and Filters */}
          <Card className="mb-8">
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    placeholder="Buscar en las preguntas frecuentes..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>

                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <Button
                      key={category}
                      variant={selectedCategory === category ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedCategory(category)}
                    >
                      {category === "all" ? "Todas" : category}
                    </Button>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* FAQ Items */}
          <div className="space-y-4">
            {filteredFAQ.map((item) => (
              <Card key={item.id} className="overflow-hidden">
                <CardHeader
                  className="cursor-pointer hover:bg-gray-50 transition-colors"
                  onClick={() => toggleItem(item.id)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Badge variant="secondary" className="text-xs">
                        {item.category}
                      </Badge>
                      <CardTitle className="text-lg">{item.question}</CardTitle>
                    </div>
                    {openItems.includes(item.id) ? (
                      <ChevronUp className="h-5 w-5 text-gray-500" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-500" />
                    )}
                  </div>
                </CardHeader>
                {openItems.includes(item.id) && (
                  <CardContent className="pt-0">
                    <div className="prose max-w-none">
                      <p className="text-gray-700 leading-relaxed">{item.answer}</p>
                    </div>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>

          {/* No Results */}
          {filteredFAQ.length === 0 && (
            <Card>
              <CardContent className="p-12 text-center">
                <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">No se encontraron resultados</h3>
                <p className="text-gray-600 mb-4">
                  Intenta con diferentes términos de búsqueda o explora otras categorías
                </p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSearchTerm("")
                    setSelectedCategory("all")
                  }}
                >
                  Limpiar Filtros
                </Button>
              </CardContent>
            </Card>
          )}

          {/* Contact Support */}
          <Card className="mt-8 bg-blue-50 border-blue-200">
            <CardContent className="p-6 text-center">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">¿No encontraste lo que buscabas?</h3>
              <p className="text-blue-800 mb-4">
                Nuestro equipo de soporte está aquí para ayudarte con cualquier pregunta adicional
              </p>
              <Link href="/support">
                <Button>Contactar Soporte</Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
