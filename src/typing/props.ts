import { NavigationItem } from './types';

export type SectionProps = RefProps & NavigationProps & ComponentProps;
export interface PositionProps {
  position: 'left' | 'right';
}
export interface ColorProps {
  color?: 'latte' | 'silver' | 'sky-100' | 'white';
  textColor?: 'coffee' | 'slate-100' | 'slate-500' | 'white';
  backgroundColor?: 'cream' | 'white' | 'blueprint' | 'slate-800';
}

export interface NavigationProps {
  expandAll?: boolean;
  items: NavigationItem[];
}
export interface RefProps {
  componentRef: React.RefObject<HTMLElement>;
}
export interface ComponentProps {
  id?: string;
  children?: React.ReactNode;
  className?: string;
}
