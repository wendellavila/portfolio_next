import { getRandomInt } from '@/utils/functions';
import { ComponentProps } from '@/typing/props';

interface Props extends ComponentProps {
  size: number;
  top: number;
  left: number;
  animate?: boolean | 'random';
  animationDuration?: 'slow' | 'medium' | 'fast' | 'random';
}

export function Star(props: Props) {
  const { size, top, left } = props;
  const random = Math.random();
  let animationClassName = '';
  if (props.animate === 'random' || props.animate === undefined) {
    const animate = random <= (size <= 1 ? 0.5 : size) / 10;
    if (animate) {
      let animationDurationClassName: string;
      let animationDuration = props.animationDuration;
      if (animationDuration === 'random' || !animationDuration) {
        animationDuration = ['slow', 'medium', 'fast'][getRandomInt(0, 3)] as
          | 'slow'
          | 'medium'
          | 'fast';
      }
      if (animationDuration === 'fast') {
        animationDurationClassName = 'animate-duration-[1400ms]';
      } else if (animationDuration === 'medium') {
        animationDurationClassName = 'animate-duration-[1800ms]';
      } else {
        animationDurationClassName = 'animate-duration-[2000ms]';
      }
      animationClassName = `animate-fade animate-infinite animate-ease-in
      animate-alternate-reverse ${animationDurationClassName}`;
    }
  }

  let colorClassName = 'bg-white/80'; // Random with chance of 6/9
  if (random >= 0.667 && random < 0.778)
    colorClassName = 'bg-pink-400/80'; // chance of 1/9
  else if (random >= 0.778 && random < 0.889)
    colorClassName = 'bg-sky-500/80'; // chance of 1/9
  else if (random >= 0.889) colorClassName = 'bg-yellow-200/80'; // chance of 1/9

  return (
    <div
      style={{
        height: size ?? 1,
        width: size ?? 1,
        top: top ?? 0,
        left: left ?? 0,
      }}
      className={`absolute ${colorClassName} rounded-full ${animationClassName}`}
    ></div>
  );
}
