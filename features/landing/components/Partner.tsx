import Image from "next/image";
import Link from "next/link";

type Logo = {
  src: string;
  alt: string;
  href: string;
  width: number;
  height: number;
  label: string
};

const logos: Logo[] = [
  { src: "/images/stem1.svg", alt: "Stem", label: "STEM ინოვატორთა ასოციაცია", href: "#", width: 155, height: 160 },
  { src: "/images/explorium1.svg", alt: "Explorium", label: "ექსპლორიუმი", href: "#", width: 155, height: 160 },
  { src: "/images/logo1.svg", alt: "Iliauni", label: "ლოგო", href: "#", width: 155, height: 160 },
  { src: "/images/Group.svg", alt: "Group", label: "უნულაბი", href: "#", width: 115, height: 120 },
  { src: "/images/school.svg", alt: "School", label: "მე-100 საჯარო სკოლა", href: "#", width: 155, height: 160 },
];

const Partner = () => {
  return (
    <section className="w-full my-18 lg:my-40 bg-white py-16">
      <div className="mx-auto w-full max-w-300 md:px-8 px-4">
        <h2 className="mb-8 text-center text-[#000000] text-[24px] md:text-[32px] lg:text-[48px] font-mecomisce">
          ჩვენი პარტნიორები
        </h2>

        <div className="w-full  pb-4 lg:pb-0 overflow-x-auto ">
          <div className="flex items-center overflow-x-auto lg:overflow-x-visible justify-start lg:justify-between w-max lg:w-full gap-6 md:gap-8 overflow-y-visible relative z-10">
            {logos.map((logo) => (
              <div
                key={logo.alt}
                className="relative group h-28 md:h-40 lg:h-55 flex justify-center shrink-0 lg:shrink w-[35vw] sm:w-[28vw] md:w-[22vw] max-w-55"
              >
                <Link
                  href={logo.href}
                  className="flex w-full items-center justify-center group"
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    fill
                    className="h-auto max-w-full p-2 lg:p-6 object-contain grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                  />
                </Link>
                <span className="absolute px-6 py-2 z-50 font-mecomisce text-[#666666] border-2 border-[#BFBFBF] bg-[#F2F2F2] rounded-full shadow-[-2px_2px_2px_0px] shadow-[#00000026] group-hover:block hidden text-nowrap top-full mt-2">
                  {logo.label.toUpperCase()}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partner;
