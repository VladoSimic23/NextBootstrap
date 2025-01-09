import style from "../../css/project.module.css";
import ButtonBtn from "../Button/ButtonBtn";
import { PlanI } from "@/app/types/pricing";

const PricingChild2 = ({ plans }: { plans: PlanI[] }) => {
  return (
    <div className="row gy-4">
      {plans.map((item, index) => {
        const { title, price, featured, icon, button, details } = item;
        return (
          <div key={index} className="col-lg-3 col-md-6">
            <div className={style.pricingInner}>
              {featured && <span className={style.featuredItem}>Featured</span>}
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
              <ButtonBtn text={button} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PricingChild2;
