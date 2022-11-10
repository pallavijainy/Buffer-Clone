import { Box, Heading,Text,Image } from '@chakra-ui/react'
import React from 'react'


export const MidTwo = () => {
  return (
<Box>
    <Box >
    <Heading mb={4}>Grow your following without draining your time</Heading>
  
    </Box>
    <Box maxW='32rem' ml={500}>
    <Text fontSize='xl' >
  Social media can be the fastest and cheapest way to build your following and grow your business. But it can also take up all your time. Here are four ways Buffer can help.
  </Text>
    </Box>
    <Box>
        <Image src='https://buffer.com/static/misc/buffer-loop-v2-variant.svg'></Image>
    </Box>
</Box>
  )
}
