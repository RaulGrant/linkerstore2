import { Metadata } from 'next'
import NormativasMexicoContent from '@/components/blog/NormativasMexicoContent'

export const metadata: Metadata = {
  title: 'Normativas de Seguridad Industrial en México 2025 | Guía Maestra STPS',
  description: 'Guía definitiva de las Normas Oficiales Mexicanas (NOM-STPS), Ley Federal del Trabajo y Reglamento Federal de Seguridad y Salud en el Trabajo. Todo lo que necesitas saber para cumplir y evitar multas.',
  keywords: ['NOM-STPS', 'Seguridad Industrial México', 'Normas Oficiales Mexicanas', 'STPS', 'Protección Civil', 'Seguridad Laboral', 'NOM-035', 'NOM-017', 'NOM-030'],
  openGraph: {
    title: 'Normativas de Seguridad Industrial en México 2025 | Guía Maestra STPS',
    description: 'Guía definitiva de las Normas Oficiales Mexicanas (NOM-STPS). Evita multas y cumple con la ley.',
    type: 'article',
    locale: 'es_MX',
  }
}

export default function NormativasSeguridadMexicoPage() {
  return <NormativasMexicoContent />
}
