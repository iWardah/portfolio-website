import { SVGProps } from "react";

const MediumLogo = (props: SVGProps<SVGSVGElement>): JSX.Element => (
  <svg
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    {...props}
  >
    <path
      fill="currentColor"
      d="M16 0h480c8.837 0 16 7.163 16 16v480c0 8.837-7.163 16-16 16H16c-8.837 0-16-7.163-16-16V16c0-8.837 7.163-16 16-16zm48 80v352h416V80H64zm128 240h-48v-80h48zm0-144h-48v-48h48zm96 144h-48V176h48zm0-176h-48v-48h48z"
    />
  </svg>
);

export default MediumLogo;
