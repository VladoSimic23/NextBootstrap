import style from "../../css/project.module.css";
import { pricing } from "@/public/data/pricing/pricing";
import PricingChild1 from "./PricingChild1";
import PricingChild2 from "./PricingChild2";

const PricingParent = () => {
  const data = pricing;

  if (!data) {
    return <h1>Data not available!</h1>;
  }

  const { title, heading, plans } = data;

  return (
    <div id="pricing" className={style.pricing}>
      <div className="container">
        <PricingChild1 title={title} heading={heading} />
        <PricingChild2 plans={plans} />
      </div>
    </div>
  );
};

export default PricingParent;
