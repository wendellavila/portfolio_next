import type { SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {}

export function PhCaretDownLight(props: Props) {
  return (
    <span className={props.className}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" {...props}>
        <path
          fill="currentColor"
          d="m212.24 100.24l-80 80a6 6 0 0 1-8.48 0l-80-80a6 6 0 0 1 8.48-8.48L128 167.51l75.76-75.75a6 6 0 0 1 8.48 8.48"
        ></path>
      </svg>
    </span>
  );
}
