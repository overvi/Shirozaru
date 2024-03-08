import { AnimeFull } from "@/types/Anime";
import { Flex } from "@chakra-ui/react";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import HeaderContent from "./HeaderContent";

import { default as HeaderSlider } from "@/components/shared/Slider/HeaderSlider";

interface Props {
  headers: AnimeFull[];
}
const Slider = ({ headers }: Props) => {
  return (
    <HeaderSlider>
      {headers?.map((details) => (
        <Flex
          key={details?.id}
          align={{ base: "center", md: "start" }}
          justify={{ base: "center", md: "start" }}
          h={["50vh", "100vh"]}
          bgImage={{
            base: details?.coverImage?.mobile!,
            md: details?.coverImage?.desktop!,
            lg: details?.coverImage?.desktop!,
          }}
          className="!flex  relative header bg-no-repeat bg-cover"
        >
          <HeaderContent data={details} />
        </Flex>
      ))}
    </HeaderSlider>
  );
};

export default Slider;
