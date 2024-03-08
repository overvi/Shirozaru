"use client";

import {
  IconButton as IC,
  IconButtonProps,
  useStyleConfig,
} from "@chakra-ui/react";
import React from "react";

const IconButton = (props: IconButtonProps) => {
  const { variant, ...rest } = props;

  const style = useStyleConfig("IconButton", { variant });
  return <IC p=".4rem" __css={style} {...rest} />;
};

export default IconButton;
