export interface FAQI {
  id: number;
  question: string;
  answer: string;
}

export interface QuestionsI {
  questions: {
    heading: string;
    text: string;
    questions: FAQI[];
  };
}
