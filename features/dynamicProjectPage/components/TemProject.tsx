"use client";

import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

import intro from "../../../public/images/TemProject/intro.png";
import workshop from "../../../public/images/TemProject/workshop.png";
import docs from "../../../public/images/TemProject/icons/docs-icon.png";
import time from "../../../public/images/TemProject/icons/time-icon.png";
import duration from "../../../public/images/TemProject/icons/duration-icon.png";
import location from "../../../public/images/TemProject/icons/location-icon.png";
import arrow from "../../../public/images/TemProject/icons/arrow-icon.png";

type DescriptionParagraph = { id: number; text: string };

type ProjectDetail = {
  id: number;
  icon: StaticImageData;
  iconAlt: string;
  iconWidth: number;
  iconHeight: number;
  label: string;
  content: string | DescriptionParagraph[];
};

const projectDetails: ProjectDetail[] = [
  {
    id: 1,
    icon: docs,
    iconAlt: "docs-icon",
    iconWidth: 24,
    iconHeight: 24,
    label: "პროექტის აღწერა:",
    content: [
      {
        id: 1,
        text: "გამარჯობა!\n \u00A0ამ პატარა სარეგისტრაციო ფორმის შევსებით რეგისტრირდები ვიზუალური პროგრამირების ვორკშოპზე, რომელსაც უნილაბი, ექსპლორიუმი და აბრეშუმის მუზეუმი მართავენ.",
      },
      {
        id: 2,
        text: "ვორკშოპი ილიაუნის სამეცნიერო პიკნიკის ნაწილია და მასში მონაწილეობა საშუალებას მოგცემს გაეცნო პეპლის სასიცოცხლო ციკლის ეტაპებს, ნახო აბრეშუმის პარკი, ჭია და Scratch-ში თავად დააპროგრამო საციცოცხლო ციკლის ანიმაცია.",
      },
    ],
  },
  {
    id: 2,
    icon: time,
    iconAlt: "time-icon",
    iconWidth: 24,
    iconHeight: 24,
    label: "შეხვედრის დრო:",
    content: "28 სექტემბერი, 12:00, 14:30",
  },
  {
    id: 3,
    icon: duration,
    iconAlt: "duration-icon",
    iconWidth: 24,
    iconHeight: 24,
    label: "პროექტის ხანგრძლივობა:",
    content: "1 საათი და 30 წუთი.",
  },
  {
    id: 4,
    icon: location,
    iconAlt: "location-icon",
    iconWidth: 14,
    iconHeight: 20,
    label: "შეხვედრის ადგილი:",
    content:
      "შეხვედრის ადგილი: უნილაბის კარავი, ილიაუნის T კორპუსი, აუდიტორია T404, ქ. ჩოლოყაშვილის გამზ. N3/5",
  },
];

const mockWorkshops = [
  { id: 1, title: "ვიზუალური პროგრამირების ვორკშოპი 1" },
  { id: 2, title: "ვიზუალური პროგრამირების ვორკშოპი 2" },
  { id: 3, title: "ვიზუალური პროგრამირების ვორკშოპი 3" },
];

type ProjectDetailItemProps = {
  detail: ProjectDetail;
};

const ProjectDetailItem = ({ detail }: ProjectDetailItemProps) => {
  const { content, icon, iconWidth, iconHeight, iconAlt, label } = detail;
  const isDescription = Array.isArray(content);

  return (
    <div className="mb-6">
      <div className="flex gap-2 mb-1.5">
        <div className="w-6 h-6 flex items-center justify-center shrink-0">
          <Image width={iconWidth} height={iconHeight} src={icon} alt={iconAlt} />
        </div>
        <span className="font-sans text-[#666666]">{label}</span>
      </div>

      {isDescription ? (
        <div className="font-sans lg:text-xl max-w-294 w-full">
          {content.map((para, i) => (
            <p key={para.id} className={`${i > 0 ? "mt-6" : ""} whitespace-pre-line`}>
              {para.text}
            </p>
          ))}
        </div>
      ) : (
        <p className="font-sans lg:text-xl max-w-204 w-full">{content as string}</p>
      )}
    </div>
  );
};

