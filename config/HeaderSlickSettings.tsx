import { NextArrow, PrevArrow } from "@/components/Home/header/Arrows";
import { LazyLoadTypes } from "react-slick";

const ondemand: LazyLoadTypes = "ondemand";

export const settings = {
  infinite: true,
  speed: 200,
  slidesToShow: 1,
  slidesToScroll: 1,
  lazyLoad: ondemand,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  autoplaySpeed: 5000,
  fade: true,
};
