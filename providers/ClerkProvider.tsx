"use client";
import { dark, neobrutalism } from "@clerk/themes";

import { ClerkProvider as Clerk } from "@clerk/nextjs";
import { PropsWithChildren } from "react";

export function ClerkProvider({ children }: PropsWithChildren) {
  return (
    <Clerk
      appearance={{
        baseTheme: neobrutalism,
        variables: { colorText: "white", colorPrimary: "gray" },
      }}
    >
      {children}
    </Clerk>
  );
}
