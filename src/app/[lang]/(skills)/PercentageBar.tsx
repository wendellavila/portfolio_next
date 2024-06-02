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
        setPercentage((percentage) => percentage + 0.4);
    };

    // This makes lower maxPercentages fill up a bit slower than high ones
    const animationTimeFunction = (x: number) =>
      (100 - (maxPercentage - x)) / maxPercentage;

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
      className={`flex flex-row gap-x-4 items-center flex-nowrap ${
        className ?? ''
      }`}
    >
      <div className="w-1/3 flex flex-row items-center gap-x-2">{children}</div>
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
