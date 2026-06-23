import Image from "next/image";
import Link from "next/link";
import localFont from "next/font/local";

const tfMecomicse = localFont({
  src: "../../../public/font/TFMecomicse-Regular-59522229166.otf",
});

type Logo = {
  src: string;
  alt: string;
  href: string;
  label: string;
  width: number;
  height: number;
};

const logos: Logo[] = [
  {
    src: "/images/stem1.svg",
    alt: "Stem",
    href: "#",
    label: "STEM ინოვატორთა ასოციაცია",
    width: 155,
    height: 160,
  },
  {
    src: "/images/explorium1.svg",
    alt: "Explorium",
    href: "#",
    label: "ექსპლორიუმი",
    width: 155,
    height: 160,
  },
  {
    src: "/images/unilogo.svg",
    alt: "Iliauni",
    href: "#",
    label: "ლოგო",
    width: 155,
    height: 160,
  },
  {
    src: "/images/unilab.svg",
    alt: "Group",
    href: "#",
    label: "უნილაბი",
    width: 115,
    height: 120,
  },
  {
    src: "/images/school.svg",
    alt: "School",
    href: "#",
    label: "მე-100 საჯარო სკოლა",
    width: 155,
    height: 160,
  },
];

const Partner = () => {
  return (
    <section className="w-full overflow-hidden bg-white py-16">
      <div className="mx-auto max-w-360 px-4">
        <h2
          className={`${tfMecomicse.className} mb-8 text-center text-[20px] font-normal md:text-[24px] lg:text-[32px]`}
        >
          ჩვენი პარტნიორები
        </h2>

        <div className="overflow-hidden lg:hidden">
          <div className="animate-marquee flex w-max gap-2 md:gap-5">
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={`${logo.alt}-${index}`}
                className="group flex h-48 w-36 shrink-0 flex-col items-center justify-center pt-3 md:h-80 md:w-55 md:pt-0"
              >
                <Link
                  href={logo.href}
                  className="flex items-center justify-center"
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={logo.width}
                    height={logo.height}
                    className="h-auto max-w-full object-contain grayscale transition-all duration-300 group-hover:grayscale-0"
                  />
                </Link>

                <span className="mt-3 whitespace-nowrap rounded-full border border-[#D9D9D9] px-4 py-2 text-center text-[12px] text-[#666666] opacity-0 shadow-md transition-all duration-300 group-hover:opacity-100 md:mt-6 md:px-8 md:py-3 md:text-[16px]">
                  {logo.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden items-center justify-center gap-5 lg:flex">
          {logos.map((logo) => (
            <div
              key={logo.alt}
              className="group flex h-65 w-65 flex-col items-center justify-center"
            >
              <Link
                href={logo.href}
                className="flex items-center justify-center"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width}
                  height={logo.height}
                  className="object-contain grayscale transition-all duration-300 group-hover:grayscale-0"
                />
              </Link>

              <span className="mt-6 whitespace-nowrap rounded-full border border-[#D9D9D9] px-8 py-3 text-[16px] text-[#666666] opacity-0 shadow-md transition-all duration-300 group-hover:opacity-100">
                {logo.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partner;
