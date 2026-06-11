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
    <section className="w-full min-w-0 bg-white py-16">
      <div className="mx-auto w-full max-w-360 px-4">
        <h2 className="mb-8 text-center text-[24px] font-semibold md:text-[32px] lg:text-[48px] font-mecomisce">
          ჩვენი პარტნიორები
        </h2>

        <div className="w-full max-w-full overflow-x-auto overflow-y-hidden pb-3 xl:overflow-visible xl:pb-0">
          <div className="mx-auto flex w-max items-center gap-8 sm:gap-10 md:gap-12 lg:gap-8 xl:gap-0">
            {logos.map((logo) => (
              <div
                key={logo.alt}
                className="flex h-28 w-32 shrink-0 items-center justify-center sm:h-32 sm:w-36 md:h-40 md:w-44 lg:h-52 lg:w-48 xl:h-65 xl:w-55"
              >
                <Link
                  href={logo.href}
                  className="flex h-full w-full items-center justify-center"
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={logo.width}
                    height={logo.height}
                    className="max-h-full w-auto max-w-full object-contain"
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partner;
