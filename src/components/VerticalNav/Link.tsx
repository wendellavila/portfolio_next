import { VerticalNavItemProps } from '@/typing/props';
import { Tooltip } from './Tooltip';

export function Link(props: VerticalNavItemProps) {
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
          <Tooltip
            key={`tooltip-${index}`}
            position={props.position}
            color={props.color}
            textColor={props.textColor}
            className={props.expandAll ? 'flex' : 'hidden group-hover:flex'}
          >
            {props.item.text}
          </Tooltip>
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
