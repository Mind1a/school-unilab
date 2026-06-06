import Image from "next/image";
import Link from "next/link";
import { ExternalLink, ExternalLinkIcon } from "lucide-react";

export const projects = [
  {
    id: 1,
    image: "/images/discover-projects/photo-1.png",
    title: "ვიზუალური პროგრამირების ვორკშოპი",
    date: "12 ივნ 2026",
  },
  {
    id: 2,
    image: "/images/discover-projects/photo-2.jpg",
    title: "პროექტის მოკლე აღწერა ",
    date: "15 ივნ 2026",
  },
  {
    id: 3,
    image: "/images/discover-projects/photo-3.jpg",
    title: "პროექტის მოკლე აღწერა პროექტის მოკლე აღწერა",
    date: "18 ივნ 2026",
  },
];

const DiscoverProjects = () => {
  return (
    <div className="flex justify-center items-center w-97.5 h-100 md:w-208.5 md:h-95 lg:w-full lg:h-130 mt-18 lg:mt-14 px-4.5 md:px-[24.5px] lg:px-30 bg-red-500">
      {/* content container */}
      <div className="flex flex-col items-center w-full h-full bg-gray-500">
        {/* name */}
        <div className="w-full h-12 md:h-12 lg:h-14.5 bg-purple-500"></div>
        {/* Cards */}
        <div className="flex flex-row w-full max-w-300 h-72 overflow-x-auto md:overflow-visible scrollbar-hide md:h-65 lg:h-90 mt-4 md:mt-6 lg:mt-10 gap-4 md:gap-5.5 lg:gap-6 bg-black">
          {projects.map((project) => (
            <Card key={project.id} project={project} />
          ))}
        </div>
        {/* View All Courses */}
        <div className="w-58.5 h-6 md:w-71.25 lg:w-83.25 mt-6 lg:mt-10 bg-black"></div>
      </div>
    </div>
  );
};

interface Project {
  id: number;
  image: string;
  title: string;
  date: string;
}

const Card = ({ project }: { project: Project }) => {
  return (
    <div className="flex flex-col items-center w-70.25 h-72 md:w-60.75 md:h-65 lg:w-96 lg:h-90 rounded-2xl shrink-0 bg-white">
      <div className="relative w-full h-40 md:h-35 lg:h-50 overflow-hidden rounded-t-2xl">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
        />
      </div>

      <div className="flex flex-col justify-start w-70.25 h-32 md:w-60.75 md:h-30 lg:w-96 lg:h-40 px-4 lg:px-6 rounded-b-2xl">
        <div className="w-60.25 h-14 md:w-52.75 lg:w-82 lg:h-16 mt-4 md:mt-3 lg:mt-6  bg-white">
          <h3 className="text-base md:text-sm lg:text-xl">{project.title}</h3>
        </div>

        <div className="flex justify-between w-60.25 h-6 md:w-52.75 lg:w-82 mt-4 lg:mt-6 bg-white">
          <Link
            href={`#`}
            className="flex text-sm md:text-xs lg:text-base text-[rgba(77,124,206,1)]"
          >
            <ExternalLinkIcon />
            <p className="ml-2">დეტალურად</p>
          </Link>
          <p className="text-[12px] text-[rgba(102,102,102,1)]">
            {project.date}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DiscoverProjects;
