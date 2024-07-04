import { ReactNode } from "react";

import {
  GitHubLogo,
  MediumLogo,
  GmailLogo,
  LinkedInLogo,
} from "@/components/Shared/Icons";

interface Social {
  id: string;
  name: string;
  url: string;
  icon: ReactNode;
}

const socials: Social[] = [
  {
    id: "github",
    name: "GitHub",
    url: "https://github.com/iWardah",
    icon: <GitHubLogo />,
  },
  {
    id: "medium",
    name: "Medium",
    url: "https://medium.com/@ijazwardah8",
    icon: <MediumLogo color="#2962ff" />,
  },
  {
    id: "gmail",
    name: "Contact",
    url: "mailto:ijazwardah8@gmail.com",
    icon: <GmailLogo color="#f0f0f0" />,
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/wardah-i-0b6131221/",
    icon: <LinkedInLogo color="#f0f0f0" />,
  }
];

export default socials;
