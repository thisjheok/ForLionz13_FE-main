export interface ISlider {
  children: React.ReactNode;
  autoplay?: boolean;
  speed?: number;
  loop?: boolean;
  dots?: boolean;
  infinite?: boolean;
  slidesToShow?: number;
  slidesToScroll?: number;
  initialSlide?: number;
  arrows?: boolean;
  autoplaySpeed?: number;
  isMainSlider: boolean;
}
