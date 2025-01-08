import style from "../../css/project.module.css";
import Image from "next/image";
import { features } from "@/public/data/features/features";

const Features = () => {
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
        <div className={style.servicesHeading}>
          <h4>{title}</h4>
          <h2>{heading}</h2>
        </div>
        <div className="row gy-5 justify-content-between">
          <div className={`col-xl-5 ${style.featuresImg}`}>
            <Image
              src={img}
              alt={alt}
              width={500}
              height={500}
              priority={false}
            />
          </div>
          <div className="col-xl-6 d-flex">
            <div className="row align-self-center gy-4">
              {details.map((item, index) => {
                return (
                  <div className="col-md-6" key={index}>
                    <div
                      className={`d-flex align-items-center ${style.featureBox}`}
                    >
                      <i className={item.icon}></i>
                      <h3>{item.text}</h3>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
