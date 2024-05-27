import { ColorProps, NavigationProps, PositionProps } from '@/typing/props';
import { VerticalNavTooltip } from './VerticalNavTooltip';
import { NavigationItem } from '@/typing/types';

export interface Props extends ColorProps, NavigationProps, PositionProps {
  item: NavigationItem;
}

export function VerticalNavLink(props: Props) {
  const { backgroundColor, color, expandAll, item, position, textColor } =
    props;

  type NavLinkComponentType = 'tooltip' | 'dot';
  const orderedComponents: NavLinkComponentType[] =
    props.position === 'left' ? ['dot', 'tooltip'] : ['tooltip', 'dot'];

  return (
    <a
      href={`#${item.id}`}
      aria-label={item.text}
      className={`group relative flex flex-row items-center hover:cursor-pointer
          ${props.position === 'left' ? 'justify-start' : 'justify-end'}`}
      onClick={event => {
        event.preventDefault();
        props.item.ref.current?.scrollIntoView({ behavior: 'smooth' });
      }}
    >
      {orderedComponents.map((type, index) =>
        type === 'tooltip' ? (
          <VerticalNavTooltip
            key={`tooltip-${index}`}
            position={position}
            color={color}
            textColor={textColor}
            backgroundColor={backgroundColor}
            className={expandAll ? 'flex' : 'hidden group-hover:flex'}
          >
            {item.text}
          </VerticalNavTooltip>
        ) : (
          <div
            key={`dot-${index}`}
            className={`h-2 w-2 border border-solid hover:cursor-pointer 
          ${
            position === 'left' ? 'mr-12 ml-2' : 'mr-2 ml-12'
          } border-${color}/60
          bg-transparent group-hover:bg-${color}`}
          ></div>
        )
      )}
    </a>
  );
}
