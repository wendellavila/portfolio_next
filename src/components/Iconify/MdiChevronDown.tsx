import type { SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {}

export function MdiChevronDown(props: Props) {
  return (
    <span className={props.className}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <path
          fill="currentColor"
          d="M7.41 8.58L12 13.17l4.59-4.59L18 10l-6 6l-6-6z"
        ></path>
      </svg>
    </span>
  );
}
