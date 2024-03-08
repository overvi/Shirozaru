import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";

import Slider from "@/components/shared/Slider/StandardSlider";
import { settings } from "@/config/MiniCardsSlickSettings";
import { auth } from "@clerk/nextjs";
import { Anime } from "@prisma/client";
import { memo } from "react";
import AnimeDetails from "./AnimeDetails";
import TabsHeader from "./TabsHeader";

const genres = ["Isekai", "Drama", "Adventure", "Mystery", "Action"];

const GenreTabs = async ({ tabs }: { tabs: Anime[] }) => {
  const { userId } = auth();

  return (
    <>
      <Box className="space-y-14 ">
        <TabsHeader />
        <Tabs isFitted variant="enclosed">
          <TabList mb="1em">
            {genres.map((genre) => (
              <Tab key={genre}>{genre}</Tab>
            ))}
          </TabList>
          <TabPanels>
            {genres.map((genre) => (
              <TabPanel key={genre}>
                <Slider {...settings}>
                  {tabs
                    ?.filter(
                      (item) =>
                        item?.genres?.includes(genre) &&
                        !item.trailer.includes("youtube")
                    )
                    .map((item) => (
                      <AnimeDetails
                        key={item?.id}
                        userId={userId}
                        data={item!}
                      />
                    ))}
                </Slider>
              </TabPanel>
            ))}
          </TabPanels>
        </Tabs>
      </Box>
    </>
  );
};

export default memo(GenreTabs);
