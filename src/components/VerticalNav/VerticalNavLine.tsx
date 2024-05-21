import { PositionProps, ColorProps } from '@/typing/props';

interface Props extends PositionProps, ColorProps {
  gap?: boolean;
}

export function VerticalNavLine(props: Props) {
  const color = props.color;
  return (
    <div
      className={`w-[6px] border-x border-solid ${
        props.gap ? 'grow-[6]' : 'grow'
      }
      ${props.position === 'left' ? 'mr-12 ml-2' : 'mr-2 ml-12'}
      border-${color}/35`}
    ></div>
  );
}
