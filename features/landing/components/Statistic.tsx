import Image from "next/image";

type StatisticChildProps = {
  image: string;
  alt: string;
  quantity: number;
  title: string;
  suffix?: string;
  imageClassName: string;
};

const statistics = [
  {
    image: "/images/landing/computer.png",
    alt: "computer",
    quantity: 100,
    suffix: "+",
    title: "პროექტი",
    imageClassName: "w-[169px] md:w-[120px] lg:w-[200px]",
  },
  {
    image: "/images/landing/school.png",
    alt: "school",
    quantity: 100,
    title: "პარტნიორი სკოლა",
    imageClassName: "w-[193px] md:w-[145px] lg:w-[242px]",
  },
  {
    image: "/images/landing/hands.png",
    alt: "hands",
    quantity: 200,
    suffix: "+",
    title: "უნისკოლელი",
    imageClassName: "w-[166px] md:w-[124px] lg:w-[208px]",
  },
];

const StatisticChild = ({
  image,
  alt,
  quantity,
  title,
  suffix,
  imageClassName,
}: StatisticChildProps) => {
  const fullLabel = `${quantity}${suffix ?? ""} ${title}`;

  return (
    <article
      aria-label={fullLabel}
      className="flex flex-col text-[#000000]  font-mecomisce items-center md:max-w-62.5 xl:max-w-[384px] w-full text-center"
    >
      <div
        className={`${imageClassName} h-40 md:h-30 lg:h-50 relative mb-4 lg:mb-14`}
      >
        <Image
          src={image}
          alt={alt}
          fill
          className="object-contain"
          sizes="(max-width: 767px) 193px, (max-width: 1023px) 145px, 242px"
        />
      </div>
        <h2 className="text-[40px] lg:text-[64px] font-bold text-[#DB5353]">
          {quantity}
          {suffix}
        </h2>
        <p className="text-[24px] lg:text-[32px] text-nowrap">{title.toUpperCase()}</p>
    </article>
  );
};

const Statistic = () => {
  return (
    <section
      aria-label="სტატისტიკა"
      className=""
    >
      <div className="max-w-300 mx-auto flex flex-col gap-8 items-center my-18 lg:my-40 w-full md:flex-row md:gap-4 md:px-6 md:justify-around lg:gap-6">
        {statistics.map((item) => (
          <StatisticChild key={item.title} {...item} />
        ))}
     </div>
    </section>
  );
};

export default Statistic;
