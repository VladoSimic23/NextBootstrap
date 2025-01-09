import { HeroDetailsI } from "@/app/types/hero";
import style from "../../css/project.module.css";

const HeroChild2 = ({ details }: { details: HeroDetailsI[] }) => {
  return (
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
  );
};

export default HeroChild2;
