import { ComponentProps, ColorProps } from '@/typing/props';

interface Props extends ComponentProps, ColorProps {}

export function VerticalNavTooltipTextbox(props: Props) {
  const { backgroundColor, children, color } = props;

  return (
    <span
      className={`text-xl border px-2 py-1 whitespace-nowrap pointer-events-none
      border-${color}/50 ${backgroundColor ? 'bg-' + backgroundColor : ''}`}
    >
      {children}
    </span>
  );
}
