type StatisticChildProps = {
  image: string;
  alt: string;
  quantity: string; // string | number ხომ არ გავუწერო და if შევამოწმო წამოსული ინფო, რაკი ბექიდან ყველავარიანტში number მოდის
  title: string;
};

const StatisticChild = (props: StatisticChildProps) => {
  return (
    <div className="flex flex-col items-center md:max-w-[250px] lg:max-w-[384px] w-full text-center">
      <img
        src={props.image}
        alt={props.alt}
        className="h-[160px] md:h-[120px] lg:h-[200px] w-auto mb-4 lg:mb-14 object-contain"
      />
      <h2 className="text-[40px] lg:text-[64px] font-bold text-[#DB5353]">
        {props.quantity}
      </h2>
      <p className="text-[24px] lg:text-[32px]">{props.title.toUpperCase()}</p>
    </div>
  );
};

const Statistic = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-4 lg:gap-6 my-18 lg:my-40 mx-4 md:mx-6 lg:mx-40 font-mecomisce">
      <StatisticChild
        image="images/landing/computer.png"
        alt="computer"
        quantity="100+"
        title="პროექტი"
      />
      <StatisticChild
        image="images/landing/school.png"
        alt="school"
        quantity="100"
        title="პარტნიორი სკოლა"
      />
      <StatisticChild
        image="images/landing/hands.png"
        alt="hands"
        quantity="200+"
        title="უნისკოლელი"
      />
    </div>
  );
};

export default Statistic;
