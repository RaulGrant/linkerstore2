import { Metadata } from 'next';
import GuantesTrabajoClient from './GuantesTrabajoClient';

export const metadata: Metadata = {
  title: 'Guantes de Trabajo: Selección por Tipo de Riesgo y Aplicación | Guía Completa 2024',
  description: 'Manual detallado sobre guantes de protección: resistencia química, mecánica, térmica, normativas EN 388 y EN 374. Aprende a elegir los guantes correctos para cada trabajo.',
  keywords: 'guantes de trabajo, protección de manos, EN 388, EN 374, guantes químicos, guantes mecánicos, seguridad industrial',
};

export default function GuantesTrabajoPage() {
  return <GuantesTrabajoClient />;
}
