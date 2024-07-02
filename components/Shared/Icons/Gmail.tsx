import { SVGProps } from "react";

const GmailLogo = (props: SVGProps<SVGSVGElement>): JSX.Element => (
  <svg
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    {...props}
  >
    <path
      fill="currentColor"
      d="M492 80H20c-11.046 0-20 8.954-20 20v312c0 11.046 8.954 20 20 20h472c11.046 0 20-8.954 20-20V100c0-11.046-8.954-20-20-20zm0 332H216V236l136 96 136-96v176zm-236-52.17L36 160h440l-220 200.83z"
    />
  </svg>
);

export default GmailLogo;
