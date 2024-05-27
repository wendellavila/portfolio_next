interface Props {
  children: string;
  component?: 'h2' | 'h3';
  className?: string;
  decorationClassName?: string;
}

export function SectionTitle(props: Props) {
  const { children, className, component, decorationClassName } = props;

  const TextComponent = component ?? 'h2';

  return (
    <div
      className={`mt-8 mb-12 flex flex-row items-end ${
        component === 'h3' ? 'text-xl' : 'text-2xl'
      } ${className ?? ''}`}
    >
      <TextComponent>
        {children.toLocaleUpperCase()}
        <span
          aria-hidden
          className={`block h-1 w-auto ${
            decorationClassName ?? 'bg-blueprint'
          }`}
        ></span>
      </TextComponent>
      <span
        aria-hidden
        className={`h-1 ${component === 'h3' ? 'w-2' : 'w-3'} ${
          decorationClassName ?? 'bg-blueprint'
        }`}
      ></span>
    </div>
  );
}
