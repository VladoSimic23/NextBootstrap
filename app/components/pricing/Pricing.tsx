import style from "../../css/project.module.css";
import { pricing } from "@/public/data/pricing/pricing";

const Pricing = () => {
  const data = pricing;

  if (!data) {
    return <h1>Data not available!</h1>;
  }

  const { title, heading, plans } = data;

  return (
    <div id="pricing" className={style.pricing}>
      <div className="container">
        <div className={style.servicesHeading}>
          <h4>{title}</h4>
          <h2>{heading}</h2>
        </div>
        <div className="row gy-4">
          {plans.map((item, index) => {
            const { title, price, featured, icon, button, details } = item;
            return (
              <div key={index} className="col-lg-3 col-md-6">
                <div className={style.pricingInner}>
                  {featured && (
                    <span className={style.featuredItem}>Featured</span>
                  )}
                  <h4>{title}</h4>
                  <h3>
                    <span className={style.dollar}>$</span>
                    {price} <span className={style.month}>/ mo</span>
                  </h3>
                  <i className={icon}></i>
                  <div>
                    {details.map((item, index) => {
                      return (
                        <p
                          key={index}
                          className={item.available ? "" : style.lineThrough}
                        >
                          {item.text}
                        </p>
                      );
                    })}
                  </div>
                  <button className={style.btnCustom}>{button}</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
