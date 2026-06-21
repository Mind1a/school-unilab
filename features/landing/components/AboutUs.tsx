"use client";
import { useState } from "react";
import Image from "next/image";

const AboutUs = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [enableClamp, setEnableClamp] = useState(true);

  return (
    <section className="flex w-full min-w-0 justify-center overflow-x-clip p-[72px_16px_56px] md:p-[72px_75px] lg:p-[80px_50px_144px]">
      <div
        className={`relative z-10 flex min-h-72 w-full max-w-171 min-w-0 items-center justify-center border-4 bg-[#7196D8] p-6 transition-all duration-500 ease-in-out md:min-h-[359.99px] sm:p-[32px_80px] lg:min-h-112 lg:max-w-275 lg:p-[56px_0px] shadow-[-8px_-8px_4px_0_rgba(0,0,0,0.1)]`}
      >
        <Image
          src={"/images/landingImages/aboutUsCorner.svg"}
          alt="about us corner"
          width={170}
          height={60.5}
          className="absolute -right-6.25 -top-6 hidden lg:block"
        />

        <Image
          src={"/images/landingImages/aboutUsCornerSm.svg"}
          alt="about us corner"
          width={90}
          height={30.76}
          className="absolute -right-4.75 top-[-25.5px] lg:hidden"
        />

        <Image
          src={"/images/landingImages/paperClips.svg"}
          alt="papper clips"
          width={195.18}
          height={160}
          className="absolute lg:right-33 lg:-top-17 lg:w-[195.18px] md:w-30 w-[97.59px] md:-top-10.75 -top-8.75 right-15"
        />

        <Image
          src={"/images/landingImages/keyChain.svg"}
          alt="key chain"
          width={262.7}
          height={360}
          className="absolute right-33 lg:top-7 top-0 left-[-49.73px] hidden sm:block lg:w-[262.70px] w-[150.95px]"
        />

        <div className="flex w-full min-w-0 max-w-191.5 flex-col gap-4 lg:gap-6">
          <h2 className="lg:text-[40px] sm:text-[32px] text-[20px] lg:leading-16 leading-12 font-bold font-mecomisce">
            {"ჩვენ შესახებ".toUpperCase()}
          </h2>

          <div
            id="about-us-text"
            className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "max-h-250" : "max-h-37.5 md:max-h-45 lg:max-h-45"
              }`}
          >
            <p
              className={`lg:text-[20px] text-[16px] lg:leading-6 leading-5 ${!isOpen && enableClamp
                ? "line-clamp-6 md:line-clamp-7 lg:line-clamp-6"
                : ""
                }`}
            >
              ოდესმე გიფიქრია პატარა ოთახზე, რომელში შესვლისას დროსა და სივრცეში
              იკარგები და საშუალება გეძლევა მომავლის გარკვეული ნაწილი დაინახო?
              ისეთი იმპულსები მიიღო, რომლებიც სუპერძალებს შეგძენდა? <br />
              მოგესალმებით უნილაბში, რომელიც საშუალებას მოგცემს საკუთარ თავში
              ახალი <br />
              შესაძლებლობები, ინტერესები და უნარები აღმოაჩინო, შენ ირგვლივ
              სამყაროს განვითარების ტემპს ყურადღება არ მიაქციო და თავს ისე
              შემოუძახო, რომ ხვალ უკვე დროს გაუსწრო და შენს გუშინდელ თავზე
              სინათლის წლით წინ იყო… <br />
              <br />
              მოგესალმებით უნილაბში, რომელიც საშუალებას მოგცემს საკუთარ თავში
              ახალი შესაძლებლობები, ინტერესები და უნარები აღმოაჩინო, შენ ირგვლივ
              სამყაროს განვითარების ტემპს ყურადღება არ მიაქციო და თავს ისე
              შემოუძახო, რომ ხვალ უკვე დროს გაუსწრო და შენს გუშინდელ თავზე
              სინათლის წლით წინ იყო…
            </p>
          </div>

          <button
            onClick={() => {
              if (isOpen) {
                setIsOpen(false);
                setTimeout(() => setEnableClamp(true), 500);
              } else {
                setEnableClamp(false);
                setIsOpen(true);
              }
            }}
            aria-expanded={isOpen}
            aria-controls="about-us-text"
            className="flex w-full max-w-77.5 cursor-pointer items-center justify-center gap-2 self-center rounded-[64px] border-2 bg-[#94B0E2] p-[12px_24px] text-[20px] leading-6 shadow-[-8px_8px_4px_0_rgba(0,0,0,0.1),-2px_2px_0px_0px_black] duration-300 ease-in-out hover:bg-[#B8CBEB] md:max-w-131 md:self-auto sm:p-[16px_24px] lg:max-w-54 lg:text-[24px] font-mecomisce">
            {isOpen ? "აკეცვა".toUpperCase() : "გაიგე მეტი".toUpperCase()}
            <div
              className={`transition-transform duration-300 flex items-center ${isOpen ? "rotate-180" : ""}`}
            >
              <Image
                alt="more"
                src={"/images/landingImages/moreArrow.svg"}
                width={12.75}
                height={16.96}
              />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
