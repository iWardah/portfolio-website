import type { GetStaticProps, NextPage } from "next";

import Hero from "@/components/Home/Hero";
import Projects from "@/components/Home/Projects";
import Experience from "@/components/Home/Experience";
import Certifications from "@/components/Home/Certifications";
import Skills from "@/components/Home/Skills";
import Contact from "@/components/Home/Contact";

const HomePage: NextPage = () => {
  return (
    <>
      <Hero />
      <Skills/>
      <Experience/>
      <Projects />
      <Certifications/>
      <Contact />
    </>
  );
};

export default HomePage;
