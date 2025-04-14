import { SVGProps } from 'react';

export const ArrowLeftIcon = (Props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 10 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...Props}
    >
      <path
        d="M6 11L1 6L6 1"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
