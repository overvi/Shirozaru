import { Flex, Text } from "@chakra-ui/react";
import { PiSmileySad } from "react-icons/pi";

const NothingFound = () => {
  return (
    <Flex m="auto" gap={2} align="start" className="h-screen">
      <PiSmileySad />
      <Text>Nothing Found</Text>
    </Flex>
  );
};

export default NothingFound;
