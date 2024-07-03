import Link from "@/components/Shared/Link";
import { ArrowRight } from "react-feather";

const Experience = () => {
  const experiences = [
    {
      company: "Huawei Technologies",
      title: "Associate Software Engineer",
      description: "Department: Human Machine Interaction Lab",
      duration: "May 2024 - Present",
    },
    {
      company: "University of Toronto",
      title: "Teaching Assistant",
      description: "Courses: Theory of Computation and Data Structures & Algorithms",
      duration: "Sept 2023 - May 2024",
    },
    {
      company: "University of Toronto",
      title: "Research Assistant",
      description: "Topic: Impact of storytelling visualization of DSA",
      duration: "May 2023 - Sept 2023",
    },
    {
      company: "Qatar National Bank",
      title: "Software Engineer Intern",
      description: "Implemented DevOps practices to enhance software development lifecycle efficiency.",
      duration: "June 2023 - Sept 2023",
    },
    {
      company: "Teraception (startup)",
      title: "Web Development Intern",
      description: "Developed RestAPIs and contributed to backend systems.",
      duration: "May 2022 - Sept 2022",
    }
  ];

  const firstThreeExperiences = experiences.slice(0, 3);
  const remainingExperiences = experiences.slice(3);

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
              <div className="mb-2">
                <h3 className="text-xl font-bold">{experience.title}</h3>
                <p className="text-sm text-gray-400">{experience.company}</p>
              </div>
              <p className="text-md text-gray-500">{experience.description}</p>
              <p className="text-sm text-gray-400">{experience.duration}</p>
            </div>
          ))}
          {/* "View All Experience" link */}
          <Link
            href="/Experiences"
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
