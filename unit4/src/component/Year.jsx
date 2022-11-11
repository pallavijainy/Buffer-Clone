import { Box, Flex, Grid, Heading, Text } from '@chakra-ui/react'
import React from 'react'

export const Year = () => {

const obj=[
    {
        id:1,
        Year:"10 years",
        small:"in business"
    },
    {
        id:2,
        Year:"140,000",
        small:"users"
    },
    {
        id:3,
        Year:"100k+",
        small:"monthly blog readers"
    },
    {
        id:4,
        Year:"1.2m+",
        small:"social followers"
    }
]


  return (

<Grid gridTemplateColumns={{sm:"repeat(1,1fr)",md:"repeat(1,1fr)",lg:"repeat(4,1fr)"}} marginTop={20}>
{
    obj.map((el)=>(
<Box>
<Heading as='h2' size='2xl' color={"blue"}>
{el.Year}
  </Heading>
  <Text fontSize='xl'>{el.small}</Text>
</Box>
    ))
}


</Grid>
  )
}
