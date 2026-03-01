import { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  id: string;
  title: string;
  overview: string;
  deliverables: string[];
  benefits: string[];
  icon: LucideIcon;
  visualType: 'list' | 'chart' | 'flow' | 'calendar' | 'siem-flow';
}

export interface NavLink {
  label: string;
  href: string;
}