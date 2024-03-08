import { Container, Flex, Hide } from "@chakra-ui/react";
import Items from "./Items";

import { auth } from "@clerk/nextjs";
import Hamburger from "./Hamburger";
import Logo from "./Logo";
import WatchList from "./WatchList";

const Nav = async () => {
  const { userId } = auth();

  return (
    <>
      <Flex className="border py-5 " align="center" gap={10}>
        <Container
          justifyContent="space-between"
          gap={10}
          display="flex"
          maxW="76rem"
        >
          <Flex gap={7} justify="center" align="center">
            <Hide above="sm">
              <Hamburger />
            </Hide>
            <Logo />
            {userId && <WatchList userId={userId} />}
          </Flex>

          <Items />
        </Container>
      </Flex>
    </>
  );
};

export default Nav;
