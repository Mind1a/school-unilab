import Image from "next/image";
import Link from "next/link";
import { type ProjectData } from "./data";

const Project = () => {
  return (
    <div className="flex flex-col items-center w-full h-auto px-4 md:px-[24.5px] lg:px-30 mt-6 md:mt-0 lg:mt-8 bg-black">
      <div className="w-full max-w-89.5 md:max-w-196.25 lg:max-w-300 h-12 lg:h-18 bg-red-500"></div>
    </div>
  );
};

const Card = ({ project }: { project: ProjectData }) => {
  return (
    <li className="h-72 w-70.25 shrink-0 first:ml-1 last:mr-1 md:h-65 md:w-60.75 lg:h-90 lg:w-full lg:first:ml-0 lg:last:mr-0">
      <article className="flex h-full w-full flex-col items-center overflow-hidden rounded-2xl border-2 border-black bg-white shadow-[-4px_4px_0px_0px_rgba(0,0,0,1)]">
        <div className="relative h-40 w-full overflow-hidden md:h-35 lg:h-50">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />

          <div className="absolute left-2 top-2 flex h-7.5 w-28.25 items-center justify-center rounded-3xl border-2 border-black bg-[rgba(148,176,226,1)] shadow-[-4px_4px_0px_0px_rgba(0,0,0,1)] lg:left-4 lg:top-4 lg:h-9 lg:w-30.5">
            <Image
              src="/images/discover-projects/hat.svg"
              alt=""
              width={20}
              height={20}
            />

            <span className="ml-2 text-[16px]">კურსები</span>
          </div>
        </div>

        <div className="flex h-32 w-full flex-col justify-start px-4 md:h-30 lg:h-40 lg:px-6">
          <div className="mt-4 h-14 w-full bg-white md:mt-3 lg:mt-6 lg:h-16">
            <h3 className="line-clamp-2 text-[16px] md:text-[14px] lg:text-[20px]">
              {project.title}
            </h3>
          </div>

          <div className="mt-4 flex h-6 w-full items-center justify-between bg-white lg:mt-6">
            <Link
              href={project.href}
              className="flex items-center text-[14px] text-[rgba(77,124,206,1)]"
            >
              <Image
                src="/images/discover-projects/view-more.svg"
                alt=""
                width={20}
                height={20}
              />

              <span className="ml-2">დეტალურად</span>
            </Link>

            <time
              dateTime={project.dateTime}
              className="text-[12px] text-[rgba(102,102,102,1)]"
            >
              {project.date}
            </time>
          </div>
        </div>
      </article>
    </li>
  );
};

export default Project;
