import Image from "next/image";
import Link from "next/link";

type Logo = {
  src: string;
  alt: string;
  href: string;
  width: number;
  height: number;
};

const logos: Logo[] = [
  { src: "/images/stem1.svg", alt: "Stem", href: "#", width: 155, height: 160 },
  {
    src: "/images/explorium1.svg",
    alt: "Explorium",
    href: "#",
    width: 155,
    height: 160,
  },
  {
    src: "/images/logo1.svg",
    alt: "Iliauni",
    href: "#",
    width: 155,
    height: 160,
  },
  {
    src: "/images/Group.svg",
    alt: "Group",
    href: "#",
    width: 115,
    height: 120,
  },
  {
    src: "/images/school.svg",
    alt: "School",
    href: "#",
    width: 155,
    height: 160,
  },
];

const Partner = () => {
  return (
    <section className="w-full bg-white py-16">
      <div className="mx-auto max-w-360 px-4">
        <h2 className="mb-8 text-center text-[20px] font-semibold md:text-[24px] lg:text-[32px]">
          ჩვენი პარტნიორები
        </h2>

        <div className="overflow-hidden lg:hidden">
          <div className="flex w-max gap-8 md:gap-0 animate-marquee">
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={`${logo.alt}-${index}`}
                className="flex h-28 w-28 shrink-0 items-center justify-center md:h-65 md:w-55"
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
                    className="h-auto max-w-full object-contain"
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden items-center justify-center gap-0 lg:flex">
          {logos.map((logo) => (
            <div
              key={logo.alt}
              className="flex h-65 w-55 items-center justify-center"
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
                  className="object-contain"
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partner;
