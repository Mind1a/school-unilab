"use client";

import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { projectFilters } from "./filters";

type ProjectActiveBtnProps = {
  onFilterClick: () => void;
};

const ProjectActiveBtn = ({ onFilterClick }: ProjectActiveBtnProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [hoveredFilter, setHoveredFilter] = useState<string | null>(null);

  useEffect(() => {
    const categoriesFromUrl = searchParams.getAll("category");

    setSelectedFilters(categoriesFromUrl);
  }, [searchParams]);

  const toggleFilter = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());

    const currentCategories = params.getAll("category");
    const isAlreadySelected = currentCategories.includes(value);

    params.delete("category");

    const nextCategories = isAlreadySelected
      ? currentCategories.filter((item) => item !== value)
      : [...currentCategories, value];

    nextCategories.forEach((category) => {
      params.append("category", category);
    });

    const queryString = params.toString();

    router.push(queryString ? `${pathname}?${queryString}` : pathname, {
      scroll: false,
    });

    setSelectedFilters(nextCategories);
  };

  return (
    <>
      {/* Mobile Filter Panel */}
      <div className="flex h-211 w-full max-w-89.5 flex-col bg-white px-4 py-4 md:hidden">
        <div className="flex items-center justify-between">
          <h3 className="font-mecomisce text-[24px] leading-6">ფილტრი</h3>

          <button
            type="button"
            aria-label="Close filter"
            onClick={onFilterClick}
            className="flex h-12 w-12 items-center justify-center"
          >
            <Image
              src="/images/project/right-arrow.svg"
              alt=""
              width={48}
              height={48}
            />
          </button>
        </div>

        <Image
          src="/images/project/line.svg"
          alt=""
          width={358}
          height={1}
          className="mt-4"
        />

        <div className="mt-8 flex flex-col gap-7">
          {projectFilters.map((filter) => {
            const isSelected = selectedFilters.includes(filter.value);
            const isHovered = hoveredFilter === filter.value;

            const iconSrc = isSelected
              ? filter.icons.checked
              : isHovered
                ? filter.icons.hovered
                : filter.icons.default;

            return (
              <button
                key={filter.id}
                type="button"
                onClick={() => toggleFilter(filter.value)}
                onMouseEnter={() => setHoveredFilter(filter.value)}
                onMouseLeave={() => setHoveredFilter(null)}
                className="flex items-center gap-4"
              >
                <Image src={iconSrc} alt="" width={24} height={24} />

                <span
                  className={`text-[20px] font-light ${
                    isSelected || isHovered
                      ? "text-[rgba(77,124,206,1)]"
                      : "text-black"
                  }`}
                >
                  {filter.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Tablet/Desktop Header */}
      <div className="hidden w-full items-center justify-between md:flex md:h-12 md:max-w-196.25 md:justify-start lg:h-18 lg:max-w-300">
        <h2 className="order-1 font-mecomisce text-[24px] leading-6 md:order-2 md:ml-4.75 md:text-[32px] md:leading-12 lg:ml-8.25 lg:text-[48px] lg:leading-14">
          <span>{"შეარჩიე შენთვის საინტერესო პროექტი".toUpperCase()}</span>
        </h2>

        <button
          type="button"
          aria-label="Filter projects"
          onClick={onFilterClick}
          className="group order-2 flex h-12 w-12 shrink-0 cursor-pointer items-center justify-center rounded-[64px] border-2 border-black bg-white shadow-[-4px_4px_0px_0px_rgba(0,0,0,1),-8px_8px_4px_0px_rgba(0,0,0,0.25)] hover:border-[rgba(77,124,206,1)] hover:shadow-[-4px_4px_0px_0px_rgba(77,124,206,1)] md:order-1 lg:h-14.5 lg:w-45.75"
        >
          <span className="mr-2 hidden font-mecomisce text-[24px] leading-5 group-hover:text-[rgba(77,124,206,1)] lg:inline">
            ფილტრი
          </span>

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

      {/* Tablet/Desktop Filter Panel */}
      <div className="hidden rounded-2xl border-2 border-black shadow-[-4px_4px_0px_0px_rgba(0,0,0,1)] md:mt-3 md:flex md:h-38 md:w-full md:max-w-196.5 md:flex-wrap md:content-center md:items-center md:gap-x-8 md:gap-y-4 md:px-6 xl:mt-4 xl:h-22 xl:max-w-300 xl:flex-nowrap xl:justify-between xl:gap-10 xl:px-10">
        {projectFilters.map((filter) => {
          const isSelected = selectedFilters.includes(filter.value);
          const isHovered = hoveredFilter === filter.value;

          const iconSrc = isSelected
            ? filter.icons.checked
            : isHovered
              ? filter.icons.hovered
              : filter.icons.default;

          return (
            <button
              key={filter.id}
              type="button"
              onClick={() => toggleFilter(filter.value)}
              onMouseEnter={() => setHoveredFilter(filter.value)}
              onMouseLeave={() => setHoveredFilter(null)}
              className="flex cursor-pointer items-center gap-3"
            >
              <Image src={iconSrc} alt="" width={24} height={24} />

              <span
                className={`text-[20px] font-light ${
                  isSelected || isHovered
                    ? "text-[rgba(77,124,206,1)]"
                    : "text-black"
                }`}
              >
                {filter.label}
              </span>
            </button>
          );
        })}
      </div>
    </>
  );
};

export default ProjectActiveBtn;
