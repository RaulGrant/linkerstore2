"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Shield, Star, CheckCircle, ShoppingCart, ClipboardList } from "lucide-react";

interface ComplianceSolution {
  id: number;
  name: string;
  model: string;
  rating: number;
  reviews: number;
  image: string;
  certification: string;
  features: string[];
  highlights: string[];
  amazonLink: string;
  category: string;
}

const complianceSolutions: ComplianceSolution[] = [
  {
    id: 1,
    name: "MSA V-Gard Casco de Seguridad",
    model: "Casco Industrial Clase E Dieléctrico",
    rating: 4.9,
    reviews: 847,
    image: "/images/cascos/msa-v-gard.webp",
    certification: "NOM-115-STPS-2009",
    features: [
      "Protección Dieléctrica Clase E (20,000V)",
      "Polietileno (HDPE) 100% virgen",
      "Suspensión Fas-Trac III ajustable",
      "Ranuras para accesorios universales",
      "Peso ligero y balanceado",
    ],
    highlights: ["Estándar de la industria", "Máxima protección", "Ultra cómodo"],
    amazonLink: "https://mercadolibre.com/sec/1m3Jf7S",
    category: "EPP",
  },
  {
    id: 2,
    name: "Milwaukee Lentes de Seguridad Antirayaduras y Antiempañantes (Claros)",
    model: "Milwaukee",
    rating: 4.8,
    reviews: 1270,
    image: "/images/catalogo/milwaukee-antirayaduras-F.webp",
    certification: "ANSI + CSA",
    features: [
         "Recubrimiento de capa dura antirayaduras para uso intensivo",
      "Tratamiento antiempañante efectivo",
      "Puente nasal flexible y patillas cómodas",
      "Cumplen ANSI Z87.1+ y CSA Z94.3 (doble certificación)"
    ],
    highlights: ["antirayaduras", "antiempañante", "ANSI", "CSA"],
    amazonLink: "https://mercadolibre.com/sec/2MKekSP",
    category: "EPP",
  },
  {
    id: 3,
    name: "Combyeo Arnés de Seguridad con Cuerda Doble y Gancho",
    model: "Arnés de Seguridad Cuerpo Completo",
    rating: 4.8,
    reviews: 492,
    image: "/images/catalogo/combyeo-kit-F.webp",
    certification: "NOM-009-STPS-2011",
    features: [
      "Incluye arnés, línea de vida/cuerda doble y gancho",
      "Precio extremadamente accesible",
      "Kit 'todo en uno' orientado a consumo masivo",
      "Certificaciones no verificables (no recomendado para uso regulado)"
    ],
    highlights: ["Seguridad en alturas", "Certificación NOM-009", "Comodidad superior"],
    amazonLink: "https://mercadolibre.com/sec/1xH4X5C",
    category: "EPP",
  },
  {
    id: 4,
    name: "Fluke 117 True-RMS para Electricistas",
    model: "True RMS",
    rating: 4.9,
    reviews: 1500,
    image: "/images/catalogo/fluke-117-F.webp",
    certification: "CAT III 600V",
    features: [
      "True RMS para precisión en cargas complejas",
      "Detección de voltaje sin contacto (VoltAlert™)",
      "Entrada de baja impedancia (LoZ) para eliminar lecturas fantasma",
      "Categoría de seguridad CAT III 600V",
      "Pantalla retroiluminada y diseño compacto profesional"
    ],
    highlights: ["true-rms", "voltalert", "LoZ", "CAT-III", "profesional"],
    amazonLink:  "https://mercadolibre.com/sec/1RmPMSC",
    category: "Protección Eléctrica",
  },
  {
    id: 5,
    name: "Kit Deppon 168 Piezas + Primeros Auxilios",
    model: "Botiquín de Primeros Auxilios",
    rating: 4.0,
    reviews: 100,
    image: "/images/catalogo/botiquin-industrial-F.webp",
    certification: "NOM-017-STPS-2008",
    features: [
      "168 piezas incluye curitas y guantes",
      "Herramientas manuales básicas",
      "2 matracas (1/4\" y 1/2\")",
      "Estuche naranja alta visibilidad",
      "Ideal para kit de emergencia auto"
    ],
    highlights: ["completo", "portátil", "NOM-017"],
    amazonLink: "https://mercadolibre.com/sec/2tACX4Z",
    category: "Herramientas",
  },
  {
    id: 6,
    name: "Overol Industrial Con Cintas Reflejantes Unisex (Dickies Peto)",
    model: "Overol con Cintas Reflejantes",
    rating: 4.0,
    reviews: 15,
    image: "/images/catalogo/dickies-peto-F+.webp",
    certification: "NOM-017-STPS-2008",
    features: [
       "Cintas reflectantes",
      "Bolsillos seguros distribuidos en el cuerpo",
      "Bolsillo para teléfono y bolsillo para reglas",
      "Diseño cómodo y funcional",
      "Construcción resistente"
    ],
    highlights: ["overol", "unisex", "reflejante", "bolsillos"],
    amazonLink: "https://mercadolibre.com/sec/1sD7aUv",
    category: "EPP",
  },
];

