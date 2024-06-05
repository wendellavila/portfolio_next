import { ComponentProps } from '@/typing/props';
import { useEffect, useState } from 'react';

interface Props extends ComponentProps {
  animate: boolean;
  percentage: number;
}

export function PercentageBar(props: Props) {
  const { animate, className, children } = props;

  const maxPercentage = Math.round(
    props.percentage > 100 ? 100 : props.percentage < 0 ? 0 : props.percentage
  );

  //Start at max in case JS is turned off
  const [percentage, setPercentage] = useState(maxPercentage);
  //And set to zero later to start animation
  useEffect(() => setPercentage(0), [animate]);

  useEffect(() => {
    const handleIncrease = () => {
      if (percentage < maxPercentage)
        setPercentage(percentage => percentage + 0.4);
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
  }, [animate, percentage]);

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
