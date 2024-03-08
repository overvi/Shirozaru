import AnimeCard from "@/components/shared/AnimeCard";
import Slider from "@/components/shared/Slider/CardSlider";
import { AnimeFull } from "@/types/Anime";
import { Box } from "@chakra-ui/react";
import { memo } from "react";
import HotCarouselHeader from "./HotCarouselHeader";
import PopularCarouselHeader from "./PopularCarouselHeader";

const CarouselCard = ({ cards }: { cards: AnimeFull[] }) => {
  return (
    <Box className="space-y-14 ">
      <HotCarouselHeader />
      <Slider>
        {cards
          ?.filter((card) => card.year_of_make > 2020)
          .map((card) => (
            <AnimeCard key={card?.id} card={card!} />
          ))}
      </Slider>
      <PopularCarouselHeader />
      <Slider>
        {cards
          ?.filter((card) => card.rating < 8)
          .map((card) => (
            <AnimeCard key={card?.id} card={card!} />
          ))}
      </Slider>
    </Box>
  );
};

export default memo(CarouselCard);
