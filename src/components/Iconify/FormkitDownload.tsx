import type { SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {}

export function FormkitDownload(props: Props) {
  return (
    <span className={props.className}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="0.94rem"
        height="1rem"
        viewBox="0 0 15 16"
        {...props}
      >
        <path
          fill="currentColor"
          d="M7.5 11c-.28 0-.5-.22-.5-.5v-9c0-.28.22-.5.5-.5s.5.22.5.5v9c0 .28-.22.5-.5.5m6 4h-12c-.28 0-.5-.22-.5-.5v-2c0-.28.22-.5.5-.5s.5.22.5.5V14h11v-1.5c0-.28.22-.5.5-.5s.5.22.5.5v2c0 .28-.22.5-.5.5"
        ></path>
        <path
          fill="currentColor"
          d="M7.5 12a.47.47 0 0 1-.35-.15l-3.5-3.5c-.2-.2-.2-.51 0-.71s.51-.2.71 0l3.15 3.15l3.15-3.15c.2-.2.51-.2.71 0s.2.51 0 .71l-3.5 3.5c-.1.1-.23.15-.35.15Z"
        ></path>
      </svg>
    </span>
  );
}
