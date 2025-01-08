import { QuestionsI } from "@/app/types/questions";
//import { baseUrl } from "./fetchHero";

export const fetchQuestions = async (): Promise<QuestionsI | null> => {
  try {
    const res = await fetch(
      `http://localhost:3000/data/questions/questions.json`
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch: ${res.status} ${res.statusText}`);
    }

    const data: QuestionsI = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching questions:", error);
    return null; // Return null or a default value to handle errors
  }
};
