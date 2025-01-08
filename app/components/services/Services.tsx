import style from "../../css/project.module.css";
import { services } from "@/public/data/services/services";

const Services = () => {
  const data = services;

  if (!data) {
    return <h1>Data not available!</h1>;
  }

  const { title, heading, ourServices } = data;

  return (
    <div id="services" className={style.services}>
      <div className="container">
        <div className={style.servicesHeading}>
          <h4>{title}</h4>
          <h2>{heading}</h2>
        </div>
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
      </div>
    </div>
  );
};

export default Services;
