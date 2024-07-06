import Link from "@/components/Shared/Link";
import { ArrowRight } from "react-feather";
import { allExperiences } from ".contentlayer/generated";

const Experience = () => {
  const customOrder = [0, 2, 3]; // Example indices
  const firstThreeExperiences = customOrder.map(index => allExperiences[index])

  return (
    <div className="my-16 flex flex-col">
      <h2 className="mb-8 text-3xl font-bold">Experience</h2>
      <div className="md:w-2/3">
        <div className="flex flex-col space-y-4">
          {firstThreeExperiences.map((experience, index) => (
            <div
              key={index}
              className="border-l-2 border-gray-300 pl-4 transition duration-200 hover:border-accent transform hover:scale-[1.01]"
            >
              <Link href={`/experiences/${experience.slug}`}>
                  <div className="mb-2">
                    <h3 className="text-xl font-bold">{experience.title}</h3>
                    <p className="text-sm text-gray-400">{experience.company}</p>
                  </div>
                  <p className="text-md text-gray-500">{experience.description}</p>
                  <p className="text-sm text-gray-400">{experience.duration}</p>
              </Link>
            </div>
          ))}
          {/* "View All Experience" link */}
          <Link
            href="/experiences"
            className="group mt-8 flex items-center justify-start space-x-2 text-xl font-medium" >
            <span>View All Experiences</span>
            <ArrowRight className="h-4 w-4 transition duration-200 group-hover:translate-x-1" />
        </Link>
        </div>
      </div>
    </div>
  );
};

export default Experience;
