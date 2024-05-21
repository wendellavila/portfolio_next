export interface Map<T> {
  [id: string]: T;
}
export type I18n = <TargetKey>(key: TargetKey) => any;
export interface NavigationItem {
  id: string;
  text: string;
  ref: React.RefObject<HTMLElement>
}
export type TextComponent = 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
export type Position = 'left' | 'right';