import { LanguageSelectorTooltipProps } from '@/typing/props';
import { TooltipLine } from './TooltipLine';
import { LanguageSelector } from './LanguageSelector';

export function LanguageSelectorTooltip(props: LanguageSelectorTooltipProps) {
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
          <LanguageSelector
            key={`tooltip-textbox-${index}`}
            position={props.position}
            color={props.color}
            isOpen={props.isOpen}
          />
        ) : (
          <TooltipLine key={`tooltip-line-${index}`} {...props} />
        )
      )}
    </div>
  );
}
