"use client";

import { Box, Image, Tag, VStack } from "@chakra-ui/react";
import { Anime } from "@prisma/client";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Popover = ({ card }: { card: Anime }) => {
  const navigate = useRouter();
  const [mouseMoved, setMouseMoved] = useState(false);
  const handleClick = () => {
    if (!mouseMoved) {
      navigate.push(card.id);
    }
  };
  return (
    <Box
      p={3}
      onMouseMove={() => setMouseMoved(true)}
      onMouseDown={() => setMouseMoved(false)}
      onMouseUp={() => handleClick()}
      inset={0}
      bg="rgba(0 , 0, 0, .7)"
      className=" absolute cursor-pointer rounded-xl duration-700  transition-opacity opacity-0 group-hover:opacity-100"
    >
      <Image src={card.logo} />
      <VStack align="start" mt={4}>
        <Tag colorScheme="blue" m="unset">
          rating : {card.rating}
        </Tag>
        <Tag colorScheme="green">status : {card.status}</Tag>
        <Tag colorScheme="red">episodes : {card.episoden}</Tag>
      </VStack>
    </Box>
  );
};

export default Popover;
