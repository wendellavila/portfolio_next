'use client';
import { getRandomInt } from '@/utils/functions';

import { Star } from './Star';
import { RefProps } from '@/typing/props';

interface Props {
  width: number;
  height: number;
}

export function StarrySky(props: Props) {
  const { width, height } = props;

  const biggerDimension = () => Math.max(width, height);

  return (
    <div
      id="banner-starry-sky"
      aria-hidden
      className="w-full h-full absolute top-0 left-0 z-0 bg-gradient-to-b
      from-slate-800 via-slate-700 to-slate-600"
    >
      {[...Array(Math.floor(biggerDimension() * 1.2))].map((_, index) => (
        <Star
          key={`star-sm-${index + 1}`}
          id={`star-sm-${index + 1}`}
          size={1}
          top={getRandomInt(0, height - 1)}
          left={getRandomInt(0, width - 1)}
        />
      ))}
      {[...Array(Math.floor(biggerDimension() * 0.3))].map((_, index) => (
        <Star
          key={`star-md-${index + 1}`}
          id={`star-md-${index + 1}`}
          size={2}
          top={getRandomInt(0, height - 1)}
          left={getRandomInt(0, width - 1)}
        />
      ))}
      {[...Array(Math.floor(biggerDimension() * 0.02))].map((_, index) => (
        <Star
          key={`star-lg-${index + 1}`}
          id={`star-lg-${index + 1}`}
          size={3}
          top={getRandomInt(0, height - 1)}
          left={getRandomInt(0, width - 1)}
        />
      ))}
    </div>
  );
}
