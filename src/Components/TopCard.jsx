import { Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

const TopCard = () => {
  return (
    <Flex align={"center"} direction={"column"} px={"50px"}>
      <Image
        src="https://assets.bossjob.com/companies/27310/logo/9f7895df7d17d5c86283034c0e5f3e6d.jpeg"
        w={"60px"}
        m={"auto"}
      />
      <Text align={"center"} fontSize={"24px"} fontWeight={"semibold"} my={0}>
        It's a delight to have you onboard
      </Text>
      <Text fontSize={"xs"} fontWeight={"semibold"}>
        Help us know you better.
      </Text>
      <Text align={"center"} my={0} fontSize={"xs"} fontWeight={"semibold"}>
        (This is how we optimize Wobot as per your business needs)
      </Text>
    </Flex>
  );
};

export default TopCard;
