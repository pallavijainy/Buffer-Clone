import { Box, Button, Heading, Image } from "@chakra-ui/react";
import React from "react";

export const Bluebox = () => {
  return (
    <Box >
      <Box
        backgroundColor={"blue"}
        height={"550px"}
        border={"1px solid red"}
        mt={"100px"}
        display={"flex"}
        justifyContent={"space-around"}
        
      >
        <Box>
          <Image
            boxSize={10}
            ml={"40"}
            mt="10"
            src="https://buffer.com/static/background/triangle-green.svg"
          ></Image>
          <Image
            boxSize={40}
            mt="20"
            src="https://buffer.com/static/background/planet@2x.png"
          ></Image>
          <Image
            boxSize={40}
            mt="20"
            src="https://buffer.com/static/background/circle-pink.svg"
          ></Image>
        </Box>

<Box width={"500px"} mt={"100px"}>

<Heading as='h4' size='lg' color={"white"}>
140,000+ people like you use Buffer to build their brand on social media every month
  </Heading>

  <Button size='lg' mt='10' colorScheme='orange' p={10}>
Get started now
</Button>

</Box>


<Box>
<Image
            boxSize={10}
            mr={"40"}
            mt="10"
            src="https://buffer.com/static/background/circle-brush@2x.png"
          ></Image>
          <Image
            boxSize={40}
            mt="20"
            ml={"30"}
            src="https://buffer.com/static/background/lines-orange.svg"
          ></Image>
          <Image
            boxSize={10}
            mt="20"
            src="https://buffer.com/static/background/triangle-yellow.svg"
          ></Image>

</Box>

      </Box>
    </Box>
  );
};
