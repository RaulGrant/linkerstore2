import { GuideContent } from '@/components/modals/GuideModal';

export const guideData: Record<string, GuideContent> = {
  safety: {
    title: 'Guía Completa de Seguridad Industrial',
    category: 'Seguridad y EPP',
    icon: 'hardhat',
    description: 'Todo lo que necesitas saber para equipar un lugar de trabajo seguro con EPP de calidad.',
    difficulty: 'Básico',
    estimatedTime: '15-20 minutos',
    overview: 'La seguridad industrial es fundamental en cualquier ambiente laboral. Esta guía te ayudará a seleccionar el equipo de protección personal (EPP) adecuado, implementar protocolos de seguridad y crear un ambiente de trabajo seguro para todos los trabajadores. Cubriremos desde cascos y calzado de seguridad hasta sistemas anti-caídas y equipos especializados.',
    essentialItems: [
      {
        name: 'Casco de Seguridad',
        description: 'Protección craneal contra impactos, penetración y choques eléctricos',
        importance: 'Crítico',
        estimatedPrice: '$200 - $800 MXN'
      },
      {
        name: 'Calzado de Seguridad',
        description: 'Botas con puntera de acero y suela antideslizante',
        importance: 'Crítico',
        estimatedPrice: '$800 - $2,500 MXN'
      },
      {
        name: 'Lentes de Seguridad',
        description: 'Protección ocular contra partículas, químicos y radiación',
        importance: 'Crítico',
        estimatedPrice: '$150 - $600 MXN'
      },
      {
        name: 'Guantes de Trabajo',
        description: 'Protección para manos según el tipo de trabajo (cortes, químicos, etc.)',
        importance: 'Recomendado',
        estimatedPrice: '$100 - $500 MXN'
      },
      {
        name: 'Chaleco Reflectante',
        description: 'Alta visibilidad en áreas de tráfico vehicular',
        importance: 'Recomendado',
        estimatedPrice: '$200 - $600 MXN'
      },
      {
        name: 'Arnés de Seguridad',
        description: 'Sistema anti-caídas para trabajos en altura',
        importance: 'Crítico',
        estimatedPrice: '$1,500 - $4,000 MXN'
      }
    ],
    stepByStep: [
      {
        step: 1,
        title: 'Evaluación de Riesgos',
        description: 'Identifica todos los riesgos presentes en el área de trabajo: caídas, impactos, exposición química, ruido, etc.',
        tips: [
          'Realiza inspecciones regulares del área de trabajo',
          'Documenta todos los riesgos identificados',
          'Consulta las normas NOM-017-STPS y NOM-100-STPS'
        ],
        warnings: [
          'No subestimes riesgos aparentemente menores',
          'Considera riesgos estacionales o temporales'
        ]
      },
      {
        step: 2,
        title: 'Selección de EPP Apropiado',
        description: 'Basándote en la evaluación de riesgos, selecciona el EPP específico para cada trabajador y tarea.',
        tips: [
          'Verifica certificaciones NOM y ANSI',
          'Considera comodidad y ergonomía',
          'Asegúrate de tener tallas disponibles para todos'
        ],
        warnings: [
          'No uses EPP dañado o vencido',
          'Cada tipo de trabajo requiere EPP específico'
        ]
      },
      {
        step: 3,
        title: 'Capacitación del Personal',
        description: 'Entrena a todos los trabajadores en el uso correcto, mantenimiento y limitaciones de cada EPP.',
        tips: [
          'Incluye capacitación práctica hands-on',
          'Documenta la capacitación recibida',
          'Realiza repasos periódicos'
        ],
        warnings: [
          'La capacitación inadecuada puede ser peor que no usar EPP',
          'Asegúrate que entiendan las consecuencias de no usar EPP'
        ]
      },
      {
        step: 4,
        title: 'Implementación y Supervisión',
        description: 'Establece políticas claras de uso obligatorio y supervisa el cumplimiento diario.',
        tips: [
          'Crea check-lists diarios de EPP',
          'Implementa sistema de reporte de incidentes',
          'Reconoce el buen cumplimiento'
        ],
        warnings: [
          'La inconsistencia en supervisión reduce la efectividad',
          'Debe haber consecuencias claras por incumplimiento'
        ]
      },
      {
        step: 5,
        title: 'Mantenimiento y Reemplazo',
        description: 'Establece programas de inspección, limpieza y reemplazo regular del EPP.',
        tips: [
          'Lleva registro de fechas de compra y vida útil',
          'Inspecciona EPP antes de cada uso',
          'Ten stock de reemplazo disponible'
        ]
      }
    ],
    budgetGuide: {
      economic: {
        range: '$2,000 - $4,000 MXN por trabajador',
        description: 'Equipamiento básico pero funcional que cumple normativas mínimas',
        items: [
          'Casco básico certificado',
          'Lentes de seguridad estándar',
          'Guantes de trabajo generales',
          'Calzado de seguridad básico'
        ]
      },
      standard: {
        range: '$4,000 - $8,000 MXN por trabajador',
        description: 'Equipo de calidad media con mayor durabilidad y comodidad',
        items: [
          'Casco con accesorios (protector facial)',
          'Lentes con tratamiento anti-fog',
          'Guantes especializados por tarea',
          'Calzado ergonómico con soporte',
          'Chaleco reflectante'
        ]
      },
      premium: {
        range: '$8,000 - $15,000 MXN por trabajador',
        description: 'Equipamiento profesional de alta gama con características avanzadas',
        items: [
          'Casco con sistema de ventilación',
          'Lentes con protección UV y anti-rayadura',
          'Guantes ergonómicos especializados',
          'Calzado con tecnología de absorción',
          'Arnés anti-caídas completo',
          'Protección auditiva activa'
        ]
      }
    },
    commonMistakes: [
      {
        mistake: 'Comprar EPP basándose solo en el precio',
        consequence: 'Equipos de baja calidad que no protegen adecuadamente y se deterioran rápido',
        solution: 'Evalúa la relación costo-beneficio considerando durabilidad, certificaciones y confort'
      },
      {
        mistake: 'No considerar la comodidad del usuario',
        consequence: 'Los trabajadores evitan usar EPP incómodo, reduciendo la protección',
        solution: 'Involucra a los trabajadores en la selección y prueba diferentes opciones'
      },
      {
        mistake: 'Falta de capacitación en uso correcto',
        consequence: 'EPP mal utilizado no proporciona la protección esperada',
        solution: 'Implementa programas de capacitación continua con evaluaciones prácticas'
      },
      {
        mistake: 'No reemplazar EPP dañado o vencido',
        consequence: 'Falsa sensación de seguridad con equipos que no protegen',
        solution: 'Establece programas de inspección y reemplazo con fechas definidas'
      }
    ],
    maintenance: [
      {
        frequency: 'Diario',
        task: 'Inspección visual del EPP',
        description: 'Revisar grietas, desgaste, daños o contaminación antes de cada uso'
      },
      {
        frequency: 'Semanal',
        task: 'Limpieza profunda',
        description: 'Lavar y desinfectar EPP según instrucciones del fabricante'
      },
      {
        frequency: 'Mensual',
        task: 'Inspección técnica',
        description: 'Revisión detallada de sistemas de sujeción, sellos y componentes críticos'
      },
      {
        frequency: 'Anual',
        task: 'Evaluación y reemplazo',
        description: 'Revisar toda la efectividad del programa de EPP y actualizar equipos'
      }
    ],
    relatedProducts: [
      {
        name: 'Casco de Seguridad 3M',
        description: 'Casco industrial con certificación ANSI Z89.1',
        asin: 'B001D5K7KG'
      },
      {
        name: 'Lentes de Seguridad',
        description: 'Protección ocular con filtro UV',
        asin: 'B002I8CB4O'
      }
    ]
  },
  
  electrical: {
    title: 'Guía de Equipos Eléctricos y Dieléctricos',
    category: 'Electricidad',
    icon: 'zap',
    description: 'Equipamiento especializado para trabajos eléctricos seguros, desde herramientas aisladas hasta equipos de medición.',
    difficulty: 'Intermedio',
    estimatedTime: '25-30 minutos',
    overview: 'Los trabajos eléctricos requieren equipamiento especializado para prevenir accidentes por contacto eléctrico, arco eléctrico y descargas. Esta guía cubre la selección de herramientas dieléctricas, equipos de medición, protección personal específica para electricistas y procedimientos de seguridad en instalaciones eléctricas de baja, media y alta tensión.',
    essentialItems: [
      {
        name: 'Guantes Dieléctricos',
        description: 'Protección contra descargas eléctricas con clasificación de voltaje',
        importance: 'Crítico',
        estimatedPrice: '$800 - $2,500 MXN'
      },
      {
        name: 'Multímetro Digital',
        description: 'Medición segura de voltaje, corriente y resistencia',
        importance: 'Crítico',
        estimatedPrice: '$500 - $3,000 MXN'
      },
      {
        name: 'Herramientas Aisladas',
        description: 'Destornilladores, alicates y llaves aisladas hasta 1000V',
        importance: 'Crítico',
        estimatedPrice: '$1,200 - $4,000 MXN'
      },
      {
        name: 'Detector de Voltaje',
        description: 'Verificación de ausencia de tensión sin contacto',
        importance: 'Crítico',
        estimatedPrice: '$300 - $1,500 MXN'
      },
      {
        name: 'Calzado Dieléctrico',
        description: 'Botas aislantes para protección contra contacto a tierra',
        importance: 'Recomendado',
        estimatedPrice: '$1,500 - $4,000 MXN'
      },
      {
        name: 'Escalera Fibra de Vidrio',
        description: 'Escalera no conductiva para trabajos en altura',
        importance: 'Recomendado',
        estimatedPrice: '$2,000 - $8,000 MXN'
      }
    ],
    stepByStep: [
      {
        step: 1,
        title: 'Clasificación del Trabajo Eléctrico',
        description: 'Determina el nivel de tensión y tipo de instalación (residencial, comercial, industrial).',
        tips: [
          'Baja tensión: hasta 1000V AC / 1500V DC',
          'Media tensión: 1kV a 35kV',
          'Alta tensión: más de 35kV',
          'Consulta NOM-029-STPS-2011'
        ],
        warnings: [
          'Cada nivel requiere EPP específico',
          'No trabajes en sistemas que no conoces'
        ]
      },
      {
        step: 2,
        title: 'Selección de Herramientas Dieléctricas',
        description: 'Elige herramientas con aislamiento apropiado para el voltaje de trabajo.',
        tips: [
          'Verifica certificación IEC 60900',
          'Inspecciona aislamiento antes de cada uso',
          'Marca herramientas con fecha de inspección'
        ],
        warnings: [
          'Herramientas dañadas pueden ser letales',
          'No uses herramientas improvisadas'
        ]
      },
      {
        step: 3,
        title: 'Procedimientos de Bloqueo/Etiquetado',
        description: 'Implementa LOTO (Lock Out / Tag Out) antes de cualquier trabajo.',
        tips: [
          'Usa candados personales únicos',
          'Etiqueta con información clara',
          'Verifica ausencia de tensión',
          'Documenta el procedimiento'
        ],
        warnings: [
          'Solo quien coloca el bloqueo puede retirarlo',
          'Verifica siempre con detector de voltaje'
        ]
      },
      {
        step: 4,
        title: 'Uso de Equipos de Medición',
        description: 'Utiliza multímetros y detectores siguiendo procedimientos seguros.',
        tips: [
          'Calibra equipos regularmente',
          'Usa la escala de medición apropiada',
          'Conecta siempre tierra primero',
          'Mantén una mano libre durante mediciones'
        ],
        warnings: [
          'No confíes en medidores sin calibrar',
          'Usa siempre EPP durante mediciones'
        ]
      },
      {
        step: 5,
        title: 'Protocolos de Emergencia',
        description: 'Establece procedimientos claros para accidentes eléctricos.',
        tips: [
          'Capacita en primeros auxilios',
          'Ten números de emergencia visibles',
          'Practica desconexión rápida',
          'Mantén extintores Clase C disponibles'
        ]
      }
    ],
    budgetGuide: {
      economic: {
        range: '$3,000 - $6,000 MXN por técnico',
        description: 'Kit básico para trabajos eléctricos residenciales y comerciales de baja tensión',
        items: [
          'Multímetro básico certificado',
          'Set herramientas aisladas básicas',
          'Detector de voltaje sin contacto',
          'Guantes dieléctricos Clase 0'
        ]
      },
      standard: {
        range: '$6,000 - $12,000 MXN por técnico',
        description: 'Equipamiento profesional para electricistas comerciales e industriales',
        items: [
          'Multímetro digital avanzado',
          'Kit completo herramientas aisladas',
          'Guantes dieléctricos Clase 1',
          'Detector voltaje con contacto',
          'Calzado dieléctrico',
          'Escalera fibra de vidrio'
        ]
      },
      premium: {
        range: '$12,000 - $25,000 MXN por técnico',
        description: 'Equipo especializado para trabajos de alta tensión y mantenimiento industrial',
        items: [
          'Analizador de redes eléctricas',
          'Herramientas aisladas hasta 20kV',
          'Guantes dieléctricos Clase 2-4',
          'Traje de arco eléctrico',
          'Pértiga aislante telescópica',
          'Termómetro infrarrojo',
          'Medidor de aislamiento'
        ]
      }
    },
    commonMistakes: [
      {
        mistake: 'Trabajar en circuitos energizados sin necesidad',
        consequence: 'Riesgo innecesario de electrocución o quemaduras por arco eléctrico',
        solution: 'Siempre desenergiza circuitos cuando sea posible y usa procedimientos LOTO'
      },
      {
        mistake: 'No verificar ausencia de tensión',
        consequence: 'Accidentes graves por asumir que un circuito está desenergizado',
        solution: 'Usa detector de voltaje calibrado para verificar antes de tocar'
      },
      {
        mistake: 'Usar herramientas no aisladas en trabajo eléctrico',
        consequence: 'Contacto accidental con partes energizadas',
        solution: 'Invierte en herramientas dieléctricas certificadas para tu nivel de voltaje'
      },
      {
        mistake: 'Ignorar la clasificación de arco eléctrico',
        consequence: 'Quemaduras graves por exposición a arco eléctrico',
        solution: 'Evalúa peligro de arco y usa EPP clasificado para el nivel de energía'
      }
    ],
    maintenance: [
      {
        frequency: 'Antes de cada uso',
        task: 'Inspección visual de herramientas',
        description: 'Revisar grietas, desgaste o daños en aislamiento de herramientas y EPP'
      },
      {
        frequency: 'Mensual',
        task: 'Prueba de aislamiento de guantes',
        description: 'Prueba de inflado para detectar perforaciones en guantes dieléctricos'
      },
      {
        frequency: 'Semestral',
        task: 'Calibración de equipos de medición',
        description: 'Calibrar multímetros y detectores en laboratorio certificado'
      },
      {
        frequency: 'Anual',
        task: 'Prueba dieléctrica profesional',
        description: 'Enviar guantes y herramientas a prueba dieléctrica certificada'
      }
    ],
    relatedProducts: [
      {
        name: 'Multímetro Fluke',
        description: 'Medidor digital profesional con certificación de seguridad',
        asin: 'B000EQ1GHU'
      },
      {
        name: 'Detector de Voltaje',
        description: 'Detector sin contacto para verificación rápida',
        asin: 'B001UAHZAM'
      }
    ]
  },

  vision: {
    title: 'Protección Visual y Equipos de Visión',
    category: 'Protección Visual',
    icon: 'eye',
    description: 'Selección y uso de equipos de protección visual para diferentes ambientes industriales.',
    difficulty: 'Básico',
    estimatedTime: '10-15 minutos',
    overview: 'La protección visual es crítica en ambientes industriales donde hay riesgo de impacto de partículas, salpicaduras químicas, radiación UV, soldadura o láser. Esta guía te ayudará a seleccionar los lentes y equipos de protección visual apropiados, entender las diferentes clasificaciones y mantener una visión clara y protegida en el trabajo.',
    essentialItems: [
      {
        name: 'Lentes de Seguridad Básicos',
        description: 'Protección contra impactos y partículas volando',
        importance: 'Crítico',
        estimatedPrice: '$150 - $400 MXN'
      },
      {
        name: 'Gafas de Protección Química',
        description: 'Sellado completo contra salpicaduras y vapores',
        importance: 'Crítico',
        estimatedPrice: '$300 - $800 MXN'
      },
      {
        name: 'Careta de Soldadura',
        description: 'Protección contra radiación de soldadura y chispas',
        importance: 'Crítico',
        estimatedPrice: '$800 - $3,000 MXN'
      },
      {
        name: 'Lentes con Graduación',
        description: 'Lentes de seguridad con corrección visual personalizada',
        importance: 'Recomendado',
        estimatedPrice: '$800 - $2,500 MXN'
      },
      {
        name: 'Protector Facial',
        description: 'Protección facial completa para riesgos múltiples',
        importance: 'Recomendado',
        estimatedPrice: '$200 - $600 MXN'
      }
    ],
    stepByStep: [
      {
        step: 1,
        title: 'Evaluación de Riesgos Visuales',
        description: 'Identifica todos los peligros para la vista en tu área de trabajo.',
        tips: [
          'Mapea fuentes de partículas volando',
          'Identifica químicos que pueden salpicar',
          'Evalúa fuentes de radiación UV o IR',
          'Considera riesgos de soldadura o láser'
        ],
        warnings: [
          'Los daños oculares pueden ser permanentes',
          'Algunos riesgos no son visibles (UV, láser)'
        ]
      },
      {
        step: 2,
        title: 'Selección del Tipo de Protección',
        description: 'Elige el equipo apropiado según los riesgos identificados.',
        tips: [
          'Lentes básicos: impactos ligeros',
          'Gafas selladas: químicos y polvo',
          'Caretas: soldadura y radiación',
          'Combinaciones para riesgos múltiples'
        ],
        warnings: [
          'Un tipo no protege contra todos los riesgos',
          'La protección debe cubrir toda el área de riesgo'
        ]
      },
      {
        step: 3,
        title: 'Ajuste y Comodidad',
        description: 'Asegúrate que el equipo se ajuste correctamente y sea cómodo de usar.',
        tips: [
          'Ajusta patillas y puente nasal',
          'Verifica que no haya espacios abiertos',
          'Prueba compatibilidad con otros EPP',
          'Considera opciones anti-fog'
        ],
        warnings: [
          'Lentes mal ajustados no protegen adecuadamente',
          'Incomodidad lleva a no usar protección'
        ]
      },
      {
        step: 4,
        title: 'Mantenimiento y Limpieza',
        description: 'Mantén los equipos limpios y en buen estado para visión clara.',
        tips: [
          'Limpia con productos recomendados',
          'Usa paños que no rayen',
          'Guarda en estuches protectores',
          'Reemplaza lentes rayados'
        ],
        warnings: [
          'Lentes rayados reducen visión y protección',
          'Químicos incorrectos pueden dañar recubrimientos'
        ]
      }
    ],
    budgetGuide: {
      economic: {
        range: '$200 - $500 MXN por trabajador',
        description: 'Protección básica para riesgos ligeros a moderados',
        items: [
          'Lentes de seguridad básicos',
          'Gafas de protección simples',
          'Estuche de protección'
        ]
      },
      standard: {
        range: '$500 - $1,200 MXN por trabajador',
        description: 'Protección versátil para múltiples aplicaciones',
        items: [
          'Lentes con tratamiento anti-fog',
          'Gafas selladas para químicos',
          'Protector facial básico',
          'Kit de limpieza'
        ]
      },
      premium: {
        range: '$1,200 - $3,500 MXN por trabajador',
        description: 'Protección especializada para aplicaciones críticas',
        items: [
          'Lentes con graduación personalizada',
          'Careta de soldadura automática',
          'Gafas con ventilación forzada',
          'Lentes intercambiables',
          'Sistema de limpieza ultrasónica'
        ]
      }
    },
    commonMistakes: [
      {
        mistake: 'Usar lentes de sol comunes como protección',
        consequence: 'No proporcionan protección contra impactos ni cubren adecuadamente',
        solution: 'Usa únicamente lentes certificados ANSI Z87.1 o equivalente'
      },
      {
        mistake: 'No reemplazar lentes rayados o dañados',
        consequence: 'Visión reducida y protección comprometida',
        solution: 'Inspecciona regularmente y reemplaza lentes dañados inmediatamente'
      },
      {
        mistake: 'Usar protección incorrecta para el tipo de soldadura',
        consequence: 'Daño retinal por radiación UV/IR',
        solution: 'Selecciona filtro apropiado según tipo y amperaje de soldadura'
      }
    ],
    maintenance: [
      {
        frequency: 'Diario',
        task: 'Limpieza de lentes',
        description: 'Limpiar lentes con solución apropiada y paño libre de pelusa'
      },
      {
        frequency: 'Semanal',
        task: 'Inspección de daños',
        description: 'Revisar rayones, grietas o desgaste en marcos y lentes'
      },
      {
        frequency: 'Mensual',
        task: 'Verificación de ajuste',
        description: 'Comprobar que el equipo sigue ajustando correctamente'
      },
      {
        frequency: 'Según uso',
        task: 'Reemplazo de componentes',
        description: 'Cambiar lentes, filtros o correas según desgaste'
      }
    ]
  },

  tools: {
    title: 'Herramientas y Equipos de Trabajo',
    category: 'Herramientas',
    icon: 'wrench',
    description: 'Selección de herramientas manuales y eléctricas para diferentes oficios y aplicaciones industriales.',
    difficulty: 'Intermedio',
    estimatedTime: '20-25 minutos',
    overview: 'La selección correcta de herramientas es fundamental para la productividad, calidad del trabajo y seguridad. Esta guía cubre herramientas manuales básicas, herramientas eléctricas, equipos de medición y herramientas especializadas. Aprenderás a evaluar calidad, funcionalidad y relación costo-beneficio para formar un kit de herramientas completo y eficiente.',
    essentialItems: [
      {
        name: 'Set de Destornilladores',
        description: 'Destornilladores planos y Phillips de diferentes tamaños',
        importance: 'Crítico',
        estimatedPrice: '$300 - $1,200 MXN'
      },
      {
        name: 'Alicates Múltiples',
        description: 'Alicates de corte, punta y universales',
        importance: 'Crítico',
        estimatedPrice: '$400 - $1,500 MXN'
      },
      {
        name: 'Llaves Ajustables',
        description: 'Set de llaves inglesas y de tubo',
        importance: 'Crítico',
        estimatedPrice: '$500 - $2,000 MXN'
      },
      {
        name: 'Taladro Eléctrico',
        description: 'Taladro con cable o inalámbrico con brocas',
        importance: 'Recomendado',
        estimatedPrice: '$800 - $4,000 MXN'
      },
      {
        name: 'Instrumentos de Medición',
        description: 'Flexómetro, nivel, escuadra y calibrador',
        importance: 'Recomendado',
        estimatedPrice: '$600 - $2,500 MXN'
      },
      {
        name: 'Caja de Herramientas',
        description: 'Organización y transporte seguro de herramientas',
        importance: 'Recomendado',
        estimatedPrice: '$500 - $3,000 MXN'
      }
    ],
    stepByStep: [
      {
        step: 1,
        title: 'Análisis de Necesidades',
        description: 'Define qué tipo de trabajos realizarás y con qué frecuencia.',
        tips: [
          'Lista las tareas más comunes',
          'Considera trabajos futuros',
          'Evalúa espacio de almacenamiento',
          'Define presupuesto disponible'
        ],
        warnings: [
          'No compres herramientas que usarás muy poco',
          'Considera renta para trabajos esporádicos'
        ]
      },
      {
        step: 2,
        title: 'Calidad vs. Precio',
        description: 'Evalúa la relación costo-beneficio según uso esperado.',
        tips: [
          'Herramientas de uso diario: invierte en calidad',
          'Uso ocasional: opciones económicas pueden servir',
          'Lee reseñas y garantías',
          'Considera costo de reemplazo'
        ],
        warnings: [
          'Herramientas baratas pueden ser peligrosas',
          'El costo total incluye mantenimiento y reemplazos'
        ]
      },
      {
        step: 3,
        title: 'Organización y Almacenamiento',
        description: 'Implementa sistema de organización para eficiencia y cuidado.',
        tips: [
          'Cada herramienta en su lugar',
          'Protege filos y puntas',
          'Controla humedad para evitar óxido',
          'Etiqueta cajones y compartimentos'
        ],
        warnings: [
          'Herramientas mal almacenadas se dañan rápido',
          'Desorganización reduce productividad'
        ]
      },
      {
        step: 4,
        title: 'Mantenimiento Preventivo',
        description: 'Establece rutinas de limpieza, lubricación y afilado.',
        tips: [
          'Limpia después de cada uso',
          'Lubrica partes móviles regularmente',
          'Afila herramientas de corte',
          'Revisa componentes eléctricos'
        ]
      }
    ],
    budgetGuide: {
      economic: {
        range: '$2,000 - $5,000 MXN para kit básico',
        description: 'Herramientas esenciales para trabajos de mantenimiento general',
        items: [
          'Set destornilladores básicos',
          'Alicates universales',
          'Llaves ajustables',
          'Flexómetro y nivel',
          'Caja de herramientas básica'
        ]
      },
      standard: {
        range: '$5,000 - $12,000 MXN para kit profesional',
        description: 'Herramientas de calidad para uso regular profesional',
        items: [
          'Set completo destornilladores',
          'Juego de alicates especializados',
          'Set de llaves métricas',
          'Taladro inalámbrico',
          'Instrumentos de medición de calidad',
          'Caja de herramientas rodante'
        ]
      },
      premium: {
        range: '$12,000 - $30,000 MXN para kit especializado',
        description: 'Herramientas profesionales de alta gama para uso intensivo',
        items: [
          'Herramientas de marca premium',
          'Equipos eléctricos industriales',
          'Instrumentos de medición de precisión',
          'Sistema de almacenamiento modular',
          'Herramientas especializadas por oficio',
          'Garantías extendidas'
        ]
      }
    },
    commonMistakes: [
      {
        mistake: 'Comprar herramientas muy baratas para uso profesional',
        consequence: 'Fallos frecuentes, pérdida de tiempo y posibles accidentes',
        solution: 'Invierte en calidad para herramientas de uso frecuente'
      },
      {
        mistake: 'No mantener herramientas limpias y organizadas',
        consequence: 'Deterioro prematuro y pérdida de productividad',
        solution: 'Establece rutinas de limpieza y sistema de organización'
      },
      {
        mistake: 'Usar herramientas para propósitos incorrectos',
        consequence: 'Daño a herramientas y riesgo de accidentes',
        solution: 'Usa cada herramienta solo para su propósito diseñado'
      }
    ],
    maintenance: [
      {
        frequency: 'Después de cada uso',
        task: 'Limpieza básica',
        description: 'Remover suciedad, virutas y residuos de las herramientas'
      },
      {
        frequency: 'Semanal',
        task: 'Inspección general',
        description: 'Revisar estado de mangos, filos y componentes móviles'
      },
      {
        frequency: 'Mensual',
        task: 'Lubricación y ajuste',
        description: 'Lubricar partes móviles y ajustar herramientas desalineadas'
      },
      {
        frequency: 'Semestral',
        task: 'Mantenimiento especializado',
        description: 'Afilado profesional y reparación de herramientas dañadas'
      }
    ]
  },

  documentation: {
    title: 'Documentación y Cumplimiento Normativo',
    category: 'Normativas',
    icon: 'fileText',
    description: 'Manejo de documentación obligatoria, cumplimiento de normas y auditorías de seguridad.',
    difficulty: 'Avanzado',
    estimatedTime: '30-40 minutos',
    overview: 'El cumplimiento normativo y la documentación adecuada son fundamentales para operaciones industriales legales y seguras. Esta guía cubre las principales normas mexicanas (NOM), documentación obligatoria, procedimientos de auditoría, manejo de permisos y certificaciones. Aprenderás a mantener tu empresa en cumplimiento y preparada para inspecciones.',
    essentialItems: [
      {
        name: 'Sistema de Gestión Documental',
        description: 'Plataforma digital para organizar y acceder a documentación',
        importance: 'Crítico',
        estimatedPrice: '$2,000 - $8,000 MXN/año'
      },
      {
        name: 'Asesoría Legal Especializada',
        description: 'Consultoría en normativas industriales y laborales',
        importance: 'Crítico',
        estimatedPrice: '$3,000 - $15,000 MXN/mes'
      },
      {
        name: 'Capacitación Normativa',
        description: 'Entrenamiento del personal en cumplimiento de normas',
        importance: 'Recomendado',
        estimatedPrice: '$5,000 - $20,000 MXN/año'
      },
      {
        name: 'Auditorías Internas',
        description: 'Evaluaciones regulares de cumplimiento normativo',
        importance: 'Recomendado',
        estimatedPrice: '$10,000 - $50,000 MXN/año'
      },
      {
        name: 'Software de Cumplimiento',
        description: 'Herramientas para seguimiento automático de vencimientos',
        importance: 'Opcional',
        estimatedPrice: '$1,500 - $6,000 MXN/mes'
      }
    ],
    stepByStep: [
      {
        step: 1,
        title: 'Identificación de Normas Aplicables',
        description: 'Determina qué normas y regulaciones aplican a tu industria y operaciones.',
        tips: [
          'Consulta catálogo de NOMs vigentes',
          'Identifica normas federales, estatales y municipales',
          'Considera normas internacionales si exportas',
          'Mantén lista actualizada de cambios normativos'
        ],
        warnings: [
          'Las normas cambian frecuentemente',
          'El desconocimiento no exime de responsabilidad'
        ]
      },
      {
        step: 2,
        title: 'Implementación de Sistema Documental',
        description: 'Crea estructura organizacional para toda la documentación requerida.',
        tips: [
          'Categoriza por tipo de norma y área',
          'Establece responsables por documento',
          'Implementa control de versiones',
          'Crea copias de respaldo'
        ],
        warnings: [
          'Documentos desactualizados pueden causar multas',
          'La falta de documentación impide operaciones'
        ]
      },
      {
        step: 3,
        title: 'Capacitación y Concientización',
        description: 'Entrena al personal en los procedimientos y su importancia.',
        tips: [
          'Programa capacitaciones regulares',
          'Documenta la capacitación recibida',
          'Evalúa comprensión del personal',
          'Actualiza con cambios normativos'
        ],
        warnings: [
          'Personal no capacitado puede incumplir normas',
          'La responsabilidad es de la empresa, no del trabajador'
        ]
      },
      {
        step: 4,
        title: 'Monitoreo y Auditorías',
        description: 'Establece sistema de seguimiento continuo del cumplimiento.',
        tips: [
          'Programa auditorías internas regulares',
          'Usa checklists de cumplimiento',
          'Documenta no conformidades y correcciones',
          'Prepárate para auditorías externas'
        ]
      }
    ],
    budgetGuide: {
      economic: {
        range: '$30,000 - $80,000 MXN/año para empresa pequeña',
        description: 'Cumplimiento básico con recursos mínimos pero efectivos',
        items: [
          'Asesoría legal básica',
          'Sistema documental simple',
          'Capacitación mínima requerida',
          'Auditoría anual externa'
        ]
      },
      standard: {
        range: '$80,000 - $250,000 MXN/año para empresa mediana',
        description: 'Sistema robusto de cumplimiento con seguimiento regular',
        items: [
          'Asesoría legal especializada',
          'Sistema de gestión digital',
          'Programa de capacitación estructurado',
          'Auditorías internas trimestrales',
          'Software de seguimiento básico'
        ]
      },
      premium: {
        range: '$250,000 - $800,000 MXN/año para empresa grande',
        description: 'Sistema integral con automatización y monitoreo continuo',
        items: [
          'Departamento legal interno',
          'Plataforma de gestión avanzada',
          'Programa de capacitación continua',
          'Auditorías mensuales especializadas',
          'Software de cumplimiento completo',
          'Certificaciones internacionales'
        ]
      }
    },
    commonMistakes: [
      {
        mistake: 'Esperar hasta una inspección para revisar cumplimiento',
        consequence: 'Multas, clausuras temporales y daño reputacional',
        solution: 'Implementa auditorías internas regulares y mantén documentación actualizada'
      },
      {
        mistake: 'No capacitar adecuadamente al personal en procedimientos',
        consequence: 'Incumplimientos por desconocimiento del personal',
        solution: 'Establece programa de capacitación continua con evaluaciones'
      },
      {
        mistake: 'Usar documentación desactualizada',
        consequence: 'Cumplir con normas que ya no están vigentes',
        solution: 'Suscríbete a actualizaciones normativas y revisa documentos regularmente'
      }
    ],
    maintenance: [
      {
        frequency: 'Semanal',
        task: 'Revisión de vencimientos',
        description: 'Verificar próximos vencimientos de permisos, licencias y certificados'
      },
      {
        frequency: 'Mensual',
        task: 'Actualización documental',
        description: 'Incorporar nuevas normas y actualizar procedimientos existentes'
      },
      {
        frequency: 'Trimestral',
        task: 'Auditoría interna',
        description: 'Evaluación completa del cumplimiento en todas las áreas'
      },
      {
        frequency: 'Anual',
        task: 'Revisión estratégica',
        description: 'Evaluación integral del sistema de cumplimiento y mejoras'
      }
    ]
  },

  maintenance: {
    title: 'Equipos de Medición y Mantenimiento',
    category: 'Mantenimiento',
    icon: 'shield',
    description: 'Herramientas especializadas para medición, diagnóstico y mantenimiento preventivo de equipos industriales.',
    difficulty: 'Avanzado',
    estimatedTime: '25-35 minutos',
    overview: 'El mantenimiento predictivo y preventivo requiere equipos de medición especializados para detectar problemas antes de que causen fallas. Esta guía cubre termómetros infrarrojos, medidores de vibración, analizadores de aceite, equipos de alineación y herramientas de diagnóstico. Aprenderás a implementar un programa de mantenimiento basado en condición.',
    essentialItems: [
      {
        name: 'Termómetro Infrarrojo',
        description: 'Medición de temperatura sin contacto para detectar hotspots',
        importance: 'Crítico',
        estimatedPrice: '$1,500 - $8,000 MXN'
      },
      {
        name: 'Medidor de Vibración',
        description: 'Análisis de vibraciones para diagnóstico de rodamientos y desbalances',
        importance: 'Crítico',
        estimatedPrice: '$5,000 - $25,000 MXN'
      },
      {
        name: 'Multímetro Industrial',
        description: 'Mediciones eléctricas avanzadas con funciones de análisis',
        importance: 'Recomendado',
        estimatedPrice: '$2,000 - $12,000 MXN'
      },
      {
        name: 'Kit de Alineación',
        description: 'Herramientas láser para alineación de ejes y poleas',
        importance: 'Recomendado',
        estimatedPrice: '$15,000 - $80,000 MXN'
      },
      {
        name: 'Analizador de Aceite',
        description: 'Kit para análisis de contaminación y degradación de lubricantes',
        importance: 'Opcional',
        estimatedPrice: '$3,000 - $15,000 MXN'
      },
      {
        name: 'Boroscopio',
        description: 'Inspección visual interna de equipos sin desarmar',
        importance: 'Opcional',
        estimatedPrice: '$8,000 - $40,000 MXN'
      }
    ],
    stepByStep: [
      {
        step: 1,
        title: 'Inventario de Equipos Críticos',
        description: 'Identifica y clasifica todos los equipos según su criticidad operacional.',
        tips: [
          'Clasifica por impacto en producción',
          'Considera costo de reemplazo',
          'Evalúa historial de fallas',
          'Documenta especificaciones técnicas'
        ],
        warnings: [
          'No todos los equipos requieren el mismo nivel de monitoreo',
          'Equipos críticos necesitan seguimiento más frecuente'
        ]
      },
      {
        step: 2,
        title: 'Selección de Tecnologías de Monitoreo',
        description: 'Elige las técnicas de mantenimiento predictivo más apropiadas.',
        tips: [
          'Termografía para equipos eléctricos y mecánicos',
          'Análisis de vibraciones para rotatorios',
          'Análisis de aceite para sistemas hidráulicos',
          'Ultrasonido para detección de fugas'
        ],
        warnings: [
          'Cada tecnología tiene limitaciones específicas',
          'La interpretación requiere capacitación especializada'
        ]
      },
      {
        step: 3,
        title: 'Establecimiento de Líneas Base',
        description: 'Toma mediciones de referencia cuando los equipos están en buen estado.',
        tips: [
          'Documenta condiciones operativas durante medición',
          'Toma múltiples mediciones para validar',
          'Establece rangos de alerta y alarma',
          'Actualiza líneas base después de mantenimientos'
        ],
        warnings: [
          'Líneas base incorrectas generan falsas alarmas',
          'Condiciones operativas afectan las mediciones'
        ]
      },
      {
        step: 4,
        title: 'Implementación de Rutinas de Monitoreo',
        description: 'Establece frecuencias y procedimientos de medición regulares.',
        tips: [
          'Equipos críticos: monitoreo semanal',
          'Equipos importantes: monitoreo mensual',
          'Equipos auxiliares: monitoreo trimestral',
          'Usa software para gestionar datos'
        ],
        warnings: [
          'Monitoreo inconsistente reduce efectividad',
          'Datos sin análisis no generan valor'
        ]
      },
      {
        step: 5,
        title: 'Análisis de Tendencias y Acciones',
        description: 'Interpreta datos para programar mantenimientos preventivos.',
        tips: [
          'Busca tendencias graduales de deterioro',
          'Correlaciona diferentes parámetros',
          'Programa mantenimiento antes de límites críticos',
          'Documenta hallazgos y acciones tomadas'
        ]
      }
    ],
    budgetGuide: {
      economic: {
        range: '$15,000 - $40,000 MXN para programa básico',
        description: 'Herramientas esenciales para mantenimiento predictivo básico',
        items: [
          'Termómetro infrarrojo básico',
          'Multímetro con funciones de análisis',
          'Kit básico de análisis de aceite',
          'Software de gestión simple'
        ]
      },
      standard: {
        range: '$40,000 - $120,000 MXN para programa intermedio',
        description: 'Equipamiento profesional para programa de mantenimiento robusto',
        items: [
          'Termómetro infrarrojo avanzado',
          'Medidor de vibraciones portátil',
          'Multímetro industrial',
          'Kit de alineación láser básico',
          'Software de gestión de mantenimiento',
          'Capacitación especializada'
        ]
      },
      premium: {
        range: '$120,000 - $400,000 MXN para programa avanzado',
        description: 'Sistema integral de mantenimiento predictivo con monitoreo continuo',
        items: [
          'Sistema de monitoreo continuo online',
          'Analizador de vibraciones avanzado',
          'Cámara termográfica profesional',
          'Sistema de alineación láser completo',
          'Boroscopio de alta resolución',
          'Software CMMS integrado',
          'Consultoría especializada'
        ]
      }
    },
    commonMistakes: [
      {
        mistake: 'Comprar equipos sin capacitación en su uso',
        consequence: 'Mediciones incorrectas y diagnósticos erróneos',
        solution: 'Invierte en capacitación especializada junto con los equipos'
      },
      {
        mistake: 'No establecer líneas base apropiadas',
        consequence: 'Falsas alarmas y diagnósticos incorrectos',
        solution: 'Toma mediciones de referencia con equipos en buen estado operativo'
      },
      {
        mistake: 'Ignorar las tendencias graduales',
        consequence: 'Fallas inesperadas que pudieron prevenirse',
        solution: 'Analiza tendencias regularmente y actúa ante cambios graduales'
      },
      {
        mistake: 'No correlacionar diferentes parámetros',
        consequence: 'Diagnósticos incompletos o incorrectos',
        solution: 'Usa múltiples técnicas y correlaciona resultados para diagnóstico completo'
      }
    ],
    maintenance: [
      {
        frequency: 'Diario',
        task: 'Verificación de equipos críticos',
        description: 'Monitoreo visual y auditivo de equipos más importantes'
      },
      {
        frequency: 'Semanal',
        task: 'Mediciones predictivas rutinarias',
        description: 'Termografía y vibraciones en equipos según programa establecido'
      },
      {
        frequency: 'Mensual',
        task: 'Análisis de tendencias',
        description: 'Revisión de datos acumulados y identificación de cambios'
      },
      {
        frequency: 'Trimestral',
        task: 'Calibración de instrumentos',
        description: 'Verificación y calibración de equipos de medición'
      },
      {
        frequency: 'Anual',
        task: 'Evaluación del programa',
        description: 'Revisión de efectividad y ajustes al programa de mantenimiento'
      }
    ]
  }
};

// Función helper para obtener guía por categoría
export const getGuideByCategory = (category: string): GuideContent | null => {
  const guides = Object.values(guideData);
  return guides.find(guide => 
    guide.category.toLowerCase().includes(category.toLowerCase()) ||
    guide.title.toLowerCase().includes(category.toLowerCase())
  ) || null;
};

// Función para obtener todas las categorías disponibles
export const getAllGuideCategories = (): string[] => {
  return Object.values(guideData).map(guide => guide.category);
};
