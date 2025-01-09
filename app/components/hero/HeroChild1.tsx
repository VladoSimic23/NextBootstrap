import style from "../../css/project.module.css";
import Image from "next/image";
import ButtonBtn from "../Button/ButtonBtn";

const HeroChild1 = ({
  heading,
  image,
  text,
  button,
}: {
  heading: string;
  image: string;
  text: string;
  button: string;
}) => {
  return (
    <div className={`row align-items-center ${style.smallScreenHero}`}>
      <div className="col-lg-6">
        <h1>{heading}</h1>
        <p>{text}</p>
        <ButtonBtn text={button} />
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
  );
};

export default HeroChild1;
