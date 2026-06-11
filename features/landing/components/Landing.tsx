import AboutUs from "./AboutUs";
import DiscoverProjects from "./DiscoverProjects";
import HeroSection from "./HeroSection";
import Partner from "./Partner";
import Statistic from "./Statistic";

const Landing = () => {
  return (
    <div className="w-full min-w-0">
      <HeroSection />
      <DiscoverProjects />
      <AboutUs />
      <Statistic />
      <Partner />
    </div>
  );
};

export default Landing;
