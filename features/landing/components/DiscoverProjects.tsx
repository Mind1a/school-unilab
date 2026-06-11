import Image from "next/image";
import Link from "next/link";

export const projects: Project[] = [
  {
    id: 1,
    image: "/images/discover-projects/photo-1.png",
    title: "ვიზუალური პროგრამირების ვორკშოპი",
    date: "12 ივნ 2026",
    dateTime: "2026-06-12",
    href: "#",
  },
  {
    id: 2,
    image: "/images/discover-projects/photo-2.jpg",
    title: "პროექტის მოკლე აღწერა",
    date: "15 ივნ 2026",
    dateTime: "2026-06-15",
    href: "#",
  },
  {
    id: 3,
    image: "/images/discover-projects/photo-3.jpg",
    title: "პროექტის მოკლე აღწერა პროექტის მოკლე აღწერა",
    date: "18 ივნ 2026",
    dateTime: "2026-06-18",
    href: "#",
  },
];

type Project = {
  id: number;
  image: string;
  title: string;
  date: string;
  dateTime: string;
  href: string;
};

const DiscoverProjects = () => {
  return (
    <section className="flex justify-center w-97.5 min-h-100 md:w-208.5 md:min-h-95 lg:w-full lg:min-h-130 mt-18 lg:mt-14 px-4.5 md:px-[24.5px] lg:px-30 pb-4">
      <div className="flex flex-col items-center w-full h-full">
        <header className="flex justify-start items-center md:justify-center w-full h-12 md:h-12 lg:h-14.5">
          <h2 className="text-[24px] leading-6 md:text-[32px] lg:text-[48px] font-mecomisce">
            აღმოაჩინე ახალი პროექტები
          </h2>
        </header>

        <ul className="flex flex-row w-full max-w-300 h-74 md:h-67 lg:h-92 overflow-x-auto md:overflow-visible scrollbar-hide mt-4 md:mt-6 lg:mt-10 gap-4 md:gap-5.5 lg:gap-6">
          {projects.map((project) => (
            <Card key={project.id} project={project} />
          ))}
        </ul>

        <div className="flex items-center w-58.5 h-6 md:w-71.25 lg:w-83.25 mt-6 lg:mt-10">
          <Link
            href="#"
            className="flex items-center text-[16px] md:text-[20px] lg:text-[24px] text-black font-mecomisce"
          >
            <span>ყველა პროექტის ნახვა</span>

            <Image
              src="/images/discover-projects/arrow.svg"
              alt=""
              width={24}
              height={24}
              className="ml-4"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

const Card = ({ project }: { project: Project }) => {
  return (
    <li className="first:ml-1 last:mr-1 w-70.25 h-72 md:w-60.75 md:h-65 lg:w-96 lg:h-90 shrink-0">
      <article className="flex flex-col items-center w-full h-full rounded-2xl overflow-hidden bg-white border-2 border-black shadow-[-4px_4px_0px_0px_rgba(0,0,0,1)]">
        <div className="relative w-full h-40 md:h-35 lg:h-50 overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />

          <div className="absolute top-2 left-2 lg:top-4 lg:left-4 flex items-center justify-center w-28.25 h-7.5 lg:w-30.5 lg:h-9 rounded-3xl bg-[rgba(148,176,226,1)] border-2 border-black shadow-[-4px_4px_0px_0px_rgba(0,0,0,1)]">
            <Image
              src="/images/discover-projects/hat.svg"
              alt=""
              width={20}
              height={20}
            />

            <span className="ml-2 text-[16px]">კურსები</span>
          </div>
        </div>

        <div className="flex flex-col justify-start w-full h-32 md:h-30 lg:h-40 px-4 lg:px-6">
          <div className="w-full h-14 lg:h-16 mt-4 md:mt-3 lg:mt-6 bg-white">
            <h3 className="text-[16px] md:text-[14px] lg:text-[20px] line-clamp-2">
              {project.title}
            </h3>
          </div>

          <div className="flex justify-between items-center w-full h-6 mt-4 lg:mt-6 bg-white">
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

export default DiscoverProjects;
