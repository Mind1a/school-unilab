import Image, { type StaticImageData } from "next/image";

import intro from "../../../public/images/TemProject/intro.png";
import workshop from "../../../public/images/TemProject/workshop.png";

import docs from "../../../public/images/TemProject/icons/docs-icon.png";
import time from "../../../public/images/TemProject/icons/time-icon.png";
import duration from "../../../public/images/TemProject/icons/duration-icon.png";
import location from "../../../public/images/TemProject/icons/location-icon.png";
import arrow from "../../../public/images/TemProject/icons/arrow-icon.png";

import ArrowRight from "../../../public/images/TemProject/arrow-right.svg";

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
          <Image
            width={iconWidth}
            height={iconHeight}
            src={icon}
            alt={iconAlt}
          />
        </div>
        <span className="font-sans text-[#666666]">{label}</span>
      </div>

      {isDescription ? (
        <div className="font-sans lg:text-xl max-w-294 w-full">
          {content.map((para, i) => (
            <p
              key={para.id}
              className={`${i > 0 ? "mt-6" : ""} whitespace-pre-line`}
            >
              {para.text}
            </p>
          ))}
        </div>
      ) : (
        <p className="font-sans lg:text-xl max-w-204 w-full">
          {detail.content as string}
        </p>
      )}
    </div>
  );
};
// TemProject
const TemProject = () => {
  return (
    <section className="mx-3.5 xl:mt-37 md:mt-30 mt-25  mb-49.5 md:mx-6 md:mb-16 lg:mx-30 lg:mt-[31.5px] lg:mb-30 flex justify-center items-center">
      <article className="max-w-300 w-full">
        <div>
          {/* Breadcrumbs */}
          <nav aria-label="breadcrumb" className="hidden md:block mb-4 ">
            <ol className="flex items-center gap-2 font-light font-sans mb-4 p-2">
              <li>პროექტები</li>
              <li aria-hidden="true">
                <ArrowRight width={6} height={11} />
              </li>
              <li>ვორკშოპები</li>
              <li aria-hidden="true">
                <ArrowRight width={6} height={11} />
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
        </div>
        {/* Badge + Date */}
        <div className="flex justify-between items-center mt-2 mb-[72px] md:mt-[64px] md:mb-[56px] lg:mt-[16px]">
          <button className="flex gap-2 bg-[#94B0E2] px-3 py-3.5 rounded-full text-sm md:text-[16px] border-2 border-black shadow-[-4px_4px_0px_0px_rgba(0,0,0,1)] font-sans">
            <div className="relative w-5 h-5 shrink-0">
              <Image
                fill
                src={workshop}
                alt="workshop"
                className="object-contain"
                sizes="20px"
              />
            </div>

            <span>ვორკშოპი</span>
          </button>

          <span

            className="text-[#666666] font-mecomisce md:text-xl lg:text-[32px]"
          >
            12 იან 2026
          </span>
        </div>

        {/* Title */}
        <h2 className="mt-8 mb-[20px] md:mb-[32px] lg:mb-[48px] text-2xl md:text-[32px] lg:text-[64px] leading-tight font-bold font-mecomisce">
          {"ვიზუალური პროგრამირების ვორქშოპი".toUpperCase()}
        </h2>

        {/* Project Description */}
        <div>
          {projectDetails.map((detail) => (
            <ProjectDetailItem key={detail.id} detail={detail} />
          ))}
        </div>

        <button
          className="flex items-center justify-center gap-2 bg-[#F87060] px-3 py-3.5 rounded-full text-xl md:text-2xl border-2 border-black
         shadow-[-4px_4px_0px_0px_rgba(0,0,0,1)] font-mecomisce mt-[20px] md:mt-[32px] lg:mt-[48px] cursor-pointer w-full md:w-auto hover:bg-[#7196D8] "
        >
          <span>{"დარეგისტრირდი ახლავე".toUpperCase()}</span>
          <div className="w-6 h-6 flex items-center justify-center shrink-0">
            <Image
              width={24}
              height={24}
              src={arrow}
              alt=""
              aria-hidden="true"
            />
          </div>
        </button>
      </article>
    </section>
  );
};

export default TemProject;
