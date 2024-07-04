import React, { useState } from "react";
import Link from "@/components/Shared/Link";
import { forwardRef } from "react";

interface ExperienceProps {
  title: string;
  company: string;
  description: string;
  duration: string;
}

const ExperienceCard = forwardRef<HTMLDivElement, ExperienceProps>(
  (
    {
      title,
      company,
      description,
      duration,
    }: ExperienceProps,
    ref
  ): JSX.Element => {
    const [showPopup, setShowPopup] = useState(false);

    const togglePopup = () => {
      setShowPopup(!showPopup);
    };

    return (
      <div
        className="flex flex-col space-y-4 rounded-xl border-[1px] border-tertiary bg-secondary/50 p-4 md:flex-row md:space-y-0 md:space-x-8"
        ref={ref}
      >
        <div className="flex-1">
          <div className="mb-2">
            <Link href={`/experiences/`}>
              <h2 className="text-xl font-bold transition duration-200 hover:opacity-60">{title}</h2>
            </Link>
            <p className="text-sm text-gray-400">{company}</p>
          </div>
          <p className="text-md text-gray-500">{description}</p>
          <p className="text-sm text-gray-400">{duration}</p>
        </div>
        <Link href={`/experiences/`} className="self-start mt-auto" gradientUnderline onClick={togglePopup}>
          <p className="sr-only">Learn more about {title}</p>
          Learn More
        </Link>
        
        {showPopup && (
          <div className="popup">
            {/* Popup content */}
            <p>Popup content for {title}</p>
            <button onClick={togglePopup}>Close</button>
            </div>
          )}
      </div>
    );
  }
);

ExperienceCard.displayName = "ExperienceCard";

export default ExperienceCard;
