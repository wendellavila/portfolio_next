import type { SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {}

export function MdiGmail(props: Props) {
  return (
    <span className={props.className}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1rem"
        height="1rem"
        viewBox="0 0 24 24"
        {...props}
      >
        <path
          fill="currentColor"
          d="M20 18h-2V9.25L12 13L6 9.25V18H4V6h1.2l6.8 4.25L18.8 6H20m0-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2"
        ></path>
      </svg>
    </span>
  );
}
