import { Box, Button, Heading, Image, Stack, Text, WrapItem } from '@chakra-ui/react'
import React from 'react'

export const MiddleOne = () => {
  return (
    <>
    
    <Box display={"flex"} p={20}  gap={10} justifyContent="center" >

<Box width={600}  textAlign="left" mt={20}>
    <Stack spacing={8}>
    <Heading size='3xl'>
Grow your audience on social and beyond
  </Heading> 
  <Text fontSize='2xl'>Buffer helps you build an audience organically. We’re a values-driven company that provides affordable, intuitive, marketing tools for ambitious people and teams.</Text>

  <WrapItem gap={10}>
      <Button colorScheme='messenger' fontSize={20} p={6}>Get started now</Button>
    
      <Button fontSize={20} p={6}>Watch video</Button>
    </WrapItem>
    </Stack>
        

</Box>
<Box>
    <Image boxSize="500px" src='https://buffer.com/static/illustrations/all-channels-3.webp'></Image>
</Box>
    </Box>


{/* ***************************************************************** */}

<Box display={"flex"} justifyContent={"space-around"} p={20}>
<Text fontSize='4xl' as='b'  color='RGBA(0, 0, 0, 0.24)'>Huckberry</Text>
  <br />
  <Text fontSize='4xl' as='abbr' color='RGBA(0, 0, 0, 0.24)'>FOOD52</Text>
  <br />
  <Text fontSize='4xl' as='b' color='RGBA(0, 0, 0, 0.24)' textDecoration={"underline"}>THE SILL</Text>
  <br />
  <Text fontSize='4xl' as='samp' color='RGBA(0, 0, 0, 0.24)'>BURROW</Text>
  <br />
  <Text fontSize='4xl' as='i' color='RGBA(0, 0, 0, 0.24)'>Happy Socks</Text>
  <br />
  <Text fontSize='4xl' as='abbr' color='RGBA(0, 0, 0, 0.24)'>DressUp</Text>
  <br />
</Box>
    
    </>
  )
}
