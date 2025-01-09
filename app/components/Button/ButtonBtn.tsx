import style from "../../css/project.module.css";

const ButtonBtn = ({ text }: { text: string }) => {
  return <button className={style.btnCustom}>{text}</button>;
};

export default ButtonBtn;
