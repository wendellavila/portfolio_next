import { ComponentProps } from '@/typing/props';
import { useEffect, useState } from 'react';

interface Props extends ComponentProps {
  animate: boolean;
  percentage: number;
}

export function PercentageBar(props: Props) {
  const { animate, className, children } = props;

  let maxPercentage = Math.round(props.percentage);
  if (maxPercentage < 0) maxPercentage = 0;
  if (maxPercentage > 100) maxPercentage = 100;

  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const handleIncrease = () => {
      if (percentage < maxPercentage)
        setPercentage(percentage => percentage + 0.5);
    };

    // Using square root function to reduce acceleration
    // when percentage gets closer to 100%
    const animationTimeFunction = (x: number) => Math.sqrt(x);

    if (animate) {
      const timeoutId = setTimeout(
        handleIncrease,
        animationTimeFunction(percentage)
      );
      return () => clearTimeout(timeoutId);
    }
  }, [animate, maxPercentage, percentage]);

  return (
    <div
      className={`flex flex-row gap-4 items-center flex-nowrap ${
        className ?? ''
      }`}
    >
      <div className="w-1/3 flex flex-row items-center gap-2">{children}</div>
      <div
        aria-label={`${maxPercentage}%`}
        className="bg-slate-50/20 h-3 w-full"
      >
        <div
          style={{ width: `${percentage}%` }}
          className="h-full bg-cream/95"
        ></div>
      </div>
    </div>
  );
}
