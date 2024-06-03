import { ComponentProps } from '@/typing/props';

interface Props extends ComponentProps {
  animate?: boolean;
}

export function ImageDecoration(props: Props) {
  const { animate, children, className } = props;
  return (
    <div
      className={`flex rotate-3 bg-cream
      ${animate === false ? '' : 'transition duration-75 group-hover:scale-[1.02]'}
      ${className ?? ''}`}
    >
      <div
        aria-hidden
        className="absolute  w-full h-full -rotate-3 bg-blueprint"
      ></div>
      {children}
    </div>
  );
}
