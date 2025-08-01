interface JobPosition {
  title: string;
  country: string;
  modality: string;
  salary: string;
  skills: string[];
  link: string;
  image_url: string;
}

interface CarouselSettings {
  dots: boolean;
  infinite: boolean;
  speed: number;
  slidesToShow: number;
  slidesToScroll: number;
  responsive?: ResponsiveSetting[];
}

interface ResponsiveSetting {
  breakpoint: number;
  settings: {
    slidesToShow: number;
    slidesToScroll: number;
  };
}
