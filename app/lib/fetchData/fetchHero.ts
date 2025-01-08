import { HeroI } from "@/app/types/hero";

export const baseUrl = "http://localhost:3000";

export const fetchHero = async () => {
  try {
    const res = await fetch(`${baseUrl}/data/hero/hero.json`);
    const data: HeroI = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
