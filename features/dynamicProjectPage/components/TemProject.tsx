import Image from "next/image";
import intro from "../../../public/images/TemProject/intro.png";
import workshop from "../../../public/images/TemProject/workshop.png";

import docs from "../../../public/images/TemProject/icons/docs-icon.png";
import time from "../../../public/images/TemProject/icons/time-icon.png";
import duration from "../../../public/images/TemProject/icons/duration-icon.png";
import location from "../../../public/images/TemProject/icons/location-icon.png";
import arrow from "../../../public/images/TemProject/icons/arrow-icon.png";

const TemProject = () => {
  return (
    <section className="mx-[14px] mt-2 mb-[198px] md:mx-[24px] md:mt-0 md:mb-[64px] lg:mx-[120px] lg:mt-[31.5px] lg:mb-[120px] flex justify-center items-center">
      <article className="max-w-[1200px] w-full">
        <div>
          {/* Breadcrumbs */}
          <nav aria-label="breadcrumb" className="hidden md:block mb-4 ">
            <ol className="flex items-center gap-2 text-sm font-light font-sans mb-4 p-2">
              <li>პროექტები</li>
              <li>&gt;</li>
              <li>ვორკშოპები</li>
              <li>&gt;</li>
              <li>ვიზუალური პროგრამირების ვორკშოპი</li>
            </ol>
          </nav>

          {/* Image */}
          <div className="relative h-[262px] md:h-[332px] lg:h-[500px] w-full overflow-hidden rounded-2xl border-2 border-black shadow-[-4px_4px_0px_0px_rgba(0,0,0,1)]">
            <Image
              fill
              src={intro}
              alt="ვიზუალური პროგრამირების ვორკშოპი"
              className="object-cover"
            />
          </div>
        </div>

        {/* Badge + Date */}
        <div className="flex justify-between items-center mt-2 mb-[72px] md:mt-[64px] md:mb-[56px] lg:mt-[16px]">
          <button className="flex gap-2 bg-[#94B0E2] px-3 py-3.5 rounded-full text-sm border-2 border-black shadow-[-4px_4px_0px_0px_rgba(0,0,0,1)] font-sans">
            <Image width={20} height={20} src={workshop} alt="workshop" />
            <span>ვორკშოპი</span>
          </button>

          <time
            dateTime="2026-01-12"
            className="text-[#666666] font-mecomisce md:text-xl lg:text-[32px]"
          >
            12 იან 2026
          </time>
        </div>

        {/* Title */}
        <h1 className="mt-8 mb-[20px] md:mb-[32px] lg:mb-[48px] text-2xl md:text-[32px] lg:text-[64px] leading-tight font-bold font-mecomisce">
          ვიზუალური პროგრამირების ვორქშოპი
        </h1>

        {/* Project Description */}
        <div>
          {/* project Info */}
          <div className="mb-6">
            <div className="flex gap-2  mb-1.5">
              <div className="w-6 h-6 flex items-center justify-center shrink-0">
                <Image width={24} height={24} src={docs} alt="docs-icon" />
              </div>
              <span className="font-sans text-[#666666]">პროექტის აღწერა:</span>
            </div>

            <div className="font-sans lg:text-xl max-w-[1176px] w-full">
              <p>
                გამარჯობა! <br /> {"\u00A0"}ამ პატარა სარეგისტრაციო ფორმის
                შევსებით რეგისტრირდები ვიზუალური პროგრამირების ვორკშოპზე,
                რომელსაც უნილაბი, ექსპლორიუმი და აბრეშუმის მუზეუმი მართავენ.
              </p>
              <p className="mt-6">
                ვორკშოპი ილიაუნის სამეცნიერო პიკნიკის ნაწილია და მასში
                მონაწილეობა საშუალებას მოგცემს გაეცნო პეპლის სასიცოცხლო ციკლის
                ეტაპებს, ნახო აბრეშუმის პარკი, ჭია და Scratch-ში თავად
                დააპროგრამო საციცოცხლო ციკლის ანიმაცია.
              </p>
            </div>
          </div>

          {/* project Time */}
          <div className="mb-[24px]">
            <div className="flex gap-2">
              <div className="w-6 h-6 flex items-center justify-center shrink-0">
                <Image width={24} height={24} src={time} alt="time-icon" />
              </div>
              <span className="font-sans text-[#666666]">შეხვედრის დრო:</span>
            </div>
            <p className="font-sans lg:text-xl">28 სექტემბერი, 12:00, 14:30</p>
          </div>

          {/* project Duration */}
          <div className="mb-[24px]">
            <div className="flex gap-2 mb-1.5">
              <div className="w-6 h-6 flex items-center justify-center shrink-0">
                <Image
                  width={24}
                  height={24}
                  src={duration}
                  alt="duration-icon"
                />
              </div>
              <span className="font-sans text-[#666666]">
                პროექტის ხანგრძლივობა:
              </span>
            </div>
            <p className="font-sans lg:text-xl"> 1 საათი და 30 წუთი.</p>
          </div>

          {/* project Location*/}
          <div>
            <div className="flex gap-2">
              <div className="w-6 h-6 flex items-center justify-center shrink-0">
                <Image
                  width={14}
                  height={20}
                  src={location}
                  alt="location-icon"
                />
              </div>
              <span className="font-sans text-[#666666]">
                შეხვედრის ადგილი:
              </span>
            </div>
            <p className="font-sans lg:text-xl max-w-[816px] w-full">
              შეხვედრის ადგილი: უნილაბის კარავი, ილიაუნის T კორპუსი, აუდიტორია
              T404, ქ. ჩოლოყაშვილის გამზ. N3/5
            </p>
          </div>
        </div>
        <button
          className="flex items-center gap-2 bg-[#F87060] px-3 py-3.5 rounded-full text-xl md:text-2xl border-2 border-black
         shadow-[-4px_4px_0px_0px_rgba(0,0,0,1)] font-mecomisce mt-[20px] md:mt-[32px] lg:mt-[48px]"
        >
          <span>დარეგისტრირდი ახლავე</span>
          <div className="w-6 h-6 flex items-center justify-center shrink-0">
            <Image width={24} height={24} src={arrow} alt="arrow" />
          </div>
        </button>
      </article>
    </section>
  );
};

export default TemProject;
