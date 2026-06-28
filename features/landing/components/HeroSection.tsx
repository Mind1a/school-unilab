import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className=" xl:mt-37 my-18 lg:my-40 md:mt-30 mt-25">
      <div className="  max-w-360 mx-auto py-6 border xl:py-20 border-[#EFEFEF]  w-full bg-[linear-gradient(#e5e7eb_1px,transparent_1px),linear-gradient(to_right,#e5e7eb_1px,transparent_1px)]
    bg-size-[64px_64px] rounded-2xl">
        <div className=" relative  flex flex-col max-w-300  md:px-6 px-4 xl:px-0 mx-auto w-full md:flex-row md:items-center sm:gap-4 gap-2 md:gap-12">
          <div className="hidden xl:block absolute inset-0 pointer-events-none z-0">

            <div className="absolute -top-18 right-4">
              <Image
                src="/images/heroSection/svgs/GameConsole.svg"
                alt="კონსოლის სურათი"
                width={120}
                height={95}
              />
            </div>

            <div className="absolute top-93 -translate-y-1/2 right-4">
              <Image
                src="/images/heroSection/svgs/Smiley.svg"
                alt="ღიმილის სურათი"
                width={100}
                height={100}
              />
            </div>

            <div className="absolute -bottom-12 right-10">
              <Image
                src="/images/heroSection/svgs/Headphones.svg"
                alt="ყურსასმენების სურათი"
                width={130}
                height={120}
              />
            </div>

          </div>
          <Image
            src="/images/heroSection/pngs/Banner.png"
            alt="Visual Programming Workshop"
            width={420}
            height={280}
            className="xl:w-2xl xl:h-125 w-full  xl:object-center"
            priority
          />

          <div className="w-full gap-4 flex  lg:gap-8  flex-col md:gap-12">
            <div className="flex w-full lg:gap-2 flex-col sm:gap-4 md:gap-4 gap-2">
              <h2 className="font-mecomisce
             text-[24px]
            leading-6
            max-w-89.5
            md:text-[24px]
            md:leading-6
            xl:text-[48px]
            xl:leading-14
            ">
                {
                  "ვიზუალური პროგრამირების ვორკშოპი".toUpperCase()
                }
              </h2>
              <p className="text-[16px]
             leading-5
              text-start
               max-w-89.5
               md:text-[16px]
              md:leading-5
              xl:text-[24px]
              xl:leading-10
               xl:max-w-119
             text-[#666666]

               ">
                თუ ხარ IV, V ან VI კლასის მოსწავლე, უნილაბი სახალისო ვორკშოპს გთავაზობს.
              </p>

            </div>
            <Link href={'/project'} className="w-full text-[20px]
             justify-center
              gap-2 py-3
               leading-6
                font-mecomisce
                  bg-[#F87060] border-2
                   border-black rounded-[64px]
                   xl:w-73.75
                   md:py-2.5
                   xl:py-4.5
                    shadow-[-4px_8px_2px_0px_rgba(0,0,0,0.15),-4px_4px_0px_0px_#000] transition-all duration-100 hover:-translate-x-0.5 hover:translate-y-0.5 hover:shadow-[-2px_6px_2px_0px_rgba(0,0,0,0.15),-2px_2px_0px_0px_#000] active:-translate-x-1 active:translate-y-1.5  cursor-pointer   flex hover:bg-[#7196D8] ">
              <span>
                {"გაეცანი პროექტს".toUpperCase()}
              </span>
              <Image
                src="/images/heroSection/svgs/Arrow.svg"
                alt="ისარი ლოგო"
                width={24}
                height={24}
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}


