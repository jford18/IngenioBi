import { BarChart3, Network, Database, LayoutDashboard, Lightbulb, Code2 } from 'lucide-react';
import { NavItem, ServiceItem, SolutionItem } from './types';

// The base64 string provided in the prompt.
// Note: The string provided appears truncated ("...").
// We use it exactly as requested.
export const LOGO_BASE64 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAWwAAAFaCAIAAAC13vBeAAAQAElEQVR4AexdB5w...L9L2f8XgrnNbpJLcskl2bz8hmV2dubNm+/NfPvmTe6O4+lDCBAChEAREOAY+hAC";

export const NAV_ITEMS: NavItem[] = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Soluciones', href: '#soluciones' },
  { label: 'Clientes', href: '#clientes' },
  { label: 'Contacto', href: '#contacto' },
];

export const SERVICES: ServiceItem[] = [
  {
    title: 'Business Intelligence',
    description: 'Transformamos datos brutos en decisiones estratégicas mediante arquitecturas BI robustas.',
    icon: BarChart3,
  },
  {
    title: 'Integración de Sistemas',
    description: 'Conectamos sus aplicaciones y bases de datos para un flujo de información unificado y eficiente.',
    icon: Network,
  },
  {
    title: 'ETL Automatizado',
    description: 'Procesos de extracción, transformación y carga optimizados para garantizar la calidad del dato.',
    icon: Database,
  },
  {
    title: 'Dashboards & Reportería',
    description: 'Visualizaciones interactivas y reportes automatizados diseñados para la alta dirección.',
    icon: LayoutDashboard,
  },
  {
    title: 'Consultoría Tecnológica',
    description: 'Asesoramiento experto para modernizar su infraestructura y stack tecnológico.',
    icon: Lightbulb,
  },
  {
    title: 'Desarrollo a Medida',
    description: 'Soluciones de software personalizadas que se adaptan al 100% a sus reglas de negocio.',
    icon: Code2,
  },
];

export const SOLUTIONS: SolutionItem[] = [
  {
    title: 'Optimización Logística',
    category: 'Logística',
    description: 'Dashboard en tiempo real para seguimiento de flotas y reducción de tiempos de entrega en un 30%.',
    image: 'https://picsum.photos/id/192/600/400',
  },
  {
    title: 'Fintech Analytics Core',
    category: 'Finanzas',
    description: 'Plataforma centralizada de datos financieros para detección de fraude y análisis de riesgo.',
    image: 'https://picsum.photos/id/20/600/400',
  },
  {
    title: 'Retail Inventory AI',
    category: 'Retail',
    description: 'Sistema predictivo de stock basado en tendencias históricas y estacionalidad.',
    image: 'https://picsum.photos/id/180/600/400',
  },
];
