"use client";

import CardSkeleton from "@/components/Home/cards/Skeleton";
import { settings } from "@/config/CardsSlickSettings";
import dynamic from "next/dynamic";
import { PropsWithChildren } from "react";

const Sliders = dynamic(() => import("react-slick"), {
  ssr: false,
  loading: () => <CardSkeleton />,
});

const Slider = ({ children }: PropsWithChildren) => {
  return <Sliders {...settings}>{children}</Sliders>;
};

export default Slider;
