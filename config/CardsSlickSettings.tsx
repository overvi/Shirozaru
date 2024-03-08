import { NextArrow, PrevArrow } from "@/components/Home/header/Arrows";

export const settings = {
  infinite: false,
  speed: 200,
  arrows: false,
  slidesToShow: 5,
  slidesToScroll: 2,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,

  responsive: [
    {
      breakpoint: 565,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 765,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 4,
      },
    },
  ],
};
