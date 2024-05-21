import { TooltipProps } from '@/typing/props';

export function TooltipLine(props: TooltipProps) {
  const color = props.color;
  const lineMargin = props.position === 'left' ? 'ml-2' : 'mr-2';

  return (
    <div
      className={`w-5 h-[1px] border-b-[1px] ${lineMargin} border-${color}/50`}
    ></div>
  );
}
