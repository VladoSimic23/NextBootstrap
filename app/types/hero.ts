export interface HeroI {
  hero: {
    heading: string;
    text: string;
    button: string;
    image: string;
    details: HeroDetailsI[];
  };
}

export interface HeroDetailsI {
  icon: string;
  iconText: string;
}
