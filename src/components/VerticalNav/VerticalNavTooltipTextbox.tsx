import { ComponentProps, ColorProps } from '@/typing/props';

interface Props extends ComponentProps, ColorProps {}

export function VerticalNavTooltipTextbox(props: Props) {
  const color = props.color;
  return (
    <span
      className={`border px-2 py-1 whitespace-nowrap backdrop-blur-sm pointer-events-none
      border-${color}/50`}
    >
      {props.children}
    </span>
  );
}
