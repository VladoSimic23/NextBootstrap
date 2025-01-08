import style from "../../css/project.module.css";
import Image from "next/image";
import { hero } from "@/public/data/hero/hero";

const Hero = () => {
  const data = hero;

  if (!data) {
    return <h1>Data Not Available</h1>;
  }
  const { heading, text, button, image, details } = data;

  return (
    <div id="home" className={`${style.bgLightGreen} ${style.hero}`}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h1>{heading}</h1>
            <p>{text}</p>
            <button className={style.btnCustom}>{button}</button>
          </div>
          <div className="col-lg-6">
            <Image
              src={image}
              width={400}
              height={400}
              alt="heroImage"
              priority={true}
              quality={10}
            />
          </div>
        </div>
        <div className={`row gy-4 mt-5 ${style.heroBox}`}>
          {details.map((item, index) => {
            const { icon, iconText } = item;

            return (
              <div key={index} className="col-xl-3 col-md-6">
                <div className={style.boxContent}>
                  <i className={icon}></i>
                  <h4>{iconText}</h4>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Hero;
