import Image from "next/image";

const logos = [
  {
    src: "/images/stem1.svg",
    alt: "Stem",
  },
  {
    src: "/images/explorium1.svg",
    alt: "Explorium",
  },
  {
    src: "/images/logo1.svg",
    alt: "Iliauni",
  },
];

const Partner = () => {
  return (
    <section className="w-full bg-white py-16 flex justify-center">
      <div className="w-full max-w-360 mx-auto px-4">
        <h2 className=" text-center text-[20px] md:text-[24px] lg:text-[32px] font-semibold mb-8">
          ჩვენი პარტნიორები
        </h2>

        <div className="flex items-center justify-center md:justify-between lg:justify-center gap-2 md:gap-0">
          {logos.map((logo) => (
            <div
              key={logo.alt}
              className="flex items-center justify-center w-28 h-28 md:w-55 md:h-65"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={155}
                height={160}
                className="object-contain"
              />
            </div>
          ))}

          {/* Tablet Only */}
          <div className="hidden md:flex lg:hidden items-center justify-center w-55 h-65">
            <Image
              src="/images/halfpathgroup.svg"
              alt="Half Path Group"
              width={55}
              height={65}
              className="object-contain"
            />
          </div>

          {/* Desktop Only */}
          <div className="hidden lg:flex items-center justify-center w-55 h-65">
            <Image
              src="/images/Group.svg"
              alt="Group"
              width={115}
              height={120}
              className="object-contain"
            />
          </div>

          {/* Desktop Only */}
          <div className="hidden lg:flex items-center justify-center w-55 h-65">
            <Image
              src="/images/school.svg"
              alt="School"
              width={155}
              height={160}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partner;
