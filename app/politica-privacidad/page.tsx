import { Metadata } from 'next';
import BlogLayout from '@/components/blog/BlogLayout';

export const metadata: Metadata = {
  title: 'Política de Privacidad | LinkerPro',
  description: 'Política de privacidad de LinkerPro. Información sobre cómo recopilamos, usamos y protegemos tus datos personales.',
};

export default function PoliticaPrivacidadPage() {
  return (
    <BlogLayout>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Política de Privacidad</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              <strong>Última actualización:</strong> Agosto 2025
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Información que Recopilamos</h2>
              <p className="text-gray-700 mb-4">
                En LinkerPro, recopilamos la siguiente información:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Información de navegación (cookies, dirección IP, tipo de navegador)</li>
                <li>Datos de interacción con nuestro contenido</li>
                <li>Información voluntaria proporcionada en formularios de contacto</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Cómo Usamos la Información</h2>
              <p className="text-gray-700 mb-4">
                Utilizamos la información recopilada para:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Mejorar la experiencia del usuario en nuestro sitio web</li>
                <li>Analizar el tráfico y el comportamiento de los usuarios</li>
                <li>Personalizar el contenido mostrado</li>
                <li>Responder a consultas y proporcionar soporte</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Cookies</h2>
              <p className="text-gray-700 mb-4">
                Utilizamos cookies para mejorar la funcionalidad de nuestro sitio web. 
                Puedes desactivar las cookies en la configuración de tu navegador, aunque 
                esto puede afectar la funcionalidad del sitio.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Compartir Información</h2>
              <p className="text-gray-700 mb-4">
                No vendemos, comercializamos ni transferimos tu información personal a terceros, 
                excepto en los siguientes casos:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Cuando sea requerido por ley</li>
                <li>Para proteger nuestros derechos legales</li>
                <li>Con proveedores de servicios que nos ayudan a operar nuestro sitio web</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Seguridad</h2>
              <p className="text-gray-700 mb-4">
                Implementamos medidas de seguridad apropiadas para proteger tu información 
                personal contra acceso no autorizado, alteración, divulgación o destrucción.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Contacto</h2>
              <p className="text-gray-700 mb-4">
                Si tienes preguntas sobre esta Política de Privacidad, puedes contactarnos en:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Email: privacidad@linkerpro.com</li>
                <li>Teléfono: +34 900 123 456</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </BlogLayout>
  );
}
