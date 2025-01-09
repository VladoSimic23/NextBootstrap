import style from "../../css/project.module.css";

const FeaturesItem1 = ({
  heading,
  title,
}: {
  heading: string;
  title: string;
}) => {
  return (
    <div className={style.servicesHeading}>
      <h4>{title}</h4>
      <h2>{heading}</h2>
    </div>
  );
};

export default FeaturesItem1;
