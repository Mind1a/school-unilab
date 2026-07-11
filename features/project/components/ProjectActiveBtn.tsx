"use client";

import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {useState
} from "react";
import { projectFilters } from "./filters";
import { useUiStore } from "@/store/useUiStore";



const ProjectActiveBtn = () => {
  const {toggleFilter} = useUiStore()
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [hoveredFilter, setHoveredFilter] = useState<string | null>(null);



  const selectedFilters = searchParams.getAll("category");

  const onFilterClick = (value: string) => {
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
  };

  return (
    <div className="w-full ">
      {/* Mobile Filter Panel */}
      <div className="flex  h-211 fixed min-h-screen overflow-y-auto z-50 left-0 top-20   w-full  flex-col bg-white px-4 py-4 md:hidden">
        <div className="flex items-center  justify-between">
          <h3 className="font-mecomisce text-[24px] leading-6">ფილტრი</h3>

          <button
            type="button"
            aria-label="Close filter"
            onClick={() => toggleFilter(false)}
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

        <div className="mt-8 flex  flex-col gap-7">
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
                onClick={() => onFilterClick(filter.value)}
                onMouseEnter={() => setHoveredFilter(filter.value)}
                onMouseLeave={() => setHoveredFilter(null)}
                className="flex items-center gap-4"
              >
                <Image src={iconSrc} alt="" width={24} height={24} />

                <span
                  className={`text-[20px] font-light ${isSelected || isHovered
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
      <div className="hidden md:flex  w-full">
        <h2 className="order-1 text-nowrap xl:pl-6 font-mecomisce md:order-2 md:text-[32px] md:leading-12 xl:text-[48px] xl:leading-14">
          {"შეარჩიე შენთვის საინტერესო პროექტი".toUpperCase()}
        </h2>

        <button
          type="button"
          aria-label="Filter projects"
          onClick={() => toggleFilter(false)}
          className="group order-2 flex  shrink-0 cursor-pointer items-center justify-center rounded-[64px] border-2 border-black bg-white shadow-[-4px_4px_0px_0px_rgba(0,0,0,1),-8px_8px_4px_0px_rgba(0,0,0,0.25)] hover:border-[rgba(77,124,206,1)] hover:shadow-[-4px_4px_0px_0px_rgba(77,124,206,1)] md:order-1  xl:px-6"
        >
          <span className="mr-2 hidden font-mecomisce text-[24px]  leading-5 group-hover:text-[rgba(77,124,206,1)] lg:inline xl:text-[24px] xl:leading-6">
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

      <div className="hidden rounded-2xl  w-full  border-2 border-black shadow-[-4px_4px_0px_0px_rgba(0,0,0,1)] md:mt-3 md:flex md:h-38  md:flex-wrap md:content-center md:items-center md:gap-x-8 md:gap-y-4 md:px-6 xl:mt-4 xl:h-22  xl:flex-nowrap xl:justify-between xl:gap-10 xl:px-10 ">
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
              onClick={() => onFilterClick(filter.value)}
              onMouseEnter={() => setHoveredFilter(filter.value)}
              onMouseLeave={() => setHoveredFilter(null)}
              className="flex cursor-pointer items-center gap-3"
            >
              <Image src={iconSrc} alt="" width={24} height={24} />

              <span
                className={`text-[20px] font-light ${isSelected || isHovered
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
  );
};

export default ProjectActiveBtn;
