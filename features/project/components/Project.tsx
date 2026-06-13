import Image from "next/image";
import Pagination from "./Pagination";
import { projectsData } from "./data";
import Link from "next/link";

const Project = () => {
  return (
    <div className="flex flex-col items-center w-full h-auto px-4 md:px-[24.5px] lg:px-30 mt-6 md:mt-0 lg:mt-8 mb-[91.39px] md:mb-[72.44px] lg:mb-[139.33px]">
      <div className="flex items-center justify-between md:justify-start w-full max-w-89.5 md:max-w-196.25 lg:max-w-300 h-12 lg:h-18">
        <h2 className="order-1 md:order-2 font-mecomisce text-[24px] md:text-[32px] lg:text-[48px] leading-6 md:leading-12 lg:leading-14 md:ml-4.75 lg:ml-8.25">
          <span>{"შეარჩიე შენთვის საინტერესო პროექტი".toUpperCase()}</span>
        </h2>

        <Link
          href="/project/filter"
          className="order-2 md:order-1 flex items-center justify-center w-12 h-12 lg:w-18 lg:h-18 rounded-full bg-white border-2 border-black shadow-[-4px_4px_0px_0px_rgba(0,0,0,1)] cursor-pointer shrink-0"
        >
          <Image
            src="/images/project/filter.svg"
            alt="filter"
            width={24}
            height={24}
          />
        </Link>
      </div>
      <div className="flex h-auto w-full flex-col items-center px-4 mt-9 md:mt-6 lg:mt-14">
        <Pagination projects={projectsData} />
      </div>
    </div>
  );
};

export default Project;
