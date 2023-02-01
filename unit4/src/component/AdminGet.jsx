import { Avatar, Box, Grid, Heading, Stack, Text, WrapItem } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";


export const AdminGet = () => {
  const [data, setShow] = useState([]);

  useEffect(() => {
    axios
      .get("https://buffer-deploy-link-pallavijainy.vercel.app/profile")
      .then((res) => {
        console.log(res.data);
        setShow(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <Box width={"800px"} ml={{sm:0,md:0,lg:"25%"}} display="grid" gridTemplateColumns={{sm:"repeat(2,1fr)",md:"repeat(2,1fr)",lg:"repeat(3,1fr)"}} gap={5} >
       
        {data.map((el) => (
          <Box key={el.id} border={"1px solid grey"}  boxShadow='dark-lg' p='6' rounded='md' bg='white'>
            <Grid>
<Box>
  <Stack>
  <WrapItem>
    <Avatar name='Dan Abrahmov' src={el.url} ml={"40%"}/>
  </WrapItem>
  <Heading as='h3' size='lg'>
    {el.title}
  </Heading>
  <Text color='grey'  fontSize='md'>{el.category}</Text>
  <Heading as='h6' size='xs'>
    {el.gender}
  </Heading>
  <Heading as='h6' size='xs'>
    {el.price}
  </Heading>

  </Stack>



</Box>
           
            </Grid>
            

          </Box>
        ))}
      </Box>
     
    </div>
  );
};
