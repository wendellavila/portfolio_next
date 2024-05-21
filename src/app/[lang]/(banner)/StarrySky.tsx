'use client';
import { useRef } from 'react';
import { getRandomInt } from '@/utils/functions';
import { useRefDimensions } from '@/utils/hooks';
import { Star } from './Star';

export function StarrySky() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const threshold = 50; // Rerender only when layout changes 50px in width or height
  const [width, height] = useRefDimensions(containerRef, threshold);
  const biggerDimension = () => Math.max(width, height);

  return (
    <div
      id="starry-sky"
      ref={containerRef}
      className="w-full h-full absolute top-0 left-0 z-0 bg-gradient-to-b
      from-slate-800 via-slate-700 to-slate-600"
    >
      {[...Array(Math.floor(biggerDimension() * 1.2))].map((_, index) =>
        <Star
          key={`star-sm-${index + 1}`}
          id={`star-sm-${index + 1}`}
          size={1}
          top={getRandomInt(0, height - 1)}
          left={getRandomInt(0, width - 1)}
        />
      )}
      {[...Array(Math.floor(biggerDimension() * 0.3))].map((_, index) =>
        <Star
          key={`star-md-${index + 1}`}
          id={`star-md-${index + 1}`}
          size={2}
          top={getRandomInt(0, height - 1)}
          left={getRandomInt(0, width - 1)}
        />
      )}
      {[...Array(Math.floor(biggerDimension() * 0.02))].map((_, index) =>
        <Star
          key={`star-lg-${index + 1}`}
          id={`star-lg-${index + 1}`}
          size={3}
          top={getRandomInt(0, height - 1)}
          left={getRandomInt(0, width - 1)}
        />
      )}
    </div>
  );
}