import AboutUs from "./AboutUs/AboutUs";
import { GameZone } from "./GameZone";
import { HeroSection } from "./HeroSection";
import { Media } from "./Media";
import { News } from "./News";
import { Partners } from "./Partners";
import { TopSales } from "./TopSales";

function Home() {
  return (
    <>
      <HeroSection />
      <TopSales />
      <GameZone />
      <Media />
      <Partners />
      <News />
      <AboutUs />
    </>
  );
}

export default Home;
