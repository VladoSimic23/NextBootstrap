export interface HeroI {
  hero: {
    heading: string;
    text: string;
    button: string;
    image: string;
    details: Array<{
      icon: string;
      iconText: string;
    }>;
  };
}
