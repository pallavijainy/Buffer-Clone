//
import React, { useState } from "react";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  Stack,
  Tag,
  Text,
} from "@chakra-ui/react";
import Logo from "../component/Image/PostAdda.png";
import { Link } from "react-router-dom";
import axios from "axios";
import { Navigate } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = React.useState(false);
  

  const getData = {
    email: email,
    password: password,
  };
  const handleLogin=()=>{
      return axios({
          method:"GET",
    
          url:`http://localhost:3000/posts`,
          data:getData
      }).then((res)=>{
       checkcredentials(res.data)
    
    })
    
    }

    const checkcredentials=(data)=>{
        let filtered=data.filter((el)=>{
          return el.email===email && el.password===password
        })
        return finalcheck(filtered)
      }
      
      const finalcheck=(filtered)=>{
        if(filtered.length>0){
        alert("login successfull")
       setStatus(true)
         } else{
        alert("login failed")
         }
      }
      if(status===true)
         {
          return <Navigate to="/publish"/>
         }
  

  

  return (
    <>
      <Box display={{ lg: "flex" }}>
        <Box width={"40%"} margin={"auto"}>
          <Flex flex={{ base: 1 }} justify={{ md: "start" }}>
            <Image boxSize="150px" src={Logo} alt="logo" />

            <Heading as="h1" size="2xl">
              <Link to={"/"}>Post</Link>
            </Heading>
            <Image boxSize="50px" src={Logo} alt="logo" />
            <Heading size="2xl">dda</Heading>
          </Flex>
          <FormControl margin={"auto"} width={{sm:"100%",md:"100%",lg:"70%"}}>
            <Stack>
              <Heading textAlign={"left"} size={"2xl"}>
                Log in
              </Heading>
              <FormLabel>Email Address</FormLabel>
              <Input
                type="email"
                size="lg"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                size="lg"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

          

              <Input onClick={handleLogin} m={5} bg="#2c4bff" color={"white"}  size="lg"
    type="submit" value="Log in"/>



              <Box display={{ sm: "grid", md: "grid", lg: "flex" }}>
                <Tag bg="transparent" m={5}>
                  I agree to Buffer's Terms of Service
                </Tag>
                <Tag bg="transparent" m={5}>
                  Already have an account?
                </Tag>
              </Box>
              <Stack spacing={30}>
                <Tag bg="transparent" m={5} mt={10}>
                  We no longer support social sign on. Please click here to set
                  your password and access your account.
                </Tag>
                <Box textAlign={"center"}>
                  <Tag bg="transparent" m={5}>
                    Terms of Service •Privacy Policy •Security
                  </Tag>
                </Box>
              </Stack>
            </Stack>
          </FormControl>
        </Box>
        <Box backgroundColor={"yellow"} height={"700px"} width={"80%"} display={{base:"none",sm:"none",md:"none",lg:"block"}}>
          <Box textAlign={"left"} width={"450px"} mt={"80px"} ml={"80px"}>
            <Stack>
              <Button
                backgroundColor={"white"}
                variant={"outline"}
                width={"200px"}
                color={"brown.400"}
                size="sm"
                borderRadius={"25px"}
              >
                New from Buffer
              </Button>
              <Heading as="h2" size="xl">
                Introducing: A free micro-site by Buffer
              </Heading>
              <Text fontSize="xl">
                A Start Page is a beautiful, flexible, mobile-friendly landing
                page that you can build in minutes and update in seconds
              </Text>
            </Stack>
          </Box>
          <Image
            ml={"300px"}
            height={400}
            src="https://login.buffer.com/img/sp-login-image.png"
          ></Image>
        </Box>
      </Box>
    </>
  );
};
