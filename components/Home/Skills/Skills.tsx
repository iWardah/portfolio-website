import { useState } from "react";
import { FaPython, FaJava, FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGitSquare } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { TbBrandTypescript } from "react-icons/tb";
import { SiTensorflow, SiPytorch } from "react-icons/si";
import Tooltip from "components/Shared/Tooltip/Tooltip";

interface SkillsProps {
  small?: boolean;
}
// Custom SVG icon for C (replace with your own SVG code)
const CIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 38 38" id="c">
    <path fill="#81899C" fillRule="evenodd" d="M18.5116 3.69877C19.4339 3.17174 20.5661 3.17175 21.4884 3.69877L33.4884 10.5559C34.4231 11.09 35 12.0841 35 13.1606V26.8394C35 27.9159 34.4231 28.91 33.4884 29.4441L21.4884 36.3012C20.5661 36.8283 19.4339 36.8283 18.5116 36.3012L6.51158 29.4441C5.57686 28.91 5 27.9159 5 26.8394V13.1606C5 12.0841 5.57686 11.09 6.51158 10.5559L18.5116 3.69877ZM20.4961 5.43526C20.1887 5.25958 19.8113 5.25958 19.5039 5.43526L7.50386 12.2924C7.19229 12.4704 7 12.8018 7 13.1606V26.8394C7 27.1982 7.19229 27.5296 7.50386 27.7076L19.5039 34.5647C19.8113 34.7404 20.1887 34.7404 20.4961 34.5647L32.4961 27.7076C32.8077 27.5296 33 27.1982 33 26.8394V13.1606C33 12.8018 32.8077 12.4704 32.4961 12.2924L20.4961 5.43526ZM20 14C18.9468 14 17.9121 14.2772 17 14.8038C16.0879 15.3305 15.3305 16.0879 14.8038 17C14.2772 17.9121 14 18.9468 14 20C14 21.0532 14.2772 22.0879 14.8038 23C15.3305 23.9121 16.0879 24.6695 17 25.1962C17.9121 25.7228 18.9468 26 20 26C21.0532 26 22.0879 25.7228 23 25.1962C23.4783 24.92 24.0899 25.0839 24.366 25.5622C24.6422 26.0405 24.4783 26.6521 24 26.9282C22.7838 27.6304 21.4043 28 20 28C18.5957 28 17.2162 27.6304 16 26.9282C14.7838 26.2261 13.7739 25.2162 13.0718 24C12.3696 22.7838 12 21.4043 12 20C12 18.5957 12.3696 17.2162 13.0718 16C13.7739 14.7838 14.7838 13.7739 16 13.0718C17.2162 12.3696 18.5957 12 20 12C21.4043 12 22.7838 12.3696 24 13.0718C24.4783 13.3479 24.6422 13.9595 24.366 14.4378C24.0899 14.9161 23.4783 15.08 23 14.8038C22.0879 14.2772 21.0532 14 20 14Z" clipRule="evenodd">
    </path>
  </svg>
);


const Skills = ({ small }: SkillsProps): JSX.Element => {
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);
  // Array of tech icons you want to display
  const techIcons = [
    { icon: <FaPython size={25}/>, name: "Python" },
    { icon: <FaJava size={25}/>, name: "Java" },
    { icon: <CIcon />, name: "C" },
    { icon: <FaHtml5 size={25} />, name: "HTML" },
    { icon: <FaCss3Alt size={25} />, name: "CSS" },
    { icon: <IoLogoJavascript size={25} />, name: "JavaScript" },
    { icon: <TbBrandTypescript size={25} />, name: "TypeScript" }
  ];

  // Array of tech icons you want to display
  const frameWorks = [
    { icon: <FaReact size={25}/>, name: "React" },
    { icon: <FaNodeJs size={25}/>, name: "Node.JS" },
    { icon: <FaGitSquare size={25}/>, name: "Git" },
    { icon: <SiTensorflow size={25}/>, name: "TensorFlow" },
    { icon: <SiPytorch size={25}/>, name: "PyTorch" }
  ];

  const handleMouseEnter = (name) => {
    setHoveredIcon(name);
  };

  const handleMouseLeave = () => {
    setHoveredIcon(null);
  };

  return (
    <div className="my-16 flex flex-col">
    <h2 className="mb-8 text-3xl font-bold">Tech & Tools</h2>
    <div className="flex justify-center items-center space-x-4">
      {techIcons.map((skill, index) => (
        <div key={index} className="relative">
          <Tooltip content={skill.name}>
            <div
              className={`cursor-pointer flex justify-center items-center ${"h-16 w-16 px-4 py-2"} rounded-xl shadow-md border-[1px] border-tertiary bg-secondary/30`}
              onMouseEnter={() => handleMouseEnter(skill.name)}
              onMouseLeave={handleMouseLeave}
            >
              {skill.icon}
            </div>
          </Tooltip>
        </div>
      ))}
    </div>
    <div className="flex justify-center items-center space-x-4 mt-6">
      {frameWorks.map((skill, index) => (
        <div key={index} className="relative">
          <Tooltip content={skill.name}>
            <div
              className={`cursor-pointer flex justify-center items-center ${"h-16 w-16 px-4 py-2"} rounded-xl shadow-md border-[1px] border-tertiary bg-secondary/30`}
              onMouseEnter={() => handleMouseEnter(skill.name)}
              onMouseLeave={handleMouseLeave}
            >
              {skill.icon}
            </div>
          </Tooltip>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Skills;
