import { SVGProps } from "react";

const LinkedInLogo = (props: SVGProps<SVGSVGElement>): JSX.Element => (
  <svg
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    {...props}
  >
    <path
      fill="currentColor"
      d="M437 0H75C33.64 0 0 33.64 0 75v362c0 41.36 33.64 75 75 75h362c41.36 0 75-33.64 75-75V75c0-41.36-33.64-75-75-75zM150 412H95V200h55v212zm-28-252a28 28 0 1128-28 28 28 0 01-28 28zm266 252h-55V297c0-28-15-42.94-39-42.94s-45 18-45 55.94V412h-55V200h55v28.5C224 208 268 160 332.58 160S448 208 448 284.14V412z"
    />
  </svg>
);

export default LinkedInLogo;
