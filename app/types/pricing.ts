export interface PlanDetailI {
  text: string;
  available: boolean;
}

export interface PlanI {
  title: string;
  price: number;
  icon: string;
  button: string;
  featured: boolean;
  details: PlanDetailI[];
}

export interface PricingI {
  pricing: { title: string; heading: string; plans: PlanI[] };
}
