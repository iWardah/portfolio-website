import Link from "@/components/Shared/Link";
import { forwardRef } from "react";

interface ExperienceProps {
  slug: string;
  title: string;
  company: string;
  description: string;
  duration: string;
}

const ExperienceCard = forwardRef<HTMLDivElement, ExperienceProps>(
  (
    {
      slug,
      title,
      company,
      description,
      duration,
    }: ExperienceProps,
    ref
  ): JSX.Element => {

    return (
      <Link href={`/experiences/${slug}`}>
      <div className="flex flex-col space-y-4 mt-6 rounded-xl border-2 border-tertiary transition duration-300 hover:border-pink-300 hover:shadow-xl bg-secondary/70 p-4">
        <div className="flex-1 ">
          <div className="mb-2">
              <h2 className="text-xl font-bold transition duration-200 hover:opacity-60">
                {title}
              </h2>
            <p className="text-sm text-gray-400">{company}</p>
          </div>
          <p className="text-md text-gray-500">{description}</p>
          <p className="text-sm text-gray-400">{duration}</p>
        </div>
      </div>
      </Link>
    );
  }
);

ExperienceCard.displayName = "ExperienceCard";

export default ExperienceCard;
