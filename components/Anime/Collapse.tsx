"use client";

import React, { useState } from "react";
import { Collapse as C } from "@chakra-ui/react";

const Collapse = ({ query }: { query: string }) => {
  const [show, setShow] = useState(false);
  const handleToggle = () => setShow(!show);
  return (
    <C
      className="max-w-[35rem] mt-10 cursor-pointer"
      startingHeight={65}
      animateOpacity
      in={show}
      onClick={handleToggle}
    >
      {query}
    </C>
  );
};

export default Collapse;
