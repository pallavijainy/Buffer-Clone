import { Box, Button, Checkbox, FormLabel, Image, Input, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import axios from 'axios'

export const Login = () => {

  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")

const handleClick=()=>{
 
}



  return (
    <div>

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


    </div>
  )
}
