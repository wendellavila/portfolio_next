interface Props {
  children: string;
  component?: 'h2' | 'span';
  className?: string;
  decorationClassName?: string;
}

export function SectionHeader(props: Props) {
  const { children, className, decorationClassName } = props;

  let component = props.component ?? 'h2';
  const TextComponent = component;

  return (
    <div
      className={`flex flex-row items-end
      ${component === 'h2' ? 'text-xl mt-8 mb-12' : 'text-2xl mt-8 mb-4'}
      ${className ?? ''}`}
    >
      <TextComponent>
        {children.toLocaleUpperCase()}
        <span
          aria-hidden
          className={`block h-1 w-auto
          ${decorationClassName ?? 'bg-blueprint'}`}
        ></span>
      </TextComponent>
      <span
        aria-hidden
        className={`h-1 ${component === 'h2' ? 'w-3' : 'w-2'}
        ${decorationClassName ?? 'bg-blueprint'}`}
      ></span>
    </div>
  );
}
