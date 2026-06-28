"use client";

import Image from "next/image";
import {  useEffect, useState } from "react";
import Pagination from "./Pagination";
import ProjectActiveBtn from "./ProjectActiveBtn";
import { projectsData } from "./data";

const Project = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const toggleFilter = () => {
    setIsFilterOpen((prev) => !prev);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <div className={`max-w-300 px-4 md:px-6 lg:px-8 xl:px-0 mb-26 mx-auto w-full flex flex-col mt-30  items-start xl:mt-40`}>
      {isFilterOpen ? (
        <ProjectActiveBtn onFilterClick={toggleFilter} />
      ) : (
          <div className="flex items-center justify-between md:justify-start w-full">
            <h2 className="order-1  md:text-nowrap font-mecomisce text-[24px] leading-6 md:order-2 md:ml-4.75 md:text-[32px] md:leading-12 lg:ml-8.25 xl:text-[48px] lg:leading-14">
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
        className={` w-full flex-col items-center mt-9 md:mt-6 lg:mt-14 ${
          isFilterOpen ? "hidden md:flex" : "flex"
        }`}
      >
        <Pagination projects={projectsData} />
      </div>
    </div>
  );
};

export default Project;
