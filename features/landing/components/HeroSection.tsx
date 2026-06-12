import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="max-w-97.5 max-h-[485.39px] md:max-w-208.25 md:max-h-[350.74px] lg:max-h-161 lg:max-w-360 mx-auto h-full w-full overflow-hidden bg-[url('/images/heroSection/pngs/HeroBG.png')] flex items-center lg:relative border-2 border-[#E5E5E5] md:rounded-lg lg:rounded-2xl rounded-none">
      {/* //! Decorative Images */}

      <div className="lg:block hidden absolute top-2 right-30 max-w-37 max-h-37 h-full w-full">
        <Image
          src={"/images/heroSection/svgs/GameConsole.svg"}
          alt="კონსოლის სურათი"
          width={132}
          height={105}
        />
      </div>
      <div className="lg:block hidden absolute right-30.5 top-97 max-w-[121.79px] max-h-30.5 h-full w-full">
        <Image
          src={"/images/heroSection/svgs/Smiley.svg"}
          alt="ღიმილის სურათი"
          width={106}
          height={106}
        />
      </div>
      <div className="lg:block hidden absolute top-126 right-30.5 w-full h-full max-w-40 max-h-40">
        <Image
          src={"/images/heroSection/svgs/Headphones.svg"}
          alt="ყურსასმენების სურათი"
          width={144}
          height={137}
        />
      </div>

      <div className="flex flex-col gap-2 md:gap-12 md:flex-row mx-auto w-full max-w-89.5 max-h-[437.39px] md:max-w-196.25 md:max-h-[286.74px] lg:max-h-126 lg:max-w-300 items-center">
        {/*//! Left: Image */}
        <div className="rounded-2xl overflow-hidden max-w-89.5 md:max-w-96 lg:max-w-169 w-full">
          <Image
            src="/images/heroSection/pngs/Banner.png" // Replace with your actual image path
            alt="Visual Programming Workshop"
            width={420}
            height={280}
            className="object-contain w-full"
            priority
          />
        </div>

        {/* //!Right: Text content */}
        <div className="flex flex-col lg:max-w-119 lg:max-h-102.5 md:max-w-88.25 md:max-h-53.5 max-w-89.5 max-h-40.5 h-full w-full md:gap-12 gap-4">
          <div className="w-full h-full max-h-24 md:max-h-31 lg:max-h-76 flex flex-col md:gap-4 gap-2">
            <h1 className="font-mecomisce text-2xl leading-6 lg:text-5xl lg:leading-14">
              {"ვიზუალური პროგრამირების ვორქშოფი".toUpperCase()}
            </h1>

            <p className="font-noto text-base leading-5 lg:text-2xl lg:leading-10 text-[#666666] max-w-sm lg:max-w-md">
              თუ ხარ IV, V ან VI კლასის მოსწავლე, უნილაბი სახალისო ვორკშოპს{" "}
              <br className="hidden md:block lg:hidden" />
              გთავაზობს.
            </p>
          </div>

          {/* //!Button */}
          <Link href="/project">
            <button className="items-center gap-2 lg:pl-6 lg:py-4 md:pl-17.75 md:py-2 pl-[73.5px] py-3  bg-[#F87060] border-2 border-black rounded-[64px] shadow-[-4px_8px_2px_0px_rgba(0,0,0,0.15),-4px_4px_0px_0px_#000] transition-all duration-100 hover:-translate-x-0.5 hover:translate-y-0.5 hover:shadow-[-2px_6px_2px_0px_rgba(0,0,0,0.15),-2px_2px_0px_0px_#000] active:-translate-x-1 active:translate-y-1.5 active:shadow-none cursor-pointer lg:max-w-73.75 md:max-w-88.25 max-w-89.5 h-full w-full flex ">
              <span className="font-mecomisce text-xl leading-6 lg:text-2xl">
                {"გაეცანი პროექტს".toUpperCase()}
              </span>
              <Image
                src="/images/heroSection/svgs/Arrow.svg"
                alt="ისარი ლოგო"
                width={24}
                height={24}
              />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
