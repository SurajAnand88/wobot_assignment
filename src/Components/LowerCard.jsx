import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React, { useState } from "react";
const LowerCard = () => {
  const [selectBox, setSelectBox] = useState(null);

  const boxes = [
    { id: 1, number: "1-20" },
    { id: 2, number: "21-50" },
    { id: 3, number: "51-200" },
    { id: 4, number: "201-500" },
    { id: 5, number: "501++" },
  ];
  return (
    <Flex direction={"column"} w={"full"}>
      <Text my={2} fontSize={"xs"} fontWeight={"semibold"}>
        Number of Locations
      </Text>
      <Flex gap={3}>
        {boxes.map((box) => {
          return (
            <Box
              h={"25px"}
              key={box.id}
              bg={selectBox === box.id ? "blue" : "gray.100"}
              color={selectBox === box.id ? "white" : "black"}
              borderRadius={4}
              onClick={() => {
                setSelectBox(box.id);
              }}
            >
              <Text fontSize={"xs"} fontWeight={"semibold"} px={2} mt={1}>
                {box.number}
              </Text>
            </Box>
          );
        })}
      </Flex>
      <Button
        mt={6}
        bg={"blue"}
        color={"white"}
        _hover={{ bg: "blue", color: "white" }}
        size={"sm"}
        fontWeight={"normal"}
      >
        Get Started
      </Button>
    </Flex>
  );
};

export default LowerCard;
