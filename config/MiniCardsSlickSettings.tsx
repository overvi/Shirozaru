import { NextArrow, PrevArrow } from "@/components/Home/header/Arrows";
import { LazyLoadTypes } from "react-slick";

const ondemand: LazyLoadTypes = "ondemand";

export const settings = {
  speed: 200,
  slidesToShow: 1,
  slidesToScroll: 1,
  lazyLoad: ondemand,
  arrows: false,
  autoplaySpeed: 5000,
  fade: true,
};
