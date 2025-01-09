import style from "../../css/project.module.css";
import { services } from "@/public/data/services/services";
import ServicesChild1 from "./ServicesChild1";
import ServicesChild2 from "./ServicesChild2";

const ServicesParent = () => {
  const data = services;

  if (!data) {
    return <h1>Data not available!</h1>;
  }

  const { title, heading, ourServices } = data;

  return (
    <div id="services" className={style.services}>
      <div className="container">
        <ServicesChild1 title={title} heading={heading} />
        <ServicesChild2 ourServices={ourServices} />
      </div>
    </div>
  );
};

export default ServicesParent;
