import style from "../../css/project.module.css";
import { hero } from "@/public/data/hero/hero";
import HeroChild1 from "./HeroChild1";
import HeroChild2 from "./HeroChild2";

const HeroParent = () => {
  const data = hero;

  if (!data) {
    return <h1>Data Not Available</h1>;
  }
  const { heading, text, button, image, details } = data;

  return (
    <div id="home" className={`${style.bgLightGreen} ${style.hero}`}>
      <div className="container">
        <HeroChild1
          heading={heading}
          text={text}
          button={button}
          image={image}
        />
        <HeroChild2 details={details} />
      </div>
    </div>
  );
};

export default HeroParent;
