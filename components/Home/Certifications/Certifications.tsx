import { ExternalLinkIcon } from '@heroicons/react/outline'; // Assuming you're using Heroicons for icons
import Link from "@/components/Shared/Link";

const Certifications = (): JSX.Element => {
  return (
    <div className="my-16 flex flex-col">
      <h2 className="mb-8 text-3xl font-bold">Certifications</h2>
      <div className="flex items-center mb-4">
        <Link href="http://www.delfdalf.fr/delf-a2.html" target="_blank" className="text-blue-500 hover:underline flex items-center"> DELF A2 Certificate <ExternalLinkIcon className="h-5 w-5 ml-1" /></Link>
      </div>
    </div>
  );
};

export default Certifications;
