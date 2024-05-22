import { PositionProps, ColorProps } from '@/typing/props';

interface Props extends PositionProps, ColorProps {}

export function VerticalNavTooltipLine(props: Props) {
  const { color, position } = props;

  const lineMargin = position === 'left' ? 'ml-2' : 'mr-2';

  return (
    <div
      className={`w-5 h-[1px] border-b-[1px] ${lineMargin} border-${color}/50`}
    ></div>
  );
}
