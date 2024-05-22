import { ComponentProps, ColorProps } from '@/typing/props';

interface Props extends ComponentProps, ColorProps {}

export function VerticalNavTooltipTextbox(props: Props) {
  const { backgroundColor, color } = props;

  return (
    <span
      className={`border px-2 py-1 whitespace-nowrap pointer-events-none
      border-${color}/50 ${
        backgroundColor ? 'bg-' + backgroundColor : 'backdrop-blur-sm'
      }`}
    >
      {props.children}
    </span>
  );
}
