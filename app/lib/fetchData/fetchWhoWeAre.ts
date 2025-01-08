import { baseUrl } from "./fetchHero";
import { WhoWeAre } from "@/app/types/whoWeAre";

export const fetchWhoWeAre = async () => {
  try {
    const res = await fetch(`${baseUrl}/data/who-we-are/whoWeAre.json`);
    const data: WhoWeAre = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
