import { VerticalNavProps } from '@/typing/props';
import { useScreenDimensions } from '@/utils/hooks';
import { Fragment } from 'react';

import { Link } from './Link';
import { VerticalLines } from './VerticalLines';

import { NavLinkLanguage } from './LanguageLink';

export function VerticalNav(props: VerticalNavProps) {
  const [width] = useScreenDimensions(5);
  const isSmall = width < 768;

  return (
    (props.showOnSmall ?? !isSmall) && (
      <nav
        className={`flex flex-col justify-around items-center z-10
      ${props.className ?? ''}`}
      >
        <VerticalLines
          color={props.color}
          position={props.position}
          gap={props.gap}
        />
        {props.items.map((item, _) => (
          <Fragment key={`vertical-nav-item-${item.id}`}>
            <Link item={item} {...props} />
            <VerticalLines color={props.color} position={props.position} />
          </Fragment>
        ))}
        {props.languageSelector && (
          <>
            <NavLinkLanguage {...props} />
            <VerticalLines color={props.color} position={props.position} />
          </>
        )}
      </nav>
    )
  );
}
