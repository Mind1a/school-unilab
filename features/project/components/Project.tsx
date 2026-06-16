"use client";

import Image from "next/image";
import { useState } from "react";
import Pagination from "./Pagination";
import ProjectActiveBtn from "./ProjectActiveBtn";
import { projectsData } from "./data";

const Project = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const toggleFilter = () => {
    setIsFilterOpen((prev) => !prev);
  };

  return (
    <div className="flex h-auto w-full flex-col items-center px-4 mt-6 mb-[91.39px] md:mt-0 md:mb-[72.44px] md:px-[24.5px] lg:mt-8 lg:mb-[139.33px] lg:px-30">
      {isFilterOpen ? (
        <ProjectActiveBtn onFilterClick={toggleFilter} />
      ) : (
        <div className="flex h-12 w-full max-w-89.5 items-center justify-between md:max-w-196.25 md:justify-start lg:h-18 lg:max-w-300">
          <h2 className="order-1 font-mecomisce text-[24px] leading-6 md:order-2 md:ml-4.75 md:text-[32px] md:leading-12 lg:ml-8.25 lg:text-[48px] lg:leading-14">
            <span>{"შეარჩიე შენთვის საინტერესო პროექტი".toUpperCase()}</span>
          </h2>

          <button
            type="button"
            aria-label="Filter projects"
            onClick={toggleFilter}
            className="group order-2 flex h-12 w-12 shrink-0 cursor-pointer items-center justify-center rounded-full border-2 border-black bg-white shadow-[-4px_4px_0px_0px_rgba(0,0,0,1),-8px_8px_4px_0px_rgba(0,0,0,0.25)] hover:border-[rgba(77,124,206,1)] hover:shadow-[-4px_4px_0px_0px_rgba(77,124,206,1)] md:order-1 lg:h-18 lg:w-18"
          >
            <Image
              src="/images/project/filter.svg"
              alt=""
              width={24}
              height={24}
              className="block group-hover:hidden"
            />

            <Image
              src="/images/project/filter-hover.svg"
              alt=""
              width={24}
              height={24}
              className="hidden group-hover:block"
            />
          </button>
        </div>
      )}

      <div
        className={`h-auto w-full flex-col items-center px-4 mt-9 md:mt-6 lg:mt-14 ${
          isFilterOpen ? "hidden md:flex" : "flex"
        }`}
      >
        <Pagination projects={projectsData} />
      </div>
    </div>
  );
};

export default Project;
