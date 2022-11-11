import { Box, Grid, Heading, Image } from '@chakra-ui/react'
import React from 'react'

export const DownLogos = () => {
  return (
    <>
    <Grid>
    <Box marginTop={"180px"}>
    <Heading as='h1' size='md'>
    An official marketing partner of the industry leaders
  </Heading>
    </Box>
        <Box display={"flex"} justifyContent={"center"} marginTop={"25px"}>
    <Box display={{sm:"grid",md:"grid",lg:"flex"}} justifyContent={"space-around"} width={"600px"} gap={10}>
        <Image boxSize={"60px"} width={"150px"} src='https://buffer.com/static/ui/meta-business-partner@2x-2.png'></Image>
        <Image boxSize={"60px"} width={"150px"} src='https://buffer.com/static/ui/pinterest-marketing-partner@2x-2.png'></Image>
        <Image boxSize={"60px"} width={"150px"} src='https://buffer.com/static/ui/linkedin-marketing-partner@2x-2.png'></Image>


        </Box>
      
    </Box>

    </Grid>
    </>
  )
}
