import { ComponentProps, PositionProps, ColorProps } from '@/typing/props';
import { VerticalNavTooltipLine } from './VerticalNavTooltipLine';
import { VerticalNavTooltipTextbox } from './VerticalNavTooltipTextbox';

interface Props extends ComponentProps, PositionProps, ColorProps {}

export function VerticalNavTooltip(props: Props) {
  const { className, color, position, textColor } = props;

  const tooltipPosition = position === 'left' ? 'left-2' : 'right-2';
  type TooltipComponentType = 'textbox' | 'line';

  const orderedComponents: TooltipComponentType[] =
    position === 'left' ? ['line', 'textbox'] : ['textbox', 'line'];

  return (
    <div
      className={`${className ?? ''}
      absolute flex-row items-center group-hover:underline ${tooltipPosition}
      text-${textColor ?? color}`}
    >
      {orderedComponents.map((key, index) =>
        key === 'textbox' ? (
          <VerticalNavTooltipTextbox
            key={`tooltip-textbox-${index}`}
            {...props}
          />
        ) : (
          <VerticalNavTooltipLine key={`tooltip-line-${index}`} {...props} />
        )
      )}
    </div>
  );
}
