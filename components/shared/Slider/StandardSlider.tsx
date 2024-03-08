"use client";

import dynamic from "next/dynamic";
import { Settings } from "react-slick";

const Sliders = dynamic(() => import("react-slick"), {
  ssr: false,
});

const Slider = (settings: Settings) => {
  return <Sliders {...settings} />;
};

export default Slider;
