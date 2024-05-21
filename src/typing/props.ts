import { AbstractIntlMessages } from 'next-intl';
import { NavigationItem, Position, TextComponent } from './types';

export interface StarProps extends Props {
  size?: number;
  top?: number;
  left?: number;
  animate?: boolean | 'random';
  animationDuration?: 'slow' | 'medium' | 'fast' | 'random';
}
export interface ClientProviderLoaderProps {
  children: React.ReactNode;
  lang: string;
  messages: AbstractIntlMessages | undefined;
}
export interface RouterButtonProps extends Props {
  route: string;
  icon?: React.ReactNode;
  i18nMessage?: string;
}
export interface ContentProps extends Props {
  pageName: string;
}
export interface ButtonProps extends Props {
  onClick?: () => void;
}
export interface LoadingScreenProps extends Props {
  imageSrc?: string;
}

export interface TypingTextProps extends Props {
  component?: TextComponent;
  ariaLabel?: string;
  children: string;
}
export interface NavLinkProps extends Props {
  href: string;
  ariaLabel: string;
  onClick: () => void;
  onMouseLeave: () => void;
  onMouseEnter: () => void;
}
export type SectionProps = RefProps & NavigationProps & Props;
export interface PositionProps {
  position: Position;
}
export interface ColorProps {
  color: 'latte' | 'silver' | 'sky-100' | 'white';
  textColor?: 'coffee' | 'slate-100' | 'slate-500' | 'white';
}
export interface TooltipProps extends Props, PositionProps, ColorProps {}
export interface LanguageSelectorTooltipProps extends TooltipProps {
  isOpen: boolean;
}
export interface VerticalLineProps extends PositionProps, ColorProps {
  gap?: boolean;
}
export interface VerticalNavProps
  extends Props,
    ColorProps,
    NavigationProps,
    PositionProps {
  expandAll?: boolean;
  gap?: boolean;
  showOnSmall?: boolean;
  languageSelector?: boolean;
}
export interface VerticalNavItemProps
  extends ColorProps,
    NavigationProps,
    PositionProps {
  item: NavigationItem;
}
export interface VerticalNavLanguageSelectorProps
  extends ColorProps,
    NavigationProps,
    PositionProps {}
export interface NavigationProps {
  expandAll?: boolean;
  items: NavigationItem[];
}
export interface RefProps {
  componentRef: React.RefObject<HTMLElement>;
}
export interface Props {
  id?: string;
  children?: React.ReactNode;
  className?: string;
}
