import { NextSeo } from "next-seo";
import ExperienceCard from "@/components/Experiences/ExperienceCard"; // Adjust path as per your file structure
import { allExperiences } from "contentlayer/generated";
import React from "react"; // Import React if not imported already

const customOrder = [0, 2, 3, 1, 4]; // Example indices
const reorderedExperiences = customOrder.map(index => allExperiences[index])

const ExperiencesPage: React.FC = () => { // Add React.FC for type safety
  return (
    <>
      <NextSeo
        title="Experiences | Wardah"
        description="Professional experiences of Wardah"
      />
      <h1 className="mb-8 text-2xl font-bold">Experiences</h1>
      <div className="flex-col space-y-8">
        {reorderedExperiences.map((experience) => (
          <ExperienceCard
            slug={experience.slug}
            key={experience._id} 
            title={experience.title}
            company={experience.company}
            description={experience.description}
            duration={experience.duration}
          />
        ))}
      </div>
    </>
  );
};

export default ExperiencesPage;
