import {
  ComponentProps,
  ColorProps,
  NavigationProps,
  PositionProps,
} from '@/typing/props';
import { useScreenDimensions } from '@/utils/hooks';
import { Fragment } from 'react';

import { VerticalNavLink } from './VerticalNavLink';
import { VerticalNavLine } from './VerticalNavLine';

import { VerticalNavLanguageLink } from './VerticalNavLanguageLink';

interface VerticalNavProps
  extends ComponentProps,
    ColorProps,
    NavigationProps,
    PositionProps {
  expandAll?: boolean;
  gap?: boolean;
  showOnSmall?: boolean;
  languageSelector?: boolean;
}

export function VerticalNav(props: VerticalNavProps) {
  const [width] = useScreenDimensions(5);
  const isSmall = width < 768;

  return (
    (props.showOnSmall ?? !isSmall) && (
      <nav
        className={`flex flex-col justify-around items-center z-10
      ${props.className ?? ''}`}
      >
        <VerticalNavLine
          color={props.color}
          position={props.position}
          gap={props.gap}
        />
        {props.items.map((item, _) => (
          <Fragment key={`vertical-nav-item-${item.id}`}>
            <VerticalNavLink item={item} {...props} />
            <VerticalNavLine color={props.color} position={props.position} />
          </Fragment>
        ))}
        {props.languageSelector && (
          <>
            <VerticalNavLanguageLink {...props} />
            <VerticalNavLine color={props.color} position={props.position} />
          </>
        )}
      </nav>
    )
  );
}
