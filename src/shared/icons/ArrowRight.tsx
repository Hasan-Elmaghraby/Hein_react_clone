import { SVGProps } from 'react';

export const ArrowRightIcon = (Props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 7 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...Props}
    >
      <path
        d="M1 11L6 6L1 1"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
