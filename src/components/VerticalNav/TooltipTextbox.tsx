import { TooltipProps } from '@/typing/props';

export function TooltipTextbox(props: TooltipProps) {
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
