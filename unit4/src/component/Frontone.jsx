import { Box, Button, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'

export const Frontone = () => {
  return (
    <>
    <Box display={"flex"} justifyContent={"center"} p={5} mt={"120px"} >
        <Box>
        <Box maxW='32rem' textAlign={"left"} mt={"100px"}>
  <Heading size='md'  mb={4} color="blue">1. SHARE CLICK-WORTHY CONTENT</Heading>
  <Heading mb={4}>Get the clicks you deserve</Heading>
  <Text fontSize='2xl'>
  Buffer will tell you when and what to publish to make your content stand out.
  </Text>
  <Button size='lg' colorScheme='messenger' mt='24px'>
    Get started now
  </Button>
</Box>
        </Box>
        <Box>
            <Image boxSize={500} src="https://buffer.com/static/illustrations/thumb-stop-content-2.webp"></Image>
        </Box>
    </Box>


{/* // -----------************************--------------- */}


<Box display={"flex"} justifyContent={"center"} p={5} mt={"120px"} gap={3}>

<Box maxW='32rem' >
    <Image src="https://buffer.com/static/illustrations/collaborate-more-efficiently@2x.webp"></Image>
</Box>

<Box>
<Box maxW='32rem' textAlign={"left"} >
<Heading size='md' mt={5}  mb={4} color="blue">2. BUILD AN ENGAGED AUDIENCE</Heading>
<Heading mb={4} mt={"5"}>Grow your following</Heading>
<Text fontSize='2xl' mt={10}>
Buffer will share your content on the right channels, with suggested hashtags to help you grow.
</Text>
<Button size='lg' colorScheme='messenger' mt='10' >
Get started now
</Button>
</Box>
</Box>
</Box>

{/* ---------------------***************************--------------------- */}

<Box display={"flex"} justifyContent={"center"} p={5} mt={"120px"} >
        <Box>
        <Box maxW='32rem' textAlign={"left"} mt={"100px"}>
  <Heading size='md'  mb={4} color="blue">3. SAVE TONS OF TIME</Heading>
  <Heading mb={4}>Halve your workload</Heading>
  <Text fontSize='2xl'>
  Buffer will publish everything for you to save time and it’ll showcase your work with automated reports.
  </Text>
  <Button size='lg' colorScheme='messenger' mt='24px'>
    Get started now
  </Button>
</Box>
        </Box>
        <Box maxW='32rem'>
            <Image src="https://buffer.com/static/illustrations/hero-reply@2x-2.webp"></Image>
        </Box>
    </Box>


    </>
    



  )
}
