import style from "../../css/project.module.css";

const ServicesChild1 = ({
  title,
  heading,
}: {
  title: string;
  heading: string;
}) => {
  return (
    <div className={style.servicesHeading}>
      <h4>{title}</h4>
      <h2>{heading}</h2>
    </div>
  );
};

export default ServicesChild1;
