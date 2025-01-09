import style from "../../css/project.module.css";
import { whoWeAre } from "@/public/data/who-we-are/whoWeAre";
import WhoCarousel from "./WhoCarousel";

const WhoWeAre = () => {
  const data = whoWeAre;

  if (!data) {
    return <h1>Data not available!</h1>;
  }

  const { title, heading, text, images, details } = data;

  return (
    <div id="about" className={style.whoWeAre}>
      <div className="container">
        <div className="row gy-4 align-items-center">
          <div className={`col-lg-6 ${style.whoContent}`}>
            <h4>{title}</h4>
            <h2>{heading}</h2>
            <p className="mt-4 mb-4">{text}</p>
            <ul>
              {details.map((item, index) => {
                return (
                  <li key={index}>
                    <i className={item.icon}></i>
                    <span>{item.text}</span>
                  </li>
                );
              })}
            </ul>
            <button className={`mt-4 ${style.btnCustom}`}>Read More</button>
          </div>
          <div className="col-lg-6 content">
            <WhoCarousel images={images} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
