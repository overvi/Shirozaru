import { Badge, Box, Flex, Image, Text } from "@chakra-ui/react";
import { Anime } from "@prisma/client";
import { default as Pop } from "../Home/cards/Popover";

const AnimeCard = ({ card }: { card: Anime }) => {
  return (
    <Box className="relative group">
      <Box
        key={card?.id}
        px={2}
        className=" cursor-pointer hover:opacity-55 transition-opacity duration-500 "
      >
        <Image
          width={234}
          height={346}
          className="h-full rounded-[10px]"
          alt="poster"
          src={card?.poster!}
        />
        <Flex justify="space-between" align="center">
          <Text className="mt-2">{card?.title}</Text>
          <Badge variant="outline" colorScheme="yellow">
            Sub
          </Badge>
        </Flex>
      </Box>
      <Pop card={card!} />
    </Box>
  );
};

export default AnimeCard;
