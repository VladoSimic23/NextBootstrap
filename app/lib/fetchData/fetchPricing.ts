import { PricingI } from "@/app/types/pricing";
import { baseUrl } from "./fetchHero";

export const fetchPricing = async () => {
  try {
    const res = await fetch(`${baseUrl}/data/pricing/pricing.json`);
    const data: PricingI = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
