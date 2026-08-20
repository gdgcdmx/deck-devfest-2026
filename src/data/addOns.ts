import type { AddOnExperience } from '../types';

export const SPONSOR_ADD_ONS: AddOnExperience[] = [
  {
    id: 'diversity-scholarship',
    name: 'Diversity Scholarship',
    subtitle: 'Impulsa la inclusión en tecnología patrocinando becarios',
    priceUSD: 2000,
    priceMXN: 40000,
    iconName: 'HeartHandshake',
    color: 'border-top-red',
    category: 'community',
    badge: 'Impacto Social',
    description: 'Cada $2,000 USD cubre entradas a la conferencia, hospedaje y transporte para 4 a 5 participantes de grupos subrepresentados. El 100% de la contribución va directo a los becarios y GDG administra la logística.',
    deliverables: [
      'Naming exclusivo de las Becas de Inclusión',
      'Cobertura total de tickets y viáticos para 4-5 participantes',
      'Reconocimiento especial en ceremonia y post dedicado en redes',
      '100% administrado por la organización del evento'
    ]
  },
  {
    id: 'tote-bags',
    name: 'Official Tote Bags',
    subtitle: 'Co-branding en las bolsas oficiales para cada asistente',
    priceUSD: 2500,
    priceMXN: 50000,
    iconName: 'ShoppingBag',
    color: 'border-top-blue',
    category: 'branding',
    badge: '100% Cobertura',
    slotsLimit: 'Exclusivo (1 sponsor)',
    description: 'Tu logotipo impreso junto al diseño oficial del evento en la tote bag ecológica entregada a cada participante. Un recuerdo de alta durabilidad que los asistentes conservan por años.',
    deliverables: [
      'Logo de gran formato impreso en el frente de la Tote Bag oficial',
      'Distribución garantizada al 100% de los asistentes registrados',
      'Inclusión de material o gadget promocional de tu empresa dentro de la bolsa',
      'Producción y distribución cubiertas por la organización'
    ]
  },
  {
    id: 'local-flavor-cdmx',
    name: 'Local Flavor Sponsor • Antojitos & Dulces CDMX',
    subtitle: 'Lleva el sabor y calidez tradicionales de la capital al evento',
    priceUSD: 2500,
    priceMXN: 50000,
    iconName: 'UtensilsCrossed',
    color: 'border-top-yellow',
    category: 'experience',
    badge: 'Sabor Local CDMX',
    slotsLimit: 'Limitado a 2 patrocinadores',
    description: 'Estación gastronómica temática con delicias de la CDMX (café de especialidad, nieves artesanales, marquesitas o churros) con la identidad de tu marca en los carritos y mantelería durante todo el día.',
    deliverables: [
      'Estación brandeada con tu logo en carritos, servilletas y manteles',
      'Servicio, montaje y proveedores cubiertos por el evento',
      'Derechos completos de naming rights ("El momento dulce por [Tu Marca]")',
      'Alto impacto fotográfico y viralización en redes'
    ]
  },
  {
    id: 'coffee-bar',
    name: 'Coffee Bar',
    subtitle: 'Conviértete en la cara de la experiencia de café en el evento',
    priceUSD: 2000,
    priceMXN: 40000,
    iconName: 'Coffee',
    color: 'border-top-yellow',
    category: 'experience',
    badge: 'Networking Continuo',
    description: 'Barra continua de café gourmet mexicano para recarga de los asistentes. Este add-on otorga derechos de naming y branding exclusivo en la zona de café.',
    deliverables: [
      'Branding exclusivo en la estación y barra de café gourmet',
      'Stickers/fajas de vasos ecológicos con el logo de tu empresa',
      'Derechos de presencia en el punto de encuentro de networking de mayor flujo',
      'Opción de conectar con proveedores locales o enviar insumos propios'
    ]
  },
  {
    id: 'hydration-zone',
    name: 'Hydration Zone',
    subtitle: 'Mantén a los asistentes hidratados con una estación brandeada',
    priceUSD: 2000,
    priceMXN: 40000,
    iconName: 'Droplets',
    color: 'border-top-blue',
    category: 'experience',
    badge: 'Estación de Recarga',
    description: 'Estación de agua purificada e infusiones frías con señalización y Branding de tu empresa para mantener frescos a los participantes durante toda la conferencia.',
    deliverables: [
      'Branding completo y totems decorativos en la zona de hidratación',
      'Derechos de naming ("Estación de Hidratación [Tu Marca]")',
      'Visibilidad constante en el pasillo principal de descanso',
      'Opción de conectar con proveedores locales recomendados'
    ]
  },
  {
    id: 'lanyards',
    name: 'Official Lanyards',
    subtitle: 'Tu marca en el cordón oficial del gafete de cada asistente',
    priceUSD: 2000,
    priceMXN: 40000,
    iconName: 'Tag',
    color: 'border-top-green',
    category: 'branding',
    badge: 'Presencia Permanente',
    slotsLimit: 'Exclusivo (1 sponsor)',
    description: 'Impresión continua de tu logotipo a lo largo del cordón (lanyard) oficial que portan todos los asistentes, ponentes y organizadores en el cuello durante toda la jornada.',
    deliverables: [
      'Logo impreso a todo lo largo del lanyard junto al logo de DevFest CDMX',
      'Visibilidad en el 100% de las fotografías oficiales y fotos de asistentes',
      'Presencia visual ininterrumpida en conferencias, pasillos y networking',
      'Opción de proveer lanyards propios o producirlos con nuestro proveedor'
    ]
  }
];
