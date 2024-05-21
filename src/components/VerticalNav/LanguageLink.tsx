import { VerticalNavLanguageSelectorProps } from '@/typing/props';
import { LanguageSelectorTooltip } from './LanguageSelectorTooltip';
import { useState } from 'react';

export function NavLinkLanguage(props: VerticalNavLanguageSelectorProps) {
  type NavLinkComponentType = 'languageSelector' | 'dot';
  const orderedComponents: NavLinkComponentType[] =
    props.position === 'left'
      ? ['dot', 'languageSelector']
      : ['languageSelector', 'dot'];

  const [isOpen, setOpen] = useState(false);

  return (
    <a
      className={`group relative flex flex-row items-center hover:cursor-pointer
      ${props.position === 'left' ? 'justify-start' : 'justify-end'}`}
      onClick={() => setOpen(isOpen => !isOpen)}
    >
      {orderedComponents.map((key, index) =>
        key === 'languageSelector' ? (
          <LanguageSelectorTooltip
            key={`tooltip-${index}`}
            position={props.position}
            color={props.color}
            textColor={props.textColor}
            isOpen={isOpen}
            className={props.expandAll ? 'flex' : 'hidden group-hover:flex'}
          />
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
