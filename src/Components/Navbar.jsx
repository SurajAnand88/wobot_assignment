import { Image } from "@chakra-ui/react";
import React from "react";

const Navbar = () => {
  return (
    <Image
      src="https://www.sequoiacap.com/india/wp-content/uploads/sites/7/2022/03/logo_wobot.png"
      w={"150px"}
      position={"absolute"}
      zIndex={2}
      top={{ md: "40px", base: "10px" }}
      left={{ xl: "100px", md: "60px", base: "10px" }}
    />
  );
};

export default Navbar;
