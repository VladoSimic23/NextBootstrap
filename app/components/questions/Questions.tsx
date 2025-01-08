import style from "../../css/project.module.css";
import Answers from "./Answers";
import { questions1 } from "@/public/data/questions/questions";

const Questions = () => {
  const data = questions1;
  if (!data) {
    return <h1>Data not available!</h1>;
  }

  const { heading, questions, text } = data;

  return (
    <div id="questions" className={style.questions}>
      <div className="container">
        <div className="row gy-4">
          <div className={`col-lg-4 ${style.questLeft}`}>
            <h2>{heading}</h2>
            <p>{text}</p>
          </div>
          <div className="col-lg-8">
            <Answers questions={questions} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;
