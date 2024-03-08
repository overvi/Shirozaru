"use client";

import { IoChevronForwardSharp, IoChevronBackSharp } from "react-icons/io5";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import IconButton from "@/customs/IconButton";

export function NextArrow(props: any) {
  const { onClick } = props;
  return (
    <IconButton
      display={{ base: "none", xl: "block" }}
      aria-label="next-img"
      icon={<IoChevronForwardSharp size="35" color="white" />}
      className="  top-[50%] right-4"
      position="absolute"
      onClick={onClick}
    />
  );
}
export function PrevArrow(props: any) {
  const { onClick } = props;
  return (
    <IconButton
      display={{ base: "none", xl: "block" }}
      zIndex={5}
      aria-label="prev-img"
      icon={<IoChevronBackSharp size="35" color="white" />}
      className=" top-[50%] left-4"
      position="absolute"
      onClick={onClick}
    />
  );
}
