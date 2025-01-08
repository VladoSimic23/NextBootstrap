import { Suspense } from "react";
import Features from "./components/features/Features";
import Pricing from "./components/pricing/Pricing";
import Questions from "./components/questions/Questions";
import Services from "./components/services/Services";
import WhoWeAre from "./components/WhoWeAre/WhoWeAre";

const Home = async () => {
  return (
    <div>
      <Suspense fallback={<h1>Loading Who we are section... </h1>}>
        <WhoWeAre />
      </Suspense>
      <Suspense fallback={<h1>Loading Services section... </h1>}>
        <Services />
      </Suspense>
      <Suspense fallback={<h1>Loading Features section... </h1>}>
        <Features />
      </Suspense>
      <Suspense fallback={<h1>Loading Pricing section... </h1>}>
        <Pricing />
      </Suspense>
      <Suspense fallback={<h1>Loading Questions section... </h1>}>
        <Questions />
      </Suspense>
    </div>
  );
};

export default Home;