function SolutionCardImage({ solution }: { solution: ComplianceSolution }) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div className="relative h-64 overflow-hidden rounded-3xl bg-gradient-to-br from-slate-800 to-slate-950">
      {!error && (
        <Image
          src={solution.image}
          alt={`${solution.name} - ${solution.model}`}
          fill
          className={`object-cover transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"}`}
          onLoad={() => setLoaded(true)}
          onError={() => {
            setError(true);
            setLoaded(false);
          }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      )}
      {(error || !loaded) && (
        <div className="absolute inset-0 flex items-center justify-center text-6xl text-white/20">📊</div>
      )}
      <div className="absolute bottom-4 left-4">
        <Badge className="bg-emerald-100 text-emerald-800 text-xs font-semibold">
          <Shield className="mr-1 h-3 w-3" />
          {solution.certification}
        </Badge>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/50 to-transparent" />
    </div>
  );
}

export default function TopProducts() {
  return (
    <section id="top-soluciones" className="bg-gradient-to-b from-gray-50 via-white to-blue-50 py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <Badge className="mb-4 bg-blue-100 text-blue-800 px-4 py-2 text-sm font-semibold">
            🛡️ EQUIPOS DE PROTECCIÓN CERTIFICADOS
          </Badge>
          <h2 className="text-4xl font-black text-gray-900 md:text-5xl">
            EPP Certificado para Cumplimiento NOM-STPS
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Equipos de protección personal certificados según normativas mexicanas que garantizan la seguridad de tu personal
            y el cumplimiento de las regulaciones de la Secretaría del Trabajo y Previsión Social.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {complianceSolutions.map((solution, index) => (
            <motion.div
              key={solution.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`group flex h-full flex-col overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg transition-shadow duration-500 hover:shadow-2xl ${
                index === 0 ? "border-blue-300 shadow-blue-100" : ""
              }`}
            >
              {index === 0 && (
                <div className="absolute left-6 top-6 z-10">
                  <Badge className="bg-gradient-to-r from-blue-500 to-indigo-600 px-3 py-1 text-xs font-bold text-white">
                    #1 RECOMENDADO
                  </Badge>
                </div>
              )}

              <SolutionCardImage solution={solution} />

              <div className="flex flex-1 flex-col p-6">
                <div className="mb-4">
                  <Badge className="mb-3 bg-gray-100 text-gray-700 text-xs font-semibold">
                    {solution.category}
                  </Badge>
                  <h3 className="text-xl font-bold text-gray-900">{solution.name}</h3>
                  <p className="mt-1 text-sm text-gray-600">{solution.model}</p>
                </div>

                <div className="mb-4 flex items-center gap-2 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, starIndex) => (
                      <Star
                        key={starIndex}
                        className={`h-4 w-4 ${
                          starIndex < Math.round(solution.rating)
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="font-semibold text-gray-900">{solution.rating.toFixed(1)}</span>
                  <span>({solution.reviews} opiniones)</span>
                </div>

                <ul className="mb-6 space-y-2 text-sm text-gray-600">
                  {solution.features.slice(0, 4).map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 text-emerald-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto flex flex-wrap gap-2 pb-4">
                  {solution.highlights.map((item) => (
                    <Badge key={item} className="bg-blue-50 text-blue-600 text-xs font-semibold">
                      {item}
                    </Badge>
                  ))}
                </div>

                <motion.a
                  href={solution.amazonLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-3 text-sm font-semibold text-white transition-all hover:from-blue-700 hover:to-indigo-700"
                >
                  <ShoppingCart className="h-4 w-4" />
                  Comprar en Mercado Libre
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 rounded-3xl border border-blue-200 bg-gradient-to-r from-blue-50 via-white to-indigo-50 p-10 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900">
            ¿No sabes por dónde empezar con tu plan de cumplimiento?
          </h3>
          <p className="mt-4 text-gray-600 md:text-lg">
            Nuestro equipo legal y técnico prepara un roadmap personalizado para tu industria. Incluye diagnóstico inicial,
            priorización de NOM aplicables y plan de trabajo a 90 días con responsables.
          </p>
          <motion.a
            href="/contacto"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 text-base font-bold text-white shadow-lg transition-all hover:from-blue-700 hover:to-purple-700"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ClipboardList className="h-5 w-5" />
            Solicitar Plan Personalizado
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
