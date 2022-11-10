import { Box, Button, Grid, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import ShopIcon from '@mui/icons-material/Shop';
import AppleIcon from '@mui/icons-material/Apple';
import FiberNewIcon from '@mui/icons-material/FiberNew';

export const Footer = () => {
  return (
    <Box display={"flex"} justifyContent={"space-around"} margin={"auto"} backgroundColor={"white"} height={"500px"} p={10} mt={20}>
<Box >
<Grid>
    <Box>
    <Heading as='h2' size='3xl' noOfLines={1}>
    Post Adda
  </Heading>

    </Box>
<Box  display={"flex"} gap={4} mt={40} >
    <InstagramIcon/>
    <FacebookIcon/>
<TwitterIcon/>
<PinterestIcon/>
<Box display={"flex"} gap={4}>
<Image
                boxSize="25px"
                src="data:image/png;base64,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"
                alt="tiktok"
                />

<Image
                boxSize="20px"
                src="data:image/png;base64,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"
                alt="Dan Abramov"
                />

</Box>


</Box>

<Box alignItems={"left"} mt={10}>
<Heading as='h5' size='sm'>
Download
  </Heading>

  <Button leftIcon={<AppleIcon/>} colorScheme="blue" variant='outline' borderRadius={"25PX"} marginRight={3} mt={2}>
    App Store
  </Button>

  <Button leftIcon={<ShopIcon/>} colorScheme="blue" variant='outline'  borderRadius={"25PX"}>
    Google Play
  </Button>

  <Text mt={5} fontSize={"15px"}>Copyright ©2022 Buffer|Privacy|Terms|Security</Text>


</Box>

</Grid>

</Box>



{/* -----------------************************--------------------------------- */}

<Box textAlign={"left"}>

  <Stack>
  <Heading as='h3' size='lg'>
Tools
  </Heading>
  <Text fontSize={"20px"}>Publishing</Text>
  <Text fontSize={"20px"}>Analytics</Text>
  <Text fontSize={"20px"}>Engagement</Text>
  <Text fontSize={"20px"}>
      <FiberNewIcon/>
Start Page</Text>
  <Text fontSize={"20px"}>Extras</Text>
  </Stack>
  
</Box>

<Box textAlign={"left"}>
    <Stack>

    <Heading as='h3' size='lg'>
Resources
  </Heading>
  <Text fontSize={"20px"}>Blog</Text>
  <Text fontSize={"20px"}>Content Library</Text>
  <Text fontSize={"20px"}>Browser Extension</Text>
  <Text fontSize={"20px"}>Free Image Editor</Text>
    </Stack>

</Box>

<Box textAlign={"left"}>
    <Stack>
    <Heading as='h3' size='lg'>
Support
  </Heading>
  <Text fontSize={"20px"}>Help Center</Text>
  <Text fontSize={"20px"}>Status</Text>
  <Text fontSize={"20px"}>Changelog</Text>
  <Text fontSize={"20px"}>Product Roadmap</Text>

    </Stack>

</Box>

<Box textAlign={"left"}>
    <Stack>
    <Heading as='h3' size='lg'>
Company
  </Heading>
  <Text fontSize={"20px"}>About</Text>
  <Text fontSize={"20px"}>Transparency</Text>
  <Text fontSize={"20px"}>Careers</Text>
  <Text fontSize={"20px"}>Accessibility</Text>
  <Text fontSize={"20px"}>Press</Text>
  <Text fontSize={"20px"}>Sitemap</Text>

    </Stack>

</Box>




    </Box>
  )
}
