import { Suspense } from "react";
import Features from "./components/features/FeaturesParent";
import Pricing from "./components/pricing/PricingParent";
import Questions from "./components/questions/Questions";
import Services from "./components/services/ServicesParent";
import WhoWeAre from "./components/WhoWeAre/WhoWeAre";
import ContactParent from "./components/Contact/ContactParent";

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
      <Suspense fallback={<h1>Loading Contact Form section... </h1>}>
        <ContactParent />
      </Suspense>
    </div>
  );
};

export default Home;
