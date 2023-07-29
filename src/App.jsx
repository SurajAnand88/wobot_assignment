import { Box, Image } from "@chakra-ui/react";
import Card from "./Components/Card";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <Box pos={"relative"} w={{ xl: "90%" }} m={"auto"}>
        <Image
          src="https://i0.wp.com/hdqwalls.com/download/material-design-blue-and-white-to-2560x1440.jpg"
          pos={"absolute"}
          zIndex={-2}
          h={"100vh"}
          w={"full"}
        />
        <Box
          pos={"absolute"}
          bg={"whiteAlpha.500"}
          opacity={"0.8"}
          h={"100vh"}
          w={"full"}
          zIndex={-1}
        ></Box>
        <Navbar />
        <Card />
      </Box>
    </>
  );
}

export default App;
