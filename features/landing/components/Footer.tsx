import Image from "next/image";
import Link from "next/link";

type ContactDaTatype = {
  id: number;
  label: string;
  href: string;
  image: string;
  alt: string;
};

type SocialDataType = {
  id: number;
  href: string;
  image: string;
  alt: string;
};

const CONTACT_DATA: ContactDaTatype[] = [
  {
    id: 1,
    label: "+995 xxx xxx xxx",
    href: "tel:+995 xxx xxx xxx",
    image: "/images/footerImages/svg/phone.svg",
    alt: "Phone Icon",
  },
  {
    id: 2,
    label: "infounilab@iliauni.edu.ge",
    href: "mailto:infounilab@iliauni.edu.ge",
    image: "/images/footerImages/svg/gmail.svg",
    alt: "Gmail Icon",
  },
  {
    id: 3,
    label: "გიორგი წერეთლის 1, თბილისი",
    href: "/",
    image: "/images/footerImages/svg/map.svg",
    alt: "Location Icon",
  },
];

const SOCIAL_ICONS: SocialDataType[] = [
  {
    id: 1,
    href: "/",
    image: "/images/footerImages/svg/facebook.svg",
    alt: "Facebook icon",
  },
  {
    id: 2,
    href: "/",
    image: "/images/footerImages/svg/instagram.svg",
    alt: "Instagram icon",
  },
  {
    id: 3,
    href: "/",
    image: "/images/footerImages/svg/tiktok.svg",
    alt: "Tiktok icon",
  },
  {
    id: 4,
    href: "/",
    image: "/images/footerImages/svg/linkedin.svg",
    alt: "Linkedin icon",
  },
  {
    id: 5,
    href: "/",
    image: "/images/footerImages/svg/youtube.svg",
    alt: "Youtube icon",
  },
];

