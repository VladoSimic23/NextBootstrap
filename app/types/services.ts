export interface ServiceI {
  heading: string;
  text: string;
  icon: string;
}

export interface ServicesI {
  services: {
    title: string;
    heading: string;
    ourServices: ServiceI[];
  };
}
