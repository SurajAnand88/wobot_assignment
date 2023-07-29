import { Flex, Input, Select, Text } from "@chakra-ui/react";
import React from "react";

const MidCard = () => {
  return (
    <Flex direction={"column"} w={"full"}>
      <form>
        <Text my={2} fontSize={"xs"} fontWeight={"semibold"}>
          Your Name
        </Text>
        <Input
          size={"sm"}
          placeholder="e.g John Smith"
          _placeholder={{ color: "gray" }}
          type="text"
          w={"92%"}
          border={"1px solid gray"}
          _hover={{ border: "1px solid gray" }}
          focusBorderColor="none"
          isRequired={true}
          borderRadius={6}
        />
        <Text my={2} fontSize={"xs"} fontWeight={"semibold"}>
          Company Name
        </Text>
        <Input
          size={"sm"}
          placeholder="e.g John Smith"
          _placeholder={{ color: "gray" }}
          type="text"
          w={"92%"}
          border={"1px solid gray"}
          _hover={{ border: "1px solid gray" }}
          focusBorderColor="none"
          isRequired={true}
          borderRadius={6}
        />
        <Text my={2} fontSize={"xs"} fontWeight={"semibold"}>
          Industry
        </Text>
        <Select
          size={"sm"}
          placeholder="Select"
          border={"1px solid gray"}
          _hover={{ border: "1px solid gray" }}
          focusBorderColor="none"
          borderRadius={6}
          style={{ color: "gray" }}
        >
          <option value={"Value1"}>Value1</option>
          <option value={"Value2"}>Value2</option>
          <option value={"Value3"}>Value3</option>
        </Select>
      </form>
    </Flex>
  );
};

export default MidCard;
