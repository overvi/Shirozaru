import { defineStyle, defineStyleConfig, extendTheme } from "@chakra-ui/react";

const fonts = {
  heading: "var(--font-rubki)",
  body: "var(--font-rubik)",
  banger: "var(--font-banger)",
};

const IconButton = defineStyleConfig({
  baseStyle: {
    bg: "transparent",
  },
  variants: {
    round: {
      _hover: { bg: "rgba(255 , 255, 255 ,.1)" },
      transition: "background-color 500ms",
      borderRadius: "100%",
      _active: { bg: "rgba(255 , 255, 255 ,.3)" },
      userSelect: "none",
    },
    outline: {
      border: "1px solid orange",
      padding: "3rem",
      borderRadius: "3px",
    },
  },
  defaultProps: {
    variant: "round",
  },
  sizes: {
    md: {
      px: "100px",
    },
  },
});

const Button = defineStyleConfig({
  variants: {
    outline: {
      _hover: {},
      _active: {},
      borderRadius: " 0",
    },
  },
});

const theme = extendTheme({
  fonts,

  components: {
    IconButton,
    Button,
  },
});

export default theme;
