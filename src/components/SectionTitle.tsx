interface Props {
  children: string;
  className?: string;
  decorationClassName?: string;
}

export function SectionTitle(props: Props) {
  const { children, className, decorationClassName } = props;
  return (
    <div
      className={`text-2xl mt-8 mb-12 flex flex-row items-end ${
        className ?? ''
      }`}
    >
      <h2>
        {children.toLocaleUpperCase()}
        <span
          aria-hidden
          className={`block h-1 w-auto ${decorationClassName ?? ''}`}
        ></span>
      </h2>
      <span
        aria-hidden
        className={`h-1 w-3 ${decorationClassName ?? ''}`}
      ></span>
    </div>
  );
}
