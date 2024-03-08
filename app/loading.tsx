import { Container, Spinner } from "@chakra-ui/react";

const Loading = () => {
  return (
    <Container
      h="30rem"
      display="flex"
      alignItems="center"
      justifyContent="center"
      _before={{
        content: `""`,
        inset: 0,
        background: "rgba(0 , 0, 0, .5)",
        position: "absolute",
      }}
    >
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="orange.600"
        size="xl"
        position="absolute"
        zIndex={11}
      />
    </Container>
  );
};

export default Loading;
