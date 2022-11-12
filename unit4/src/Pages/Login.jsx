import { Box, Button, Checkbox, FormLabel, Image, Input, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import axios from 'axios'

import {Navigate,Link} from "react-router-dom";


export const Login = () => {

  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
const [status,setStatus]=React.useState(false);

const getData={
  email:email,
  password:password
 }
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
    return <Navigate to="/"/>
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
  <Input onClick={handleLogin} m={5} bg="black" color={"white"} 
    type="submit" value="Log in"/>


  </div>
)
 }










  






    




//   </GridItem>
//   <GridItem colStart={3} colEnd={6} h='10' w="400px">
// <Heading>REGISTER</Heading>
// <Tag bg="transparent" m={5}>If you still don't have a Zara.com account, use this option to access the registration form.</Tag>
// <Tag bg="transparent" ml="25px">By giving us your details, purchasing in Zara.com will be faster and an enjoyable experience.</Tag>
// <Link to="/register">
// <Input w="300px" mt={100} bg="black" color={"white"} type="submit" value="REGISTER"/>
// </Link>

//   </GridItem>
// </Grid>
   
// <Box mt="250px">
// <Footer/>
// </Box>
   

//         </>
//     )
// }
// export default Login;