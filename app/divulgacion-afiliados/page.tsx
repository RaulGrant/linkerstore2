import { Metadata } from 'next';
import BlogLayout from '@/components/blog/BlogLayout';
import { ExternalLink } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Divulgación de Afiliados | LinkerPro',
  description: 'Información sobre nuestro programa de afiliados de Amazon y cómo funcionan nuestras comisiones.',
};

export default function DivulgacionAfiliadosPage() {
  return (
    <BlogLayout>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Divulgación de Afiliados</h1>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <div className="flex items-start gap-3">
              <ExternalLink className="h-6 w-6 text-blue-600 mt-1" />
              <div>
                <h2 className="text-xl font-bold text-blue-900 mb-2">Transparencia Total</h2>
                <p className="text-blue-800">
                  En LinkerPro creemos en la transparencia total. Esta página explica 
                  cómo funcionan nuestros enlaces de afiliados y cómo esto nos ayuda 
                  a mantener nuestro contenido gratuito y de calidad.
                </p>
              </div>
            </div>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Programa de Afiliados de Amazon</h2>
              <p className="text-gray-700 mb-4">
                LinkerPro es un participante del Programa de Afiliados de Amazon Services LLC, 
                un programa de publicidad de afiliados diseñado para proporcionar un medio 
                para que los sitios web ganen tarifas de publicidad mediante publicidad 
                y enlaces a Amazon.com y Amazon.es.
              </p>
              <p className="text-gray-700 mb-4">
                Esto significa que cuando haces clic en nuestros enlaces hacia productos 
                de Amazon y realizas una compra, podemos recibir una pequeña comisión 
                sin costo adicional para ti.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">¿Cómo Funciona?</h2>
              <div className="bg-gray-50 rounded-lg p-6 mb-4">
                <ol className="list-decimal list-inside text-gray-700 space-y-3">
                  <li>Investigamos y reseñamos productos de seguridad industrial</li>
                  <li>Incluimos enlaces a Amazon donde puedes comprar estos productos</li>
                  <li>Si realizas una compra a través de nuestros enlaces, Amazon nos paga una comisión</li>
                  <li>Tú pagas el mismo precio, sin costos adicionales</li>
                  <li>Estas comisiones nos ayudan a mantener el sitio web y crear más contenido</li>
                </ol>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Nuestro Compromiso</h2>
              <p className="text-gray-700 mb-4">
                <strong>Independencia Editorial:</strong> Nuestras reseñas y recomendaciones 
                son independientes y basadas en investigación real. No recomendamos productos 
                solo porque generen más comisiones.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Calidad Primero:</strong> Solo recomendamos productos que nuestro 
                equipo de expertos considera de alta calidad y útiles para profesionales 
                de seguridad industrial.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Transparencia:</strong> Siempre indicamos claramente cuando un 
                enlace es de afiliado y cómo esto nos beneficia.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">¿Por Qué Usamos Enlaces de Afiliados?</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li><strong>Contenido Gratuito:</strong> Nos permite ofrecer todo nuestro contenido de forma gratuita</li>
                <li><strong>Investigación Continua:</strong> Financiamos la investigación y testing de nuevos productos</li>
                <li><strong>Actualizaciones Regulares:</strong> Mantenemos nuestras reseñas actualizadas</li>
                <li><strong>Equipo de Expertos:</strong> Podemos mantener un equipo de profesionales certificados</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Tu Elección</h2>
              <p className="text-gray-700 mb-4">
                El uso de nuestros enlaces de afiliados es completamente opcional. 
                Puedes buscar los productos directamente en Amazon o en cualquier 
                otro retailer de tu preferencia. 
              </p>
              <p className="text-gray-700 mb-4">
                Si decides apoyarnos usando nuestros enlaces, te agradecemos enormemente, 
                ya que nos ayudas a continuar proporcionando contenido de calidad sobre 
                seguridad industrial.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Preguntas Frecuentes</h2>
              
              <div className="space-y-4">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h3 className="font-bold text-gray-900 mb-2">¿Pagaré más si uso sus enlaces?</h3>
                  <p className="text-gray-700">No, pagarás exactamente el mismo precio. Amazon nos paga la comisión, no tú.</p>
                </div>
                
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h3 className="font-bold text-gray-900 mb-2">¿Influyen las comisiones en sus reseñas?</h3>
                  <p className="text-gray-700">No. Nuestras reseñas están basadas en investigación independiente y experiencia profesional.</p>
                </div>
                
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h3 className="font-bold text-gray-900 mb-2">¿Qué pasa si no estoy satisfecho con mi compra?</h3>
                  <p className="text-gray-700">Todas las compras están sujetas a las políticas de devolución de Amazon. Nosotros no manejamos las transacciones.</p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contacto</h2>
              <p className="text-gray-700 mb-4">
                Si tienes preguntas sobre nuestro programa de afiliados, puedes contactarnos:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Email: afiliados@linkerpro.com</li>
                <li>Página de contacto: <a href="/sobre-nosotros" className="text-blue-600 hover:underline">Sobre Nosotros</a></li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </BlogLayout>
  );
}
