import { Metadata } from 'next';
import ChalecosClient from './ChalecosClientNew';

export const metadata: Metadata = {
  title: 'Guía Completa de Chalecos de Seguridad y Protección Corporal | 2024',
  description: 'Todo sobre chalecos de alta visibilidad, chalecos antibalas, EPP corporal y normativas de seguridad. Guía técnica completa con productos recomendados.',
  keywords: 'chalecos de seguridad, alta visibilidad, EPP, protección corporal, normativas seguridad, chalecos antibalas',
};

export default function GuiaChalecosSeguridadPage() {
  return <ChalecosClient />;
}
