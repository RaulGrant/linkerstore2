import { Metadata } from 'next';
import ProteccionRespiratoriaClient from './ProteccionRespiratoriaClient';

export const metadata: Metadata = {
  title: 'Protección Respiratoria: Máscaras y Respiradores Industriales | Guía Completa 2024',
  description: 'Guía completa sobre equipos de protección respiratoria: tipos de filtros, factores de protección, normativas EN 149 y EN 140. Todo lo que necesitas saber para elegir el respirador correcto.',
  keywords: 'protección respiratoria, máscaras industriales, respiradores, filtros, EN 149, EN 140, seguridad industrial',
};

export default function ProteccionRespiratoriaPage() {
  return <ProteccionRespiratoriaClient />;
}
