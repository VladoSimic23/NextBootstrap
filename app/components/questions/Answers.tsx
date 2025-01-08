import { FAQI } from "@/app/types/questions";
import style from "../../css/project.module.css";

const Answers = ({ questions }: { questions: FAQI[] }) => {
  return (
    <div>
      {questions.map((item) => {
        const { id, question, answer } = item;
        return (
          <div key={id} className={style.questItem}>
            <a
              data-bs-toggle="collapse"
              href={`#collapseExample${id}`}
              role="button"
              aria-expanded="false"
              aria-controls={`#collapseExample${id}`}
              data-target={`#collapseExample${id}`}
            >
              <h3>
                <span className={style.questId}>{id}. </span>
                <span className={style.question}>{question}</span>
              </h3>
            </a>
            <div
              id={`collapseExample${id}`}
              className={`collapse ${style.questAnswer}`}
            >
              <p>{answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Answers;
