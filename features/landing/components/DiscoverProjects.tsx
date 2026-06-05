const DiscoverProjects = () => {
  return (
    <div className="flex justify-center items-center w-97.5 h-100 md:w-208.5 md:h-95 lg:w-full lg:h-130 mt-18 lg:mt-14 px-4.5 md:px-[24.5px] lg:px-30 bg-red-500">
      {/* content container */}
      <div className="flex flex-col items-center w-full h-full bg-gray-500">
        {/* name */}
        <div className="w-full h-12 md:h-12 lg:h-14.5 bg-purple-500"></div>
        {/* Cards */}
        <div className="flex flex-row w-full max-w-300 h-72 overflow-x-auto md:overflow-visible scrollbar-hide md:h-65 lg:h-90 mt-4 md:mt-6 lg:mt-10 gap-4 md:gap-5.5 lg:gap-6 bg-black">
          <Card />
          <Card />
          <Card />
        </div>
        {/* View All Courses */}
        <div className="w-58.5 h-6 md:w-71.25 lg:w-83.25 mt-6 lg:mt-10 bg-black"></div>
      </div>
    </div>
  );
};

const Card = () => {
  return (
    <div className="w-70.25 h-full md:w-60.75 md:h-63 lg:w-96 lg:h-90 rounded-2xl shrink-0 bg-white"></div>
  );
};

export default DiscoverProjects;
