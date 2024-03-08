"use client";

import mobile from "@/public/main-logo-mobile.svg";
import main from "@/public/main-logo.svg";
import { Link } from "@chakra-ui/next-js";
import { Img, useMediaQuery } from "@chakra-ui/react";
import NextLink from "next/link";

const Logo = () => {
  const [x] = useMediaQuery("(min-width: 500px)");
  return (
    <Link as={NextLink} href="/">
      <Img
        height={10}
        width={x ? 150 : 45}
        src={x ? main.src : mobile.src}
        alt="logo"
        className="cursor-pointer"
      />
    </Link>
  );
};

export default Logo;
