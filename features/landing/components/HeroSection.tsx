import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="max-h-161 h-full w-full overflow-hidden bg-[url('/images/heroSection/pngs/HeroBG.png')] flex items-center">
      <div className="relative flex mx-auto">
        <div className="absolute top-6 right-8 w-12 h-12 opacity-90 rotate-[-10deg]">
          <Image
            src={"/images/heroSection/svgs/GameConsole.svg"}
            alt="ყურსასმენების სურათი"
            width={144}
            height={137}
          />
        </div>
        <div className="absolute top-1/2 right-6 -translate-y-1/2 w-11 h-11 opacity-90 rotate-[8deg]">
          <Image
            src={"/images/heroSection/svgs/Smiley.svg"}
            alt="ყურსასმენების სურათი"
            width={144}
            height={137}
          />
        </div>
        <div className="absolute bottom-6 right-10 w-12 h-12 opacity-90 rotate-[-6deg]">
          <Image
            src={"/images/heroSection/svgs/Headphones.svg"}
            alt="ყურსასმენების სურათი"
            width={144}
            height={137}
          />
        </div>
        <div className="relative z-10 w-full max-w-5xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center gap-10 md:gap-16">
          {/* Left: Image with dashed connector */}
          <div className="relative flex-shrink-0 w-full max-w-[380px]">
            <div className="rounded-2xl overflow-hidden">
              <Image
                src="/images/heroSection/pngs/Banner.png" // Replace with your actual image path
                alt="Visual Programming Workshop"
                width={420}
                height={280}
                className="object-contain w-full"
                priority
              />
            </div>

            {/* Dashed horizontal connector line pointing right */}
            <div className="hidden md:block absolute top-1/2 -right-[68px] -translate-y-1/2 w-16">
              <svg
                width="64"
                height="20"
                viewBox="0 0 64 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  x1="0"
                  y1="10"
                  x2="56"
                  y2="10"
                  stroke="#3B8BF5"
                  strokeWidth="1.5"
                  strokeDasharray="6 4"
                />
                {/* Arrow tip */}
                <polyline
                  points="50,4 60,10 50,16"
                  fill="none"
                  stroke="#3B8BF5"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
                {/* Dot at start */}
                <circle cx="2" cy="10" r="3" fill="#3B8BF5" />
              </svg>
            </div>
          </div>

          {/* Right: Text content */}
          <div className="flex flex-col gap-5 text-white max-w-[380px]">
            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-extrabold leading-tight tracking-tight">
              ვიზუალური
              <br />
              პროგრამირების
              <br />
              ვორქშოფი
            </h1>

            {/* Subtitle */}
            <p className="text-sm md:text-base text-[#A0B4D0] leading-relaxed">
              თუ ხარ 14 და 14-კლასის მოსწავლე,
              <br />
              უნიკალი სასხალისო ვორქშოფის
              <br />
              გთავაზობს.
            </p>

            {/* CTA Button */}
            <Link
              href="#"
              className="inline-flex items-center gap-2 self-start bg-[#E8402A] hover:bg-[#D03520] active:bg-[#B82C18] text-white text-sm font-bold px-6 py-3 rounded-full transition-colors duration-200 shadow-[0_0_20px_rgba(232,64,42,0.4)] hover:shadow-[0_0_28px_rgba(232,64,42,0.6)]"
            >
              გაეცანი პროექტს
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="white"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
