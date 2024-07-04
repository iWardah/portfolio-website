import { GetStaticProps, NextPage } from "next";
import ExperienceCard from "@/components/Experiences/ExperienceCard"; // Adjust path as per your file structure
import { allExperiences, Experience } from "contentlayer/generated";
import Link from "@/components/Shared/Link";
import { ArrowRight } from "react-feather";
import getPreviewImageUrl from "@/utils/getPreviewImageURL";
import { NextSeo } from "next-seo";

export interface ExperienceWithPlaceholderImage extends Experience {
  placeholderImage: string;
}


const ExperiencesPage: NextPage<ExperiencesPageProps> = ({
  allExperiencesWithPlaceholderImages,
}) => {
  return (
    <>
      <NextSeo
        title="Experiences| Wardah"
        description="Professional experiences of Wardah"
      />
      <h1 className="mb-8 text-2xl font-bold">Experiences</h1>
      <div className="flex-col space-y-8">
        {allExperiences.map((experience, index) => (
          <ExperienceCard
            key={experience._id} // Ensure each experience has a unique identifier (_id or slug)
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
