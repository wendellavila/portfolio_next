import type { SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {}

export function CarbonExecutableProgram(props: Props) {
  return (
    <span className={props.className}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}>
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="m25 21l7 5l-7 5z"
        ></path>
        <path
          fill="currentColor"
          d="m20.17 19l-2.59 2.59L19 23l4-4l-4-4l-1.42 1.41zm-8.34 0l2.59-2.59L13 15l-4 4l4 4l1.42-1.41z"
        ></path>
        <circle cx={9} cy={8} r={1} fill="currentColor"></circle>
        <circle cx={6} cy={8} r={1} fill="currentColor"></circle>
        <path
          fill="currentColor"
          d="M21 26H4V12h24v7h2V6c0-1.102-.897-2-2-2H4c-1.103 0-2 .898-2 2v20c0 1.103.897 2 2 2h17zM4 6h24v4H4z"
        ></path>
      </svg>
    </span>
  );
}
