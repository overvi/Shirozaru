"use client";

import HeaderSkeleton from "@/components/Home/header/Skeleton";
import { settings } from "@/config/HeaderSlickSettings";
import dynamic from "next/dynamic";
import { PropsWithChildren } from "react";

const Sliders = dynamic(() => import("react-slick"), {
  ssr: false,
  loading: () => <HeaderSkeleton />,
});

const Slider = ({ children }: PropsWithChildren) => {
  return <Sliders {...settings}>{children}</Sliders>;
};

export default Slider;
