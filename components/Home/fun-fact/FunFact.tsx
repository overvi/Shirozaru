import { Box, Image, Text } from "@chakra-ui/react";

const FunFact = () => {
  return (
    <Box
      className="bg-gray-950 rounded-md shadow-blue max-w-xl m-auto"
      p={6}
      position="relative"
    >
      <Image
        w={100}
        src="https://res.cloudinary.com/duglkyccw/image/upload/v1713304906/gojo-trans-removebg-preview_vaz6jv.png"
        className="absolute -top-28 "
        zIndex={-1}
      />
      <Text className="text-white">
        A fun fact about
        <strong className="[text-shadow:_0_1px_0_#ff0000] px-1">
          Gojo Saturo
        </strong>
        from Jujutsu Kaisen is that despite his cool and collected appearance,
        he’s actually quite the sweet tooth. He initially started eating sweets
        to stimulate his brain, but it turned into a genuine love for sugary
        treats
      </Text>
    </Box>
  );
};

export default FunFact;
