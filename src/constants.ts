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
    title: 'Business Intelligence (BI)',
    description: 'Dashboards corporativos, automatización de reportes, análisis de KPIs y modelos de datos avanzados.',
    icon: BarChart3,
  },
  {
    title: 'Integraciones Empresariales',
    description: 'Conectamos plataformas como Paymentez, HikCentral, Dynamics, Odoo, Macsys, CRM y otros servicios.',
    icon: Network,
  },
  {
    title: 'Automatización de Procesos',
    description: 'Bots programados, sincronización de datos, procesos de scraping y pipelines ETL.',
    icon: Database,
  },
  {
    title: 'Desarrollo Web & API',
    description: 'Portales administrativos, APIs seguras, paneles operativos y aplicaciones personalizadas.',
    icon: Code2,
  },
];

export const SOLUTIONS: SolutionItem[] = [
  {
    title: 'Bases de Datos',
    category: 'Data',
    description: 'Optimización de bases de datos SQL Server y PostgreSQL',
    image: 'https://picsum.photos/id/192/600/400',
  },
  {
    title: 'Motores ETL',
    category: 'ETL',
    description: 'Implementación de motores ETL con Python, Databricks y Power BI',
    image: 'https://picsum.photos/id/20/600/400',
  },
  {
    title: 'Sistemas de Videovigilancia',
    category: 'Integración',
    description: 'Integración con sistemas de videovigilancia HikCentral',
    image: 'https://picsum.photos/id/180/600/400',
  },
    {
    title: 'Automatización de Reportes',
    category: 'BI',
    description: 'Automatización de reportes para áreas administrativas y gerenciales',
    image: 'https://picsum.photos/id/181/600/400',
  },
];
