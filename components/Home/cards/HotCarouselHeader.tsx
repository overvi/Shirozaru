import { Box, Heading, Text } from "@chakra-ui/react";

const HotCarouselHeader = () => {
  return (
    <Box className="space-y-3">
      <Heading size={["lg", "lg", "xl"]}>The Best Anime Of The Year</Heading>
      <Text color="gray.500">find out the best animes in 2024</Text>
    </Box>
  );
};

export default HotCarouselHeader;
