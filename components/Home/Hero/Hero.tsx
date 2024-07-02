import Socials from "@/components/Shared/Socials";
import Image from "next/image";
import AvatarJPG from "public/static/images/avatar.jpg";

const Hero = (): JSX.Element => {
  return (
    <div className="flex flex-col-reverse md:flex-row md:justify-between md:space-y-0">
      <div className="mt-8 flex flex-col justify-center space-y-4 md:mt-0 md:w-2/3">
        <h1 className="will-change-opacity text-5xl font-bold will-change-transform">
          Wardah Ijaz
        </h1>
        <h2 className="will-change-opacity text-lg font-medium text-gray-400 will-change-transform">
          Associate Software Engineer @ Huawei • Teaching/Research Assistant @UofT • CV/ML Enthusiast 
          • Android Developer 
        </h2>
        <p className="text-md will-change-opacity text-lg text-gray-300 will-change-transform">
          I am a software engineer, currently looking into learning new areas (GoLang, Cloud Computing, Model Deployment). I'm excited to share my learning journey through regular blog posts.
        </p>
        <Socials className="!mt-12" />
      </div>
      <div className="will-change-opacity relative h-32 w-32 overflow-hidden rounded-full will-change-transform">
      <Image
        src={AvatarJPG}
        alt="Wardah Ijaz"
        width={200}
        height={200}
      />
      </div>
    </div>
  );
};

export default Hero;
