import { ColorProps, ComponentProps, PositionProps } from '@/typing/props';
import { VerticalNavTooltipLine } from './VerticalNavTooltipLine';
import { VerticalNavLanguage } from './VerticalNavLanguage';

interface Props extends ColorProps, ComponentProps, PositionProps {
  isOpen: boolean;
}

export function VerticalNavLanguageTooltip(props: Props) {
  const color = props.color;
  const textColor = props.textColor;
  const tooltipPosition = props.position === 'left' ? 'left-2' : 'right-2';
  type TooltipComponentType = 'textbox' | 'line';

  const orderedComponents: TooltipComponentType[] =
    props.position === 'left' ? ['line', 'textbox'] : ['textbox', 'line'];

  return (
    <div
      className={`${props.className ?? ''}
      absolute flex-row items-center ${tooltipPosition}
      text-${textColor ?? color}`}
    >
      {orderedComponents.map((key, index) =>
        key === 'textbox' ? (
          <VerticalNavLanguage
            key={`tooltip-textbox-${index}`}
            isOpen={props.isOpen}
          />
        ) : (
          <VerticalNavTooltipLine key={`tooltip-line-${index}`} {...props} />
        )
      )}
    </div>
  );
}
