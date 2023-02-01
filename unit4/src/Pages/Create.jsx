import React, { useState } from 'react'
import {Avatar, Box, Button, Checkbox, Flex, FormControl, FormLabel, Heading, Image, Input, Stack, Tag, Text, WrapItem} from "@chakra-ui/react"
import Logo from "../component/Image/PostAdda.png"
import {Link} from "react-router-dom";
import axios from "axios";
import {Navigate} from "react-router-dom";

export const Create = () => {

  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
const [status,setStatus]=React.useState(false);
 const [token,setToken]=React.useState("")

const getData={
   
  email:email,
  password:password,
  
 
 }

 const handleClick=()=>{
      return axios({
          method:"POST",
            
            url:`https://buffer-deploy-link-pallavijainy.vercel.app/posts`,
          data:getData
      }).then((res)=>{
  console.log(res)
  setToken(Date.now())
  alert("Sign up successfull")
  setStatus(true)
      })
      .catch((err)=>{
          setStatus(false)
          console.log(err)
          console.log("something went wrong")
      })
  }
  
  if(status===true)
     {
     return <Navigate to="/login"/>
     }
  


  return (
    <>
    <Box display={{lg:"flex"}}>
      <Box width={"60%"} margin={"auto"} >
      <Flex flex={{ base: 1 }} justify={{md: 'start' }} >
        <Image  boxSize="150px" src={Logo} alt='logo'/>

        <Heading as='h1' size='2xl'><Link to={"/"} >Post</Link></Heading>
    <Image  boxSize="50px" src={Logo} alt='logo'/>
<Heading size='2xl'>dda</Heading>
</Flex>
      <FormControl width={{sm:"80%",md:"80%",lg:"55%"}} margin={"auto"} >
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
  <Box display={{sm:"grid",md:"grid",lg:"flex"}}>
  <Tag bg="transparent" m={5}>I agree to Buffer's Terms of Service</Tag>
  <Tag bg="transparent" m={5}>Already have an account?</Tag>

  </Box>
 
  </Stack>
</FormControl>
      </Box>
      <Box backgroundImage={"https://static.buffer.com/login/public/img/signup-bkg-publish.png"} height={"700px"}width={"40%"} display={{base:"none",sm:"none",md:"none",lg:"block"}}>
        <Box mt={"200px"} width={"500px"} ml={20}>
        <Heading as='h2' size='lg' color={"white"} >
      “With Buffer I can build social content out as far as I want into the future but also tailor campaigns if we see certain trends within the industry.”
  </Heading>

        </Box>
      
  <Box mt={10}>
  <WrapItem>
    <Avatar size='xl'
    ml={60}
      name='Prosper Otemuyiwa'
      src='https://static.buffer.com/login/public/img/signup-avatar-publish.png'
    />{' '}
  </WrapItem>

  <Heading as='h5' size='sm'>
  Justin Ozanich


  </Heading>
  <Text fontSize='md'>Marketing Manager</Text>
  <Text fontSize='md'>Foster Coffee Company</Text>
  </Box>
      </Box>
    </Box>
    </>
  )
}


