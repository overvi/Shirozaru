import { Box, Text, Heading } from "@chakra-ui/react";
import React from "react";

const TabsHeader = () => {
  return (
    <>
      <Box className="space-y-3">
        <Heading size={["lg", "lg", "xl"]}>Find out Your Best Fit!</Heading>
        <Text color="gray.500">select one of the genres that you Like</Text>
      </Box>
    </>
  );
};

export default TabsHeader;
