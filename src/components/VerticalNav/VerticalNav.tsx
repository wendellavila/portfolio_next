import {
  ComponentProps,
  ColorProps,
  NavigationProps,
  PositionProps,
} from '@/typing/props';
import { Fragment } from 'react';

import { VerticalNavLink } from './VerticalNavLink';
import { VerticalNavLine } from './VerticalNavLine';

import { VerticalNavLanguageLink } from './VerticalNavLanguageLink';

interface Props
  extends ComponentProps,
    ColorProps,
    NavigationProps,
    PositionProps {
  expandAll?: boolean;
  gap?: boolean;
  showOnSmall?: boolean;
  languageSelector?: boolean;
}

export function VerticalNav(props: Props) {
  const {
    className,
    color,
    gap,
    items,
    languageSelector,
    position,
    showOnSmall,
  } = props;

  return (
    <nav
      className={`${showOnSmall ? 'flex' : 'hidden sm:flex'}
      flex-col justify-around items-center z-10
      ${className ?? ''}`}
    >
      <VerticalNavLine color={color} position={position} gap={gap} />
      {items.map((item, _) => (
        <Fragment key={`vertical-nav-item-${item.id}`}>
          <VerticalNavLink item={item} {...props} />
          <VerticalNavLine color={color} position={position} />
        </Fragment>
      ))}
      {languageSelector && (
        <>
          <VerticalNavLanguageLink {...props} />
          <VerticalNavLine color={color} position={position} />
        </>
      )}
    </nav>
  );
}
