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
    title: "პროექტის მოკლე აღწერა პროექტის მოკლე აღწერა აღწერა",
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
    <section className="mt-18  flex w-full my-18 lg:my-40  justify-center px-4 pb-4 md:px-6 lg:mt-14 ">
      <div className="flex w-full  max-w-300  flex-col items-center">
        <header className="flex min-h-12 w-full items-center justify-center lg:min-h-14.5">
          <h2 className="font-mecomisce text-[24px] leading-6 md:text-[32px] lg:text-[48px] lg:leading-none">
            {"აღმოაჩინე ახალი პროექტები".toUpperCase()}
          </h2>
        </header>

        <ul className=" mt-6 flex w-full gap-4 overflow-x-auto pb-4 snap-x snap-mandatory md:overflow-visible md:grid md:grid-cols-3 md:justify-items-center lg:gap-6">
          {projects.map((project) => (
            <Card key={project.id} project={project} />
          ))}
        </ul>

        <div className="mt-6 flex w-full items-center justify-center lg:mt-10">
          <Link
            href="/project"
            className="group font-mecomisce flex gap-4 items-center text-[16px] leading-5 text-black md:text-[20px] md:leading-6 lg:text-[24px] transition-colors duration-200 hover:text-[rgba(77,124,206,1)]"
          >
            <span>
              {"ყველა პროექტის ნახვა".toUpperCase()}
            </span>

            <svg
              className="w-6 h-6 transition-colors duration-200 text-black group-hover:text-[rgba(77,124,206,1)]"
              viewBox="0 0 24 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.7128 1.86236C18.1924 3.06076 19.5071 4.44945 20.6228 5.99236C20.8828 6.37236 21.5028 7.20236 22.1428 7.99236C22.6328 8.58236 23.1428 9.15236 23.4628 9.49236C23.5628 9.59236 23.7228 9.65236 23.7028 9.70236C23.7926 9.72328 23.8714 9.77697 23.9236 9.85291C23.9759 9.92885 23.998 10.0216 23.9854 10.1129C23.9729 10.2043 23.9268 10.2876 23.856 10.3467C23.7852 10.4058 23.6949 10.4364 23.6028 10.4324C23.2119 10.2561 22.869 9.98862 22.6028 9.65236C21.6694 8.63361 20.7915 7.5654 19.9728 6.45236C18.8757 5.00289 17.595 3.70201 16.1628 2.58236C14.9728 1.65236 13.8528 0.932356 13.2328 0.992356C13.1628 0.992356 13.1328 1.08236 13.0828 1.16236C13.0026 1.33408 12.9454 1.51565 12.9128 1.70236C12.7848 2.77765 12.7647 3.86306 12.8528 4.94236C12.8792 5.14483 12.8792 5.34988 12.8528 5.55236C12.8384 5.66175 12.7901 5.76391 12.7149 5.84458C12.6396 5.92525 12.541 5.9804 12.4328 6.00236C12.1648 6.06899 11.889 6.09926 11.6128 6.09236C11.0728 6.09236 10.4928 5.99236 10.0128 5.99236H4.26283C3.63352 5.95082 3.00215 5.95082 2.37283 5.99236C2.24761 5.99129 2.12367 6.01759 2.00967 6.06941C1.89568 6.12123 1.79437 6.19732 1.71283 6.29236C1.55862 6.60624 1.46047 6.94467 1.42283 7.29236C1.42695 7.31551 1.42695 7.3392 1.42283 7.36236C1.27283 8.79236 0.152832 8.51235 0.152832 7.34236C0.152832 7.13236 0.212832 6.92236 0.252832 6.73236C0.324565 6.34297 0.459693 5.96799 0.652832 5.62236C0.920846 5.20872 1.34133 4.91762 1.82283 4.81236C2.63345 4.71843 3.45221 4.71843 4.26283 4.81236L9.97283 4.86236C10.4528 4.86236 11.0428 4.97236 11.5828 4.99236H11.7528C11.7029 3.88427 11.743 2.77395 11.8728 1.67236C12.0528 0.672356 12.5028 0.0523558 13.1428 0.00235579C13.7828 -0.0476442 15.2928 0.702356 16.7128 1.86236Z"
                fill="currentColor"
              />
              <path
                d="M8.97281 16.5823L8.26281 16.8223C7.45281 17.3023 7.26281 15.8923 8.00281 15.6723C9.97281 15.0223 12.4328 14.2323 12.5028 14.2323C12.6154 14.2278 12.7266 14.2593 12.8201 14.3222C12.9136 14.3852 12.9846 14.4763 13.0228 14.5823C13.0793 14.7638 13.1096 14.9523 13.1128 15.1423C13.1128 16.0223 13.0428 18.0823 13.1728 18.9323L13.3428 19.5423C13.5728 19.6123 13.8628 19.4523 14.1528 19.2923C14.504 19.1007 14.8385 18.8799 15.1528 18.6323C16.0728 17.8623 17.0228 17.0923 17.9328 16.2923C18.5428 15.7623 19.1328 15.2223 19.6828 14.6523L21.4228 12.8123L23.0928 11.0523C23.1564 11.0073 23.2338 10.9863 23.3114 10.9929C23.389 10.9995 23.4617 11.0333 23.5168 11.0884C23.5718 11.1434 23.6057 11.2162 23.6123 11.2938C23.6188 11.3713 23.5978 11.4488 23.5528 11.5123L21.8828 13.2323L20.1828 15.1123C19.6228 15.7123 19.0328 16.2723 18.4228 16.8323C17.5228 17.6523 16.5828 18.4523 15.6828 19.2423C15.2125 19.6706 14.6798 20.0246 14.1028 20.2923C13.7724 20.4378 13.4031 20.4694 13.0528 20.3823C12.8431 20.3093 12.6637 20.1686 12.5428 19.9823C12.3586 19.6783 12.2457 19.3363 12.2128 18.9823C12.0628 18.1923 12.0928 16.3523 12.0528 15.3523C11.4128 15.6723 10.1528 16.1523 8.97281 16.5823Z"
                fill="currentColor"
              />
              <path
                d="M1.27278 8.8724C1.53753 9.20273 1.88153 9.46073 2.27278 9.6224C3.4352 9.97405 4.65019 10.1196 5.86278 10.0524C6.20359 10.0586 6.5412 10.1194 6.86278 10.2324C7.04713 10.3023 7.20227 10.4328 7.30278 10.6024C7.55389 11.0543 7.67827 11.5657 7.66278 12.0824C7.63281 12.6143 7.54223 13.141 7.39278 13.6524C7.12605 14.8296 6.9588 16.0272 6.89278 17.2324C6.74278 17.4724 6.51278 17.3424 6.35278 17.3824C5.8848 17.3827 5.41949 17.3119 4.97278 17.1724C4.56398 17.0512 4.17857 16.8619 3.83278 16.6124C3.06019 16.0417 2.34663 15.3952 1.70278 14.6824C1.26634 14.1786 0.89663 13.6207 0.602778 13.0224C0.320147 12.3871 0.134737 11.7129 0.0527782 11.0224C-0.0175927 10.3576 -0.0175927 9.68721 0.0527782 9.0224C0.0667453 8.90812 0.119728 8.80215 0.202778 8.7224C0.282778 8.5924 1.28278 8.6924 1.27278 8.8724ZM1.27278 10.8724C1.33951 11.4278 1.48777 11.9703 1.71278 12.4824C1.96173 12.9784 2.27071 13.4418 2.63278 13.8624C3.21891 14.5155 3.8688 15.1085 4.57278 15.6324C4.74898 15.765 4.94463 15.8696 5.15278 15.9424C5.4775 16.057 5.81232 16.1407 6.15278 16.1924C5.98278 14.7524 6.50278 13.3124 6.44278 12.0924C6.38278 10.8724 6.30278 11.3324 5.54278 11.2624C4.54538 11.2154 3.55774 11.0441 2.60278 10.7524C2.1121 10.5886 1.65484 10.3379 1.25278 10.0124C1.24748 10.303 1.26084 10.5936 1.29278 10.8824L1.27278 10.8724Z"
                fill="currentColor"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

