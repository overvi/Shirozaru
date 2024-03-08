"use client";

import { ThemeProvider } from "next-themes";
import React, { PropsWithChildren } from "react";

const ColorModeProvider = ({ children }: PropsWithChildren) => {
  return (
    <>
      <ThemeProvider defaultTheme="dark">{children}</ThemeProvider>
    </>
  );
};

export default ColorModeProvider;
