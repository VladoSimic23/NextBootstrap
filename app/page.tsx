// import Image from "next/image";
// import styles from "./page.module.css";

import Features from "./components/features/Features";
//import Hero from "./components/hero/Hero";
import Pricing from "./components/pricing/Pricing";
import Questions from "./components/questions/Questions";
import Services from "./components/services/Services";
import WhoWeAre from "./components/WhoWeAre/WhoWeAre";
//import services from "../public/data/services/services";

const Home = async () => {
  return (
    <div>
      <WhoWeAre />
      <Services />
      <Features />
      <Pricing />
      <Questions />
    </div>
  );
};

export default Home;
