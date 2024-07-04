import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import NextImage from "next/image";

import Link from "@/components/Shared/Link";
import { allExperiences, Experience } from "contentlayer/generated";
import { GitHubLogo } from "@/components/Shared/Icons";
import IconFactory from "@/components/Shared/Icons/IconFactory";
import { useMDXComponent } from "next-contentlayer/hooks";
import MDXComponents from "@/components/Common/MDXComponents";
import CustomGiscus from "@/components/Shared/CustomGiscus";
import { getGitHubOwnerAndRepoFromLink } from "@/utils/helpers";
import getPreviewImageUrl from "@/utils/getPreviewImageURL";
import { NextSeo } from "next-seo";

interface ExperiencePageProps {
  experience: Experience;
  experienceImagePreview: string;
}

const ExperiencePage: NextPage<ExperiencePageProps> = ({
  experience,
  experienceImagePreview,
}) => {
  const ExperienceMDX = useMDXComponent(experience.body.code);

  return (
    <>
      <NextSeo
        title={`${experience.title} | Anish De`}
        description={experience.description}
        openGraph={{
          title: `${experience.title} | Anish De`,
          description: experience.description
        }}
      />
      <div className="mt-8 flex space-x-8">
        {/* Assuming `iconName` is not needed for experiences */}
        {/* <IconFactory
          name={experience.iconName}
          className="h-16 w-16 rounded-xl bg-tertiary p-2 shadow-md"
        /> */}
        <div className="flex flex-col space-y-2">
          <h1 className="text-2xl font-bold">{experience.title}</h1>
          <p className="text-sm text-gray-300">{experience.company}</p>
        </div>
      </div>



      <article>
        <div className="prose my-12 max-w-full leading-8">
          <ExperienceMDX components={{ ...MDXComponents }} />
        </div>
        <div className="rounded-xl border-[1px] border-tertiary p-8">
          <CustomGiscus term={`experience: ${experience.title}`} />
        </div>
      </article>
    </>
  );
};

export default ExperiencePage;