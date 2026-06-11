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
    <section className="mt-18 flex w-full min-w-0 justify-center px-4 pb-4 md:px-6 lg:mt-14 lg:min-h-130 lg:px-10 xl:px-30">
      <div className="flex w-full max-w-300 min-w-0 flex-col items-center">
        <header className="flex min-h-12 w-full items-center justify-center lg:min-h-14.5">
          <h2 className="font-mecomisce text-[24px] leading-7 md:text-[32px] lg:text-[48px] lg:leading-none">
            {"აღმოაჩინე ახალი პროექტები".toUpperCase()}
          </h2>
        </header>

        <ul className="scrollbar-hide mt-4 flex w-full max-w-full gap-4 overflow-x-auto pb-3 md:mt-6 md:gap-5.5 lg:mt-10 lg:grid lg:grid-cols-3 lg:gap-6 lg:overflow-visible lg:pb-0">
          {projects.map((project) => (
            <Card key={project.id} project={project} />
          ))}
        </ul>

        <div className="mt-6 flex w-full items-center justify-center lg:mt-10">
          <Link
            href="#"
            className="font-mecomisce flex items-center text-[16px] text-black md:text-[20px] lg:text-[24px]"
          >
            <span>{"ყველა პროექტის ნახვა".toUpperCase()}</span>

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
    <li className="h-72 w-70.25 shrink-0 first:ml-1 last:mr-1 md:h-65 md:w-60.75 lg:h-90 lg:w-full lg:first:ml-0 lg:last:mr-0">
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
