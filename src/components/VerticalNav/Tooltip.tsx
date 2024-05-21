import { TooltipProps } from '@/typing/props';
import { TooltipLine } from './TooltipLine';
import { TooltipTextbox } from './TooltipTextbox';

export function Tooltip(props: TooltipProps) {
  const color = props.color;
  const textColor = props.textColor;
  const tooltipPosition = props.position === 'left' ? 'left-2' : 'right-2';
  type TooltipComponentType = 'textbox' | 'line';

  const orderedComponents: TooltipComponentType[] =
    props.position === 'left' ? ['line', 'textbox'] : ['textbox', 'line'];

  return (
    <div
      className={`${props.className ?? ''}
      absolute flex-row items-center group-hover:underline ${tooltipPosition}
      text-${textColor ?? color}`}
    >
      {orderedComponents.map((key, index) =>
        key === 'textbox' ? (
          <TooltipTextbox key={`tooltip-textbox-${index}`} {...props} />
        ) : (
          <TooltipLine key={`tooltip-line-${index}`} {...props} />
        )
      )}
    </div>
  );
}
