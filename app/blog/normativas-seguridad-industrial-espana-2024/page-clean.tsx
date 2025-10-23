import { Metadata } from 'next';
import BlogLayout from '@/components/blog/BlogLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { CheckCircle, AlertTriangle, FileText, Scale, Info, ExternalLink, Gavel } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Normativas de Seguridad Industrial en España: Marco Legal 2024 | Guía Actualizada',
  description: 'Conoce todas las normativas y regulaciones de seguridad industrial vigentes en España en 2024. Guía completa con leyes, reglamentos y requisitos legales.',
};

export default function NormativasSeguridadEspanaPage() {
  return (
    <BlogLayout>
      <article className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:text-blue-600">Inicio</Link>
            <span>→</span>
            <Link href="/blog" className="hover:text-blue-600">Blog</Link>
            <span>→</span>
            <span>Normativas España 2024</span>
          </div>
          
          <Badge className="mb-4 bg-red-100 text-red-800">Marco Legal</Badge>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Normativas de Seguridad Industrial en España: Marco Legal 2024
          </h1>
          
          <p className="text-xl text-gray-600 mb-6">
            Guía completa y actualizada de todas las leyes, reglamentos y normativas que regulan 
            la seguridad industrial en España durante 2024
          </p>
          
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span>📅 Actualizado: Enero 2024</span>
            <span>⏱️ 15 min de lectura</span>
            <span>📊 Nivel: Intermedio</span>
          </div>
        </div>

        {/* Contenido principal */}
        <div className="prose prose-lg max-w-none">
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
            <div className="flex items-center mb-2">
              <Info className="h-5 w-5 text-blue-600 mr-2" />
              <h3 className="text-lg font-semibold text-blue-800">Marco Normativo Español</h3>
            </div>
            <p className="text-blue-700">
              España cuenta con un robusto marco legal de seguridad industrial que cumple y 
              complementa las directivas europeas, estableciendo estándares rigurosos para 
              proteger tanto a trabajadores como al público en general.
            </p>
          </div>

          <h2>Principales Normativas de Seguridad Industrial</h2>
          
          <h3>1. Ley de Prevención de Riesgos Laborales (Ley 31/1995)</h3>
          <p>
            La piedra angular de la seguridad laboral en España, que establece las bases 
            para la protección de los trabajadores frente a los riesgos derivados del trabajo.
          </p>

          <h3>2. Reglamento de los Servicios de Prevención (RD 39/1997)</h3>
          <p>
            Desarrolla la Ley de Prevención estableciendo la organización y funcionamiento 
            de los servicios de prevención de riesgos laborales.
          </p>

          <h3>3. Directiva de Equipos de Protección Individual</h3>
          <p>
            Regula los requisitos esenciales de seguridad que deben cumplir los EPP 
            comercializados en la Unión Europea.
          </p>

          <div className="bg-green-50 border-l-4 border-green-500 p-6 my-8">
            <div className="flex items-center mb-2">
              <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
              <h3 className="text-lg font-semibold text-green-800">Cumplimiento Obligatorio</h3>
            </div>
            <p className="text-green-700">
              Todas las empresas españolas deben cumplir estas normativas sin excepción. 
              El incumplimiento puede acarrear sanciones graves y responsabilidades penales.
            </p>
          </div>

          <h2>Organismos Reguladores</h2>
          <ul>
            <li><strong>INSST (Instituto Nacional de Seguridad y Salud en el Trabajo)</strong></li>
            <li><strong>AENOR (Asociación Española de Normalización)</strong></li>
            <li><strong>Ministerio de Trabajo y Economía Social</strong></li>
            <li><strong>Inspección de Trabajo y Seguridad Social</strong></li>
          </ul>

          <h2>Sanciones por Incumplimiento</h2>
          <p>
            Las sanciones pueden clasificarse en leves, graves y muy graves, con multas 
            que van desde los 40€ hasta los 819.780€ en los casos más severos.
          </p>

          <div className="bg-red-50 border-l-4 border-red-500 p-6 my-8">
            <div className="flex items-center mb-2">
              <AlertTriangle className="h-5 w-5 text-red-600 mr-2" />
              <h3 className="text-lg font-semibold text-red-800">Importante</h3>
            </div>
            <p className="text-red-700">
              Además de las sanciones administrativas, el incumplimiento grave de las 
              normativas de seguridad puede constituir delito penal.
            </p>
          </div>
        </div>
      </article>
    </BlogLayout>
  );
}