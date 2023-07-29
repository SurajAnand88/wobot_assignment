import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import LowerCard from "./LowerCard";
import MidCard from "./MidCard";
import TopCard from "./TopCard";

const Card = () => {
  return (
    <>
      <Flex
        direction={"column"}
        bg={"white"}
        color={"rgba(0,0,0, 0.7)"}
        w={{ base: "350px", sm: "400px", md: "450px" }}
        pos={"absolute"}
        top={"100px"}
        left={"50%"}
        transform={"translateX(-50%)"}
        boxSizing="border-box"
        px={"5%"}
        py={10}
        borderRadius={10}
        align={"center"}
      >
        <TopCard />
        <MidCard />
        <LowerCard />
      </Flex>
      <Flex
        justify={"center"}
        gap={1}
        fontSize={"xs"}
        mt={1}
        pos={"absolute"}
        left={"50%"}
        color={"black"}
        transform={"translateX(-50%)"}
        top={"730px"}
        zIndex={3}
      >
        <Box>Terms of Use</Box>
        <Box w={"1px"} bg={"gray"} h={"16px"} mt={0.5}></Box>
        <Box>Privacy Policy</Box>
      </Flex>
    </>
  );
};

export default Card;
