import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { allExperiences, Experience } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import MDXComponents from "@/components/Common/MDXComponents";
import { NextSeo } from "next-seo";

interface ExperiencePageProps {
    experience: Experience;
  }
  

const SkillPage: NextPage<ExperiencePageProps> = ({
    experience
}) => {
    const ExperienceMDX = useMDXComponent(experience.body.code);

    return (
        <>
          <div className="mt-8 flex space-x-8">
            <div className="flex flex-col space-y-2">
              <h1 className="text-2xl font-bold">{experience.title}</h1>
              <p className="text-sm text-gray-300">Duration: {experience.duration}</p>
            </div>
          </div>
          <article>
            <div className="prose my-12 max-w-full leading-8">
              <ExperienceMDX components={{ ...MDXComponents }} />
            </div>
          </article>
        </>
      );
    };
    
export const getStaticProps: GetStaticProps = async ({ params }) => {
    const experience = allExperiences.find(experience => experience.slug === params.slug);

  
    return {
      props: {
        experience,
      },
    };
  };
  
  export const getStaticPaths: GetStaticPaths = async () => {
    const paths = allExperiences.map(experience => ({
      params: { slug: experience.slug },
    }));
  
    return {
      paths,
      fallback: false,
    };
  };
  
  export default SkillPage;