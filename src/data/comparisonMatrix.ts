import type { ComparisonCategory } from '../types';

export const COMPARISON_MATRIX: ComparisonCategory[] = [
  {
    title: 'Presencia en Escenarios & Contenido',
    items: [
      {
        feature: 'Participación en Escenario',
        tooltip: 'Tipo de charla o keynote incluido en la agenda oficial',
        bronze: false,
        silver: 'Track Técnico (20-25 min)',
        gold: 'Main-Stage Talk (25 min)',
        platinum: 'Keynote Principal Main-Stage'
      },
      {
        feature: 'Horario y Solapamiento',
        tooltip: 'Franja horaria asignada en el programa del evento',
        bronze: false,
        silver: 'Track Paralelo',
        gold: 'Horario Estelar (Sin solapamiento)',
        platinum: 'Apertura / Cierre Magistral'
      },
      {
        feature: 'Mención en Ceremonia Oficial',
        tooltip: 'Agradecimiento en inauguración y clausura',
        bronze: 'Crédito general',
        silver: 'Mención con logo',
        gold: 'Mención especial de honor',
        platinum: 'Agradecimiento Co-Host'
      }
    ]
  },
  {
    title: 'Espacio Expo & Activaciones',
    items: [
      {
        feature: 'Stand / Booth en Zona Expo',
        tooltip: 'Dimensiones y mobiliario para tu equipo',
        bronze: false,
        silver: 'Booth Estándar (3x3 m)',
        gold: 'Booth Premium (6x3 m)',
        platinum: 'Doble Lounge (12x3 m)'
      },
      {
        feature: 'Ubicación en Sede',
        tooltip: 'Nivel de tráfico de asistentes frente al stand',
        bronze: 'Welcome Table (Swag)',
        silver: 'Pabellón Expo',
        gold: 'Pasillo Central Alto Flujo',
        platinum: 'Zona VIP / Central Lounge'
      },
      {
        feature: 'Espacio para Activación Interactiva',
        tooltip: 'Dinámicas, hackathons relámpago o retos técnicos',
        bronze: false,
        silver: false,
        gold: 'Activación en Stand',
        platinum: 'Activación + Zona Lounge'
      }
    ]
  },
  {
    title: 'Reclutamiento & Data de Asistentes',
    items: [
      {
        feature: 'Opt-in Attendee / Talent Data',
        tooltip: 'Base de datos con CVs y contactos con consentimiento para reclutamiento',
        bronze: false,
        silver: false,
        gold: 'Acceso Completo (CVs + Contacto)',
        platinum: 'Acceso Prioritario Segmentado'
      },
      {
        feature: 'Publicación de Vacantes en Bolsa de Trabajo',
        tooltip: 'Difusión de posiciones abiertas en plataformas y Discord del evento',
        bronze: false,
        silver: '2 Vacantes',
        gold: 'Ilimitadas',
        platinum: 'Ilimitadas con difusión destacada'
      },
      {
        feature: 'Espacio para Entrevistas 1:1',
        tooltip: 'Área reservada para entrevistar candidatos durante el evento',
        bronze: false,
        silver: 'En el booth',
        gold: 'Booth 6x3m + Sala de juntas',
        platinum: 'Lounge privado reservado'
      }
    ]
  },
  {
    title: 'Branding & Cobertura Digital',
    items: [
      {
        feature: 'Presencia en Web & Materiales Oficiales',
        tooltip: 'Tamaño y jerarquía del logo en plataformas',
        bronze: 'Logo Pequeño',
        silver: 'Logo Mediano',
        gold: 'Logo Grande Destacado',
        platinum: 'Logo Gigante Co-Host'
      },
      {
        feature: 'Campaña en Redes Sociales',
        tooltip: 'Posts dedicados en LinkedIn, X, Instagram y YouTube',
        bronze: '1 Post de Agradecimiento',
        silver: '3 Posts dedicados',
        gold: '5 Posts + Cobertura en Vivo',
        platinum: 'Campaña Completa + Video Reel'
      },
      {
        feature: 'Email Blasts a la Comunidad',
        tooltip: 'Envío de correos dedicados a los +4,000 miembros',
        bronze: false,
        silver: 'Mención en newsletter',
        gold: '1 Email Blast Dedicado',
        platinum: '2 Email Blasts Exclusivos'
      },
      {
        feature: 'Logo en Gafetes / Lanyards y Playeras',
        tooltip: 'Presencia de marca física en indumentaria oficial',
        bronze: false,
        silver: false,
        gold: 'Logo en playeras del staff',
        platinum: 'Logo en Lanyards y Playeras'
      }
    ]
  },
  {
    title: 'Accesos VIP & Experiencias de Networking',
    items: [
      {
        feature: 'Pases VIP Full-Access',
        tooltip: 'Entradas completas para colaboradores o clientes especiales',
        bronze: '2 – 3 Pases',
        silver: '6 – 8 Pases',
        gold: '15 Pases VIP',
        platinum: '20 Pases VIP'
      },
      {
        feature: 'Acceso a Speakers & Sponsors Dinner',
        tooltip: 'Cena de gala privada con los ponentes internacionales y organizadores',
        bronze: false,
        silver: false,
        gold: '2 Accesos a la Cena',
        platinum: '4 Accesos a la Cena'
      },
      {
        feature: 'Co-Host / Naming Rights del After-Party',
        tooltip: 'Presencia estelar en el evento social nocturno de cierre',
        bronze: false,
        silver: false,
        gold: false,
        platinum: 'Naming Rights Co-Host'
      }
    ]
  }
];
