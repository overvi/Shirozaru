"use client";

import IconButton from "@/customs/IconButton";
import { Flex, SkeletonCircle } from "@chakra-ui/react";
import { SignUpButton, UserButton, useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { FaGoogle } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import ToggleColorMode from "./ToggleColorMode";

const Items = () => {
  const navigate = useRouter();
  return (
    <Flex align="center" gap={[7, 10]}>
      <ToggleColorMode />
      <IconButton
        onClick={() => navigate.push("/search")}
        icon={<IoSearch size={25} />}
        aria-label="search"
      />
      <UserAuth />
    </Flex>
  );
};

const UserAuth = () => {
  const { isSignedIn, isLoaded } = useUser();
  if (!isLoaded) return <SkeletonCircle />;
  return isSignedIn ? <UserButton /> : <Sign />;
};

const Sign = () => {
  return (
    <div>
      <SignUpButton afterSignUpUrl="" mode="modal">
        <IconButton icon={<FaGoogle size="25" />} aria-label="signup" />
      </SignUpButton>
    </div>
  );
};

export default Items;
