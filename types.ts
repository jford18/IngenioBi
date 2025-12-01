import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface SolutionItem {
  title: string;
  category: string;
  description: string;
  image: string;
}

export interface ClientItem {
  name: string;
  logoUrl?: string; // Optional if we use placeholders
}