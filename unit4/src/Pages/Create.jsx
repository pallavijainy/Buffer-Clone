import React, { useState } from 'react'
import {Box, Button, Checkbox, Flex, FormControl, FormLabel, Heading, Image, Input, Stack, Text} from "@chakra-ui/react"
import Logo from "../component/Image/PostAdda.png"
import {Link} from "react-router-dom";
import axios from "axios";

export const Create = () => {

  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")

const handleClick=()=>{
 axios.post(`https://reqres.in/api/register`,{
   email:email,password:password
 }).then((res)=>console.log(res.data)).catch((err)=>console.log(err))
}


  return (
    <>
    <Box display={"flex"}>
      <Box width={"60%"} margin={"auto"} >
      <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }} >
        <Image  boxSize="150px" src={Logo} alt='logo'/>

        <Heading as='h1' size='2xl'><Link to={"/"} >Post</Link></Heading>
    <Image  boxSize="50px" src={Logo} alt='logo'/>
<Heading size='2xl'>dda</Heading>
</Flex>
      <FormControl width={"50%"} margin={"auto"} >
        <Stack>
        <Heading textAlign={"left"} >Let's get your account set up</Heading>
  <FormLabel>Email</FormLabel>
  <Input type='email' size='lg' value={email} onChange={(e)=>setEmail(e.target.value)}/>
  <FormLabel>Create a Password</FormLabel>
  <Input type='password' size='lg' value={password} onChange={(e)=>setPassword(e.target.value)}/>
  <Box border={"1px solid grey"} display={"flex"} justifyContent={"space-around"} width="400px" >
  <Checkbox defaultChecked>I'm not a robot</Checkbox>
  <Box>
  <Image src='https://www.gstatic.com/recaptcha/api2/logo_48.png'/>
  <Text fontSize='sm'>reCAPTCHA</Text>
  <Text fontSize='xs'>Privacy - Terms</Text>
  </Box>
  
  </Box>
  <Button colorScheme='blue' variant='outline' onClick={handleClick}>
   Sign Up
  </Button>
  </Stack>
</FormControl>
      </Box>
      <Box backgroundImage={"https://static.buffer.com/login/public/img/signup-bkg-publish.png"} height={"700px"}width={"40%"}>
         
      </Box>
    </Box>
    </>
  )
}