export default function Footer() {
  return (
    <footer className="w-full">
      <div className="relative w-full mx-auto">
        <div className="absolute inset-x-0 top-0 w-full h-0 z-0 pointer-events-none">
          <div className="hidden md:flex absolute -top-20 right-0 mr-4 md:mr-7.75 xl:mr-24 items-center gap-4">
            <div className="flex items-center gap-4">
              <div className="relative w-25 h-25 drop-shadow-[4px_10px_4px_rgba(0,0,0,0.25)]">
                <svg viewBox="0 0 100 80">
                  <polygon points="0,0 50,25 100,0 100,80 0,80" fill="black" />
                  <polygon points="9,12 50,32 95,6 91,80 9,80" fill="#91B9FC" />
                </svg>
              </div>
              <div className="relative w-25 h-25 drop-shadow-[4px_10px_4px_rgba(0,0,0,0.25)]">
                <svg viewBox="0 0 100 80">
                  <polygon points="0,0 50,25 100,0 100,80 0,80" fill="black" />
                  <polygon points="91,12 50,32 5,6 9,80 91,80" fill="#626FCB" />
                </svg>
              </div>
              <div className="relative w-25 h-25 drop-shadow-[4px_10px_4px_rgba(0,0,0,0.25)]">
                <svg viewBox="0 0 100 80">
                  <polygon points="0,0 50,25 100,0 100,80 0,80" fill="black" />
                  <polygon points="9,12 50,32 95,6 91,80 9,80" fill="#DB5353" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="filter-[drop-shadow(-6px_-6px_2px_#0000001A)] z-50">
          <div
            className="relative w-full flex flex-col z-50 bg-[#4D7CCE]
                    border-4 border-black border-b-transparent
                    border-r-transparent

                    px-3.5 py-6 md:px-7 md:py-8.5  xl:p-12.5
                    [clip-path:polygon(41px_0%,100%_0%,100%_100%,0%_100%,0%_40px)]
                    md:[clip-path:polygon(84px_0%,100%_0%,100%_100%,0%_100%,0%_52px)]
                    xl:[clip-path:polygon(145px_0%,100%_0%,100%_100%,0%_100%,0%_76px)]
                    "
          >
            <div className="absolute left-0 top-0 ">
              <div className="absolute -top-1 -left-1 w-10.25 h-10 md:w-21 md:h-13 xl:w-36.25 xl:h-19 pointer-events-none z-50">
                <svg
                  viewBox="0 0 145 75"
                  className="w-full h-full drop-shadow-[0px_5px_4px_rgba(0,0,0,0.30)]"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                >
                  <polygon points="0,76 145,0 145,76" fill="#4D7CCE" />
                  <path
                    d="M 0,76 Q 72,70 145,73"
                    stroke="black"
                    strokeWidth="6"
                    strokeLinecap="square"
                  />
                  <line
                    x1="145"
                    y1="0"
                    x2="145"
                    y2="75"
                    stroke="black"
                    strokeWidth="8"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>
            <div className="absolute  -top-0.5 -left-1 w-full h-full pointer-events-none z-50">
              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <line
                  x1="0"
                  y1="40"
                  x2="41"
                  y2="0"
                  className="stroke-black stroke-[4px] block md:hidden"
                />
                <line
                  x1="0"
                  y1="52"
                  x2="84"
                  y2="0"
                  className="stroke-black stroke-[4px] hidden md:block xl:hidden"
                />
                <line
                  x1="0"
                  y1="76"
                  x2="145"
                  y2="0"
                  className="stroke-black stroke-[4px] hidden xl:block"
                />
              </svg>
            </div>
            <div className="w-full max-w-335  mx-auto bg-[#7196D8]">
              <div className="w-full px-4 md:px-17 xl:px-17.5 xl:pt-17 xl:pb-12.75 pt-3.75 md:pt-16.75 pb-12.5 flex flex-col md:flex-row items-start justify-between gap-7.5">
                <div className="flex gap-13.75 w-full md:w-auto justify-between flex-row md:flex-col">
                  <Image
                    width={100}
                    height={100}
                    src={"/images/logo/logo.png"}
                    className="w-25.25 h-16 md:w-36 md:h-25 xl:w-47.5 xl:h-29.75"
                    alt="Unilab school logo"
                  />

                  <div className="flex items-center gap-2.5">
                    <Image
                      width={100}
                      height={100}
                      src={"/images/footerImages/svg/unilab.svg"}
                      className="w-11.75 h-15.25 md:w-14.25 md:h-18.5"
                      alt="Unilab logo"
                    />
                    <Image
                      width={100}
                      height={100}
                      src={"/images/footerImages/svg/iliauni.svg"}
                      className="w-16 h-16 md:w-19.25 md:h-19.25"
                      alt="Iliauni logo"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-4 text-black">
                  <h2 className="text-[20px] leading-10 font-case">
                    საკონტაქტო ინფორმაცია
                  </h2>
                  <div className="flex flex-col gap-4">
                    {CONTACT_DATA.map((contact) => (
                      <Link
                        key={contact.id}
                        className="flex  items-center gap-3 leading-5"
                        href={contact.href}
                      >
                        <Image
                          width={24}
                          height={24}
                          src={contact.image}
                          alt={contact.alt}
                        />
                        {contact.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full max-w-335 mx-auto bg-[#7196D8] mt-4 border-t border-[#4D7CCE]/20">
              <div className="w-full px-4 md:px-17 xl:px-17.5 xl:pt-8.75 xl:pb-6.5 pt-8.5 pb-6.25 flex flex-col-reverse md:flex-row items-center justify-between gap-4 text-black">
                <p className="leading-6 text-[14px] capitalize">
                  &copy; {new Date().getFullYear()} unilab school.
                </p>

                <div className="flex items-center gap-6">
                  {SOCIAL_ICONS.map((social) => (
                    <Link key={social.id} href={social.href}>
                      <Image
                        width={40}
                        height={40}
                        src={social.image}
                        alt={social.alt}
                      />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="absolute w-full left-0 bottom-0 h-20 pointer-events-none z-50">
            <svg
              className="w-full h-full"
              viewBox="0 0 140 70"
              preserveAspectRatio="none"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M 0,68 Q 72,66 145,71"
                stroke="black"
                strokeWidth="6"
                strokeLinecap="square"
              />
            </svg>
          </div>

          <div className="absolute h-full right-0 top-0 w-10 md:w-16 xl:w-20 pointer-events-none z-50">
            <svg
              className="w-full h-full"
              viewBox="0 0 40 100"
              preserveAspectRatio="none"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M 41,0 Q 39,50 42,100"
                stroke="black"
                strokeWidth="6"
                strokeLinecap="square"
              />
            </svg>
          </div>
        </div>
      </div>
    </footer>
  );
}