const Card = ({ project }: { project: Project }) => {
  return (
    <li className="w-[280px] pl-2 shrink-0 snap-center md:w-full md:max-w-[384px]">
      <article className="flex flex-col  w-full h-full rounded-2xl overflow-hidden bg-white border-2 border-black shadow-[-4px_4px_0px_0px_rgba(0,0,0,1)] transition-shadow hover:shadow-[-4px_4px_0px_0px_rgba(0,0,0,1),-8px_8px_4px_0px_rgba(0,0,0,0.25)]">
        <div className="relative w-full aspect-[4/3]  overflow-hidden shrink-0">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
          <div className="absolute top-2 left-2 lg:top-4 left-4 flex items-center justify-center w-28.25 h-7.5 lg:w-30.5 lg:h-9 rounded-3xl bg-[rgba(148,176,226,1)] border-2 border-black shadow-[-4px_4px_0px_0px_rgba(0,0,0,1)]">
            <Image src="/images/discover-projects/hat.svg" alt="" width={20} height={20} />
            <span className="ml-2 text-[16px]">კურსები</span>
          </div>
        </div>


        <div className="flex flex-col justify-between flex-1 w-full p-4 lg:p-6 bg-white gap-y-4">

          <div className="w-full">
            <h3 className="text-[16px] md:text-[14px] lg:text-[20px] leading-5 pb-1 md:leading-6 line-clamp-2">
              {project.title}
            </h3>
          </div>

          <div className="flex justify-between items-center w-full mt-auto bg-white pt-2">
            <Link
              href={project.href}
              className="group flex items-center text-[14px] lg:leading-6 text-[rgba(77,124,206,1)] shrink-0"
            >
              <Image src="/images/discover-projects/view-more.svg" alt="" width={20} height={20} className="block group-hover:hidden" />
              <Image src="/images/discover-projects/view-more-hover.svg" alt="" width={20} height={20} className="hidden group-hover:block" />
              <span className="ml-2 group-hover:text-[rgba(148,176,226,1)] transition-colors whitespace-nowrap">
                დეტალურად
              </span>
            </Link>

            <time dateTime={project.dateTime} className="text-[12px] md:text-[12px]  lg:text-[16px] font-light lg:leading-6 text-[rgba(102,102,102,1)] shrink-0 whitespace-nowrap font-mecomisce ml-2">
              {project.date}
            </time>
          </div>

        </div>
      </article>
    </li>
  );
};

export default DiscoverProjects;
