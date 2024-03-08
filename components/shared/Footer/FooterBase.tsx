import { Flex, Text } from "@chakra-ui/react";
import { IoHeart } from "react-icons/io5";

const Footer = () => (
  <>
    <Flex
      mt={20}
      w="100%"
      className="items-end justify-center"
      _dark={{ bgGradient: "linear(to-b, black, rgba(251, 192, 147 , .10))" }}
    >
      <Flex gap={2} pt={10} pb={3} align="center">
        <IoHeart color="red" />
        <Text fontFamily="cursive" fontSize=".8rem" color="gray.400">
          All Right Reversed Alireza
        </Text>
      </Flex>
    </Flex>
  </>
);

export default Footer;
