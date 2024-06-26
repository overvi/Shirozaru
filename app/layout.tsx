import Footer from "@/components/shared/Footer/FooterBase";
import Nav from "@/components/shared/Nav/NavBase";
import ChakraProvider from "@/providers/ChakraProvider";
import ColorModeProvider from "@/providers/ColorModeProvider";
import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Bangers, Nunito_Sans } from "next/font/google";
import "./globals.css";
import Query from "../providers/ReactQuery";

const nunito = Nunito_Sans({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-rubik",
  display: "swap",
  adjustFontFallback: false,
});

const bangers = Bangers({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-banger",
  display: "swap",
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html
        suppressHydrationWarning
        lang="en"
        className={[nunito.variable, bangers.variable].join(" ")}
      >
        <body>
          <Query>
            <ColorModeProvider>
              <ChakraProvider>
                <Nav />
                <main>{children}</main>
                <Footer />
              </ChakraProvider>
            </ColorModeProvider>
          </Query>
        </body>
      </html>
    </ClerkProvider>
  );
}