const TemProject = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLUListElement>(null);
  const isManualScrolling = useRef(false);

  const totalDots = mockWorkshops.length;
  const [isProjectActive, setIsProjectActive] = useState(false)

  const handleScroll = () => {
    if (!scrollContainerRef.current || isManualScrolling.current) return;

    const { scrollLeft, clientWidth } = scrollContainerRef.current;
    const index = Math.round(scrollLeft / (clientWidth * 0.85));

    if (index >= 0 && index < totalDots && index !== activeIndex) {
      setActiveIndex(index);
    }
  };

  const handleDotClick = (dotIndex: number) => {
    if (!scrollContainerRef.current) return;

    const targetItem = scrollContainerRef.current.children[dotIndex] as HTMLElement;

    if (targetItem) {
      isManualScrolling.current = true;
      setActiveIndex(dotIndex);

      targetItem.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });

      setTimeout(() => {
        isManualScrolling.current = false;
      }, 500);
    }
  };

  return (
    <section className="w-full my-28 md:my-30 lg:my-40">
      <div className="max-w-300 w-full mx-auto px-5 lg:px-8 xl:px-0">
        <article className="">
          {/* Breadcrumbs */}
          <nav aria-label="breadcrumb" className="hidden md:block mb-4">
            <ol className="flex items-center gap-2 font-light font-sans mb-4 p-2">
              <li>პროექტები</li>
              <li aria-hidden="true">
                <Image
                  src="/images/TemProject/arrow-right.svg"
                  alt=""
                  width={7}
                  height={12}
                />
              </li>
              <li>ვორკშოპები</li>
              <li aria-hidden="true">
                <Image
                  src="/images/TemProject/arrow-right.svg"
                  alt=""
                  width={7}
                  height={12}
                />
              </li>
              <li>ვიზუალური პროგრამირების ვორკშოპი</li>
            </ol>
          </nav>

          {/* Image */}
          <div className="relative h-[262px] md:h-[332px] lg:h-[504px] w-full overflow-hidden rounded-2xl border-2 border-black shadow-[-4px_4px_0px_0px_rgba(0,0,0,1)]">
            <Image
              fill
              src={intro}
              alt="ვიზუალური პროგრამირების ვორკშოპი"
              className="object-cover"
              priority
            />
          </div>

          <div className="flex justify-between items-center mt-2 mb-[72px] md:mt-[64px] md:mb-[56px] lg:mt-[16px]">
            <button className="flex gap-2 bg-[#94B0E2] px-3 py-3.5 rounded-full text-sm md:text-[16px] border-2 border-black shadow-[-4px_4px_0px_0px_rgba(0,0,0,1)] font-sans">
              <div className="relative w-5 h-5 shrink-0">
                <Image fill src={workshop} alt="workshop" className="object-contain" sizes="20px" />
              </div>
              <span>ვორკშოპი</span>
            </button>

            <span className="text-[#666666] font-mecomisce md:text-xl lg:text-[32px]">
              12 იან 2026
            </span>
          </div>

          {/* Title */}
          <h2 className="mt-8 mb-5 md:mb-8 lg:mb-12 text-2xl md:text-[32px] lg:text-[64px] leading-tight font-bold font-mecomisce">
            {"ვიზუალური პროგრამირების ვორქშოპი".toUpperCase()}
          </h2>

          <div>
            {projectDetails.map((detail) => (
              <ProjectDetailItem key={detail.id} detail={detail} />
            ))}
          </div>

          {
            isProjectActive && (
              <button className="flex items-center justify-center gap-2 bg-[#F87060] px-3 py-3.5 rounded-full text-xl md:text-2xl border-2 border-black shadow-[-4px_4px_0px_0px_rgba(0,0,0,1)] font-mecomisce mt-[20px] md:mt-[32px] lg:mt-[48px] cursor-pointer w-full md:w-auto hover:bg-[#7196D8]">
                <span>{"დარეგისტრირდი ახლავე".toUpperCase()}</span>
                <div className="w-6 h-6 flex items-center justify-center shrink-0">
                  <Image width={24} height={24} src={arrow} alt="" aria-hidden="true" />
                </div>
              </button>
            )
          }
        </article>

        {/* სლაიდერის სექცია */}
        <article className="flex flex-col my-16 gap-10 xl:my-30">
          <h2 className="font-mecomisce text-[26px] text-center leading-6 md:text-[32px] md:leading-12 xl:text-[48px] xl:leading-14">
            {"სხვა საინტერესო ვორკშოპები".toUpperCase()}
          </h2>

          <div className="w-full relative">
            <ul
              ref={scrollContainerRef}
              onScroll={handleScroll}
              className="flex w-full p-2 gap-4 overflow-x-auto scrollbar-none snap-x snap-mandatory px-4 md:grid md:grid-cols-3 md:gap-5.5 lg:gap-6 md:overflow-x-visible md:px-0"
            >
              {mockWorkshops.map((workshopItem) => (
                <li
                  key={workshopItem.id}
                  className="max-w-70.25 md:max-w-[384px] list-none shrink-0 snap-center md:w-full"
                >
                  <article className="flex flex-col w-full h-full rounded-2xl overflow-hidden bg-white border-2 border-black shadow-[-4px_4px_0px_0px_rgba(0,0,0,1)] transition-shadow hover:shadow-[-4px_4px_0px_0px_rgba(0,0,0,1),-8px_8px_4px_0px_rgba(0,0,0,0.25)]">
                    <div className="relative w-full aspect-4/3 overflow-hidden shrink-0">
                      <Image
                        src="/images/discover-projects/photo-1.png"
                        alt=""
                        fill
                        className="object-cover"
                      />

                      <div className="absolute left-2 top-2 flex h-7.5 w-28.25 items-center justify-center rounded-3xl border-2 border-black bg-[rgba(148,176,226,1)] shadow-[-4px_4px_0px_0px_rgba(0,0,0,1)] lg:left-4 lg:top-4 lg:h-9 lg:w-30.5">
                        <span className="ml-2 text-[16px]">კურსები</span>
                      </div>
                    </div>

                    <div className="flex h-32 w-full flex-col justify-start px-4 md:h-30 lg:h-40 lg:px-6">
                      <div className="mt-4 h-14 w-full bg-white md:mt-3 lg:mt-6 lg:h-16">
                        <h3 className="line-clamp-2 text-[16px] md:text-[14px] lg:text-[20px]">
                          {workshopItem.title}
                        </h3>
                      </div>

                      <div className="mt-4 flex h-6 w-full items-center justify-between bg-white lg:mt-6">
                        <Link
                          href={"/"}
                          className="group  flex items-center text-[14px] lg:leading-6 text-[rgba(77,124,206,1)] shrink-0"
                        >
                          <Image src="/images/discover-projects/view-more.svg" alt="" width={20} height={20} className="block group-hover:hidden" />
                          <Image src="/images/discover-projects/view-more-hover.svg" alt="" width={20} height={20} className="hidden group-hover:block" />
                          <span className="ml-2 group-hover:text-[rgba(148,176,226,1)] transition-colors whitespace-nowrap">
                            დეტალურად
                          </span>
                        </Link>

                        <time className="text-[12px] md:text-[12px] lg:text-[16px] font-light text-[rgba(102,102,102,1)] shrink-0 whitespace-nowrap font-mecomisce ml-2">
                          12 იან 2026
                        </time>
                      </div>
                    </div>
                  </article>
                </li>
              ))}
            </ul>

            {totalDots > 1 && (
              <div className="flex justify-center items-center gap-4 mt-8 md:hidden">
                {Array.from({ length: totalDots }).map((_, index) => {
                  const isActive = activeIndex === index;

                  return (
                    <button
                      key={index}
                      onClick={() => handleDotClick(index)}
                      aria-label={`Go to slide ${index + 1}`}
                      className="w-7 h-7 flex items-center justify-center transition-transform active:scale-95 cursor-pointer bg-transparent border-none p-0"
                    >
                      {isActive ? (
                        <svg width="26" height="26" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M78.5,33.5C87.3,47.2,85.1,66.8,73.5,77.3C61.8,87.8,40.7,89.2,26.5,79.8C12.3,70.5,5,50.3,11.3,35.5C17.7,20.7,37.7,11.2,56.5,13.8C75.3,16.5,69.7,19.8,78.5,33.5Z"
                            fill="#5B84D1"
                          />
                        </svg>
                      ) : (
                        <svg width="26" height="26" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M56.5,13.8C37.7,11.2,17.7,20.7,11.3,35.5C5,50.3,12.3,70.5,26.5,79.8C40.7,89.2,61.8,87.8,73.5,77.3C85.1,66.8,87.3,47.2,78.5,33.5C69.7,19.8,75.3,16.5,56.5,13.8ZM54.5,24.5C65.3,23.5,61.2,25.4,67.2,34.2C74.2,45,72.5,55.5,65.2,62C57.8,68.5,44.7,69.5,35.5,63C26.3,56.5,20.2,46.2,24.3,37.5C28.3,28.8,40.3,25.2,54.5,24.5Z"
                            fill="black"
                          />
                        </svg>
                      )}
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          <div className="mt-6 flex w-full items-center justify-center lg:mt-10">
            <Link
              href="/project"
              className="group font-mecomisce flex gap-4 items-center text-[16px] leading-5 text-black md:text-[20px] lg:text-[24px] hover:text-[rgba(77,124,206,1)]"
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
        </article>
      </div>
    </section>
  );
};

export default TemProject;
