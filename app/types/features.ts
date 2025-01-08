export interface FeatureI {
  icon: string;
  text: string;
}

export interface ImageI {
  img: string;
  alt: string;
}

export interface FeaturesI {
  features: {
    title: string;
    heading: string;
    image: ImageI;
    details: FeatureI[];
  };
}
