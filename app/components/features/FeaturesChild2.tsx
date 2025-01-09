import { FeatureI } from "@/app/types/features";
import style from "../../css/project.module.css";
import Image from "next/image";

const FeaturesItem2 = ({
  img,
  alt,
  details,
}: {
  img: string;
  alt: string;
  details: FeatureI[];
}) => {
  return (
    <>
      <div className={`col-xl-5 ${style.featuresImg}`}>
        <Image src={img} alt={alt} width={500} height={500} priority={false} />
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
    </>
  );
};

export default FeaturesItem2;
