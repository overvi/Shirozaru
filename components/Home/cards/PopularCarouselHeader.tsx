import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";

const PopularCarouselHeader = () => {
  return (
    <Box className="space-y-3">
      <Heading size={["lg", "lg", "xl"]}>Popular Anime All The Time</Heading>
      <Text color="gray.500">find out some popular animes!</Text>
    </Box>
  );
};

export default PopularCarouselHeader;
