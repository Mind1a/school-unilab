"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { type ProjectData } from "./data";

type PaginationProps = {
  projects: ProjectData[];
};

type PaginationItem = number | "start-ellipsis" | "end-ellipsis";

const Pagination = ({ projects }: PaginationProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(7);

  useEffect(() => {
    const updateItemsPerPage = () => {
      const isTabletOrDesktop = window.innerWidth >= 768;

      setItemsPerPage(isTabletOrDesktop ? 15 : 7);
    };

    updateItemsPerPage();

    window.addEventListener("resize", updateItemsPerPage);

    return () => {
      window.removeEventListener("resize", updateItemsPerPage);
    };
  }, []);

  const totalPages = Math.ceil(projects.length / itemsPerPage);

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages || 1);
    }
  }, [currentPage, totalPages]);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentProjects = projects.slice(startIndex, endIndex);

  const goToPreviousPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const goToNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const getPaginationItems = (): PaginationItem[] => {
    if (totalPages <= 5) {
      return Array.from({ length: totalPages }, (_, index) => index + 1);
    }

    if (currentPage <= 3) {
      return [1, 2, 3, "end-ellipsis", totalPages];
    }

    if (currentPage >= totalPages - 2) {
      return [1, "start-ellipsis", totalPages - 2, totalPages - 1, totalPages];
    }

    return [
      currentPage - 2,
      currentPage - 1,
      currentPage,
      "end-ellipsis",
      totalPages,
    ];
  };

  return (
    <div className="w-full">
      <div className="mx-auto w-full max-w-89.5 md:max-w-196.25 lg:max-w-300">
        <ul className="grid w-full grid-cols-1 gap-4 md:grid-cols-3 md:gap-5.5 lg:gap-6">
          {currentProjects.map((project) => (
            <Card key={project.id} project={project} />
          ))}
        </ul>
      </div>

      {totalPages > 1 && (
        <div className="mt-8 flex items-center justify-center gap-0 md:mt-6 md:gap-2 lg:mt-12">
          <button
            type="button"
            onClick={goToPreviousPage}
            disabled={currentPage === 1}
            className="flex items-center justify-center"
          >
            <Image
              src="/images/project/left-arrow.svg"
              alt="Previous"
              width={48}
              height={48}
              style={{
                filter:
                  currentPage === 1
                    ? "brightness(0) saturate(100%) invert(75%)"
                    : "none",
              }}
            />
          </button>

          {getPaginationItems().map((item) => {
            if (typeof item !== "number") {
              return (
                <span
                  key={item}
                  className="flex h-10 w-10 items-center justify-center text-xl font-bold"
                  aria-hidden="true"
                >
                  ...
                </span>
              );
            }

            const page = item;
            const isActive = currentPage === page;

            return (
              <button
                key={page}
                type="button"
                onClick={() => setCurrentPage(page)}
                className={`flex h-10 w-10 items-center justify-center font-mecomisce text-[24px] md:text-[32px] ${
                  isActive ? "text-[rgba(77,124,206,1)]" : "text-black"
                }`}
              >
                {page}
              </button>
            );
          })}

          <button
            type="button"
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
            className="flex items-center justify-center"
          >
            <Image
              src="/images/project/right-arrow.svg"
              alt="Next"
              width={48}
              height={48}
              style={{
                filter:
                  currentPage === totalPages
                    ? "brightness(0) saturate(100%) invert(75%)"
                    : "none",
              }}
            />
          </button>
        </div>
      )}
    </div>
  );
};

export default Pagination;

const Card = ({ project }: { project: ProjectData }) => {
  return (
    <li className="h-72 w-full md:h-65 lg:h-90">
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
