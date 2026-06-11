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
      className="flex flex-col items-center md:max-w-[250px] lg:max-w-[384px] w-full text-center"
    >
      <div
        className={`${imageClassName} h-[160px] md:h-[120px] lg:h-[200px] relative mb-4 lg:mb-14`}
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
      <p className="text-[24px] lg:text-[32px]">{title}</p>
    </article>
  );
};

const Statistic = () => {
  return (
    <section
      aria-label="სტატისტიკა"
      className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-4 lg:gap-6 my-18 lg:my-40 mx-4 md:mx-6 lg:mx-40"
    >
      {statistics.map((item) => (
        <StatisticChild key={item.title} {...item} />
      ))}
    </section>
  );
};

export default Statistic;
