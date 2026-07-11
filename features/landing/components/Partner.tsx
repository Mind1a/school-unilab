import Image from "next/image";
import Link from "next/link";

type Logo = {
  src: string;
  alt: string;
  href: string;
  width: number;
  height: number;
  label: string;
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
      <div className="mx-auto w-full max-w-300 md:px-8 px-4 xl:px-0">

        <h2 className="mb-8 text-center text-[#000000] text-[24px] md:text-[32px] lg:text-[48px] font-mecomisce">
          {"ჩვენი პარტნიორები".toUpperCase()}
        </h2>

        <div className="w-full overflow-x-auto lg:overflow-visible pb-6 lg:pb-0 scrollbar-hide">

          <div className="flex items-center justify-start lg:justify-between w-max lg:w-full gap-6 md:gap-8 px-2">

            {logos.map((logo) => (
              <div
                key={logo.alt}
                className="relative group flex justify-center shrink-0 lg:flex-1 lg:min-w-0"
              >
                <Link
                  href={logo.href}
                  className="relative flex items-center justify-center w-40 h-40 lg:w-full lg:h-auto lg:aspect-square lg:max-w-55 bg-white"
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    fill
                    className="object-contain p-6 lg:p-7.5 grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                  />
                </Link>

                <span
                  className="
    absolute
    left-1/2 -translate-x-1/2
    top-[calc(100%+10px)]
    z-50
    hidden xl:group-hover:block /* შეცვლილია lg-დან xl-ზე */
    px-6 py-2
    font-mecomisce text-[#666666] text-[14px]
    border-2 border-[#BFBFBF]
    bg-[#F2F2F2]
    rounded-full
    shadow-[-2px_2px_2px_0px] shadow-[#00000026]
    whitespace-nowrap /* ტექსტი ყოველთვის ერთ ხაზზეა */
  "
                >
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
