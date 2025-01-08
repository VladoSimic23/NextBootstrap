import { baseUrl } from "./fetchHero";
import { FeaturesI } from "@/app/types/features";

export const fetchFeatures = async () => {
  try {
    const res = await fetch(`${baseUrl}/data/features/features.json`);
    const data: FeaturesI = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
