export interface WhoWeAre {
  whoWeAre: {
    title: string;
    heading: string;
    text: string;
    button: string;
    details: Array<{
      icon: string;
      text: string;
    }>;
    images: Array<{
      img: string;
      alt: string;
    }>;
  };
}
