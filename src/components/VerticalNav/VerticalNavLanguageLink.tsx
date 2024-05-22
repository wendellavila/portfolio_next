import { ColorProps, NavigationProps, PositionProps } from '@/typing/props';
import { VerticalNavLanguageTooltip } from './VerticalNavLanguageTooltip';
import { useState } from 'react';

interface Props extends ColorProps, NavigationProps, PositionProps {}

export function VerticalNavLanguageLink(props: Props) {
  const { color, expandAll, position, textColor } = props;

  type NavLinkComponentType = 'languageSelector' | 'dot';
  const orderedComponents: NavLinkComponentType[] =
    position === 'left'
      ? ['dot', 'languageSelector']
      : ['languageSelector', 'dot'];

  const [isOpen, setOpen] = useState(false);

  return (
    <a
      className={`group relative flex flex-row items-center hover:cursor-pointer
      ${position === 'left' ? 'justify-start' : 'justify-end'}`}
      onClick={() => setOpen(isOpen => !isOpen)}
    >
      {orderedComponents.map((type, index) =>
        type === 'languageSelector' ? (
          <VerticalNavLanguageTooltip
            key={`tooltip-${index}`}
            position={position}
            color={color}
            textColor={textColor}
            isOpen={isOpen}
            className={expandAll ? 'flex' : 'hidden group-hover:flex'}
          />
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
