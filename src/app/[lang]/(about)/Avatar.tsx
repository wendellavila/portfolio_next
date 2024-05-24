import { ComponentProps } from '@/typing/props';

import Image from 'next/image';
import { useState } from 'react';

interface Props extends ComponentProps {
  src: string;
  size: number;
  alt: string;
  ariaLabel?: string;
}

export function Avatar(props: Props) {
  const { src, size, alt, ariaLabel } = props;
  const [hasError, setError] = useState(false);

  return (
    <div
      style={{ width: size, height: size }}
      className={`relative flex items-center justify-center rounded-full overflow-clip
      border-8 border-white/95 drop-shadow-md m-0 p-0 ${
        hasError ? 'bg-coffee/75' : 'bg-white'
      }`}
      aria-label={ariaLabel ?? 'Avatar'}
    >
      {hasError ? (
        <span className="text-white/55 top-1/2 left-1/2 text-7xl">
          {props.alt}
        </span>
      ) : (
        <Image
          src={src}
          width={size}
          height={size}
          alt={alt}
          className="absolute"
          onError={() => setError(true)}
        />
      )}
    </div>
  );
}
