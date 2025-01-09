import { ServiceI } from "@/app/types/services";
import style from "../../css/project.module.css";

const ServicesChild2 = ({ ourServices }: { ourServices: ServiceI[] }) => {
  return (
    <div className={`${style.listOfServices} row gy-4`}>
      {ourServices.map((item, index) => {
        return (
          <div key={index} className="col-lg-4 col-md-6">
            <div className={style.servicesInner}>
              <i className={item.icon}></i>
              <h3>{item.heading}</h3>
              <p>{item.text}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ServicesChild2;
