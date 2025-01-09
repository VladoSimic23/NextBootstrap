import style from "../../css/project.module.css";
import { features } from "@/public/data/features/features";
import FeaturesItem1 from "./FeaturesChild1";
import FeaturesItem2 from "./FeaturesChild2";

const FeaturesParent = () => {
  const data = features;

  if (!data) {
    return <h1>Data not available!</h1>;
  }

  const {
    title,
    heading,
    image: { img, alt },
    details,
  } = data;

  return (
    <div id="features" className={style.features}>
      <div className="container">
        <FeaturesItem1 heading={heading} title={title} />
        <div className="row gy-5 justify-content-between">
          <FeaturesItem2 img={img} alt={alt} details={details} />
        </div>
      </div>
    </div>
  );
};

export default FeaturesParent;
