import { SVGProps } from 'react';

export const SearchIcon = (Props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      id="search-normal"
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 19.629 19.629"
      {...Props}
    >
      <path
        id="Vector"
        d="M0,7.77A7.77,7.77,0,1,0,7.77,0,7.77,7.77,0,0,0,0,7.77Z"
        transform="translate(2.454 1.636)"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        id="Vector-2"
        data-name="Vector"
        d="M0,1.636,1.636,0"
        transform="translate(1.636 16.358)"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        id="Vector-3"
        data-name="Vector"
        d="M19.629,0H0V19.629H19.629Z"
        fill="none"
        opacity={0}
      />
    </svg>
  );
};
