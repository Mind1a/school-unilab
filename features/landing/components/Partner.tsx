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
  { src: "/images/explorium1.svg", alt: "Explorium", href: "#", width: 155, height: 160 },
  { src: "/images/logo1.svg", alt: "Iliauni", href: "#", width: 155, height: 160 },
  { src: "/images/Group.svg", alt: "Group", href: "#", width: 115, height: 120 },
  { src: "/images/school.svg", alt: "School", href: "#", width: 155, height: 160 },
];

const Partner = () => {
  return (
    <section className="w-full my-18 lg:my-40 bg-white py-16">
      <div className="mx-auto w-full max-w-300 md:px-8 px-4">
        <h2 className="mb-8 text-center text-[24px] md:text-[32px] lg:text-[48px] font-mecomisce">
          ჩვენი პარტნიორები
        </h2>

        {/* სქროლი მუშაობს სტაბილურად lg ბრეიქფოინთამდე */}
        <div className="w-full overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0">
          <div className="flex items-center justify-start lg:justify-between w-max lg:w-full gap-6 md:gap-8">
            {logos.map((logo) => (
              <div
                key={logo.alt}
                // flex-basis-ზე დაფუძნებული პროპორციული ზრდა
                className="relative h-28 md:h-40 lg:h-55 flex justify-center shrink-0 lg:shrink w-[35vw] sm:w-[28vw] md:w-[22vw] max-w-[220px]"
              >
                <Link
                  href={logo.href}
                  className="flex w-full items-center justify-center"
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    fill
                    className="h-auto max-w-full p-2 lg:p-6 object-contain"
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
