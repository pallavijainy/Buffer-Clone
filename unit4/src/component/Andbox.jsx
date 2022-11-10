import { Box, Button, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'

export const Andbox = () => {
  return (
    <>
    <Box display={"flex"} justifyContent={"center"} p={5} mt={"140px"} gap={20}>

<Box maxW='32rem' >
    <Image src="https://static.buffer.com/cdn-cgi/image/w=640,quality=90,format=auto/marketing/static/team/buffer-team-map-2022@2x.jpg"></Image>
</Box>

<Box>
<Box maxW='34rem' textAlign={"left"} >

<Heading mb={4} mt={"5"}>And we are here to help</Heading>
<Text fontSize='2xl' mt={10}>
Our customer advocates are standing by 24/7 to support you via email and social media. We also have a comprehensive, regularly updated help center for those who prefer to find help themselves.
</Text>
<Button size='lg' mt='10' colorScheme='messenger' variant='outline'>
Visit our help center
</Button>
</Box>
</Box>
</Box>
    
    </>
  )
}
