import { ColorProps, NavigationProps, PositionProps } from '@/typing/props';
import { VerticalNavTooltip } from './VerticalNavTooltip';
import { NavigationItem } from '@/typing/types';

export interface Props extends ColorProps, NavigationProps, PositionProps {
  item: NavigationItem;
}

export function VerticalNavLink(props: Props) {
  type NavLinkComponentType = 'tooltip' | 'dot';
  const orderedComponents: NavLinkComponentType[] =
    props.position === 'left' ? ['dot', 'tooltip'] : ['tooltip', 'dot'];

  return (
    <a
      href={props.item.id}
      aria-label={props.item.text}
      className={`group relative flex flex-row items-center hover:cursor-pointer
          ${props.position === 'left' ? 'justify-start' : 'justify-end'}`}
      onClick={event => {
        event.preventDefault();
        props.item.ref.current?.scrollIntoView({ behavior: 'smooth' });
      }}
    >
      {orderedComponents.map((key, index) =>
        key === 'tooltip' ? (
          <VerticalNavTooltip
            key={`tooltip-${index}`}
            position={props.position}
            color={props.color}
            textColor={props.textColor}
            className={props.expandAll ? 'flex' : 'hidden group-hover:flex'}
          >
            {props.item.text}
          </VerticalNavTooltip>
        ) : (
          <div
            key={`dot-${index}`}
            className={`h-2 w-2 border border-solid hover:cursor-pointer 
          ${props.position === 'left' ? 'mr-12 ml-2' : 'mr-2 ml-12'} border-${
              props.color
            }/60
          bg-transparent group-hover:bg-${props.color}`}
          ></div>
        )
      )}
    </a>
  );
}
