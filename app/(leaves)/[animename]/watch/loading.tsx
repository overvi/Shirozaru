import { Skeleton, SkeletonText } from "@chakra-ui/react";

const WatchLoading = () => {
  return (
    <>
      <div className="max-w-[77rem] py-5 m-auto px-5">
        <SkeletonText skeletonHeight="7" noOfLines={1} width="50%" />
        <Skeleton mt={5} w="100%" h="500px" />
      </div>
    </>
  );
};

export default WatchLoading;
