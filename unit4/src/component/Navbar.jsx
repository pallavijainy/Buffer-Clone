
import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "./Image/PostAdda.png"

import {
  useDisclosure,
  MenuItem,
  Menu,
  MenuButton,
  MenuList,
  useColorModeValue,
  Box,
  Heading,
  Text,
  Flex,
  ButtonGroup,
  Button,
  Image,
  WrapItem,
  HStack,

} from "@chakra-ui/react";
import { ChevronDownIcon} from "@chakra-ui/icons";
import CallMadeIcon from "@mui/icons-material/CallMade";
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import DriveFileRenameOutlineOutlinedIcon from '@mui/icons-material/DriveFileRenameOutlineOutlined';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import {Ncomponent} from "../component/Ncomponent"
export function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
    <Box p={6} display="flex" justifyContent="space-around"  >
    <Image  boxSize="200px" src={Logo} alt='logo'/>
    <Flex minWidth='max-content' alignItems='center'>
  <Heading as='h1' size='2xl'>Post</Heading>
      <Image  boxSize="50px" src={Logo} alt='logo'/>
  <Heading size='2xl'>dda</Heading>
  <Box p='2'>
  <Flex gap={30}>
    <Menu isOpen={isOpen}>
      <MenuButton
        variant="ghost"
        mx={1}
        py={[1, 2, 2]}
        px={4}
        borderRadius={5}
        _hover={{ bg: useColorModeValue("gray.100", "gray.700") }}
        aria-label="Courses"
        fontWeight="normal"
        fontSize={20}
        onMouseEnter={onOpen}
        onMouseLeave={onClose}
      >
        Tools <ChevronDownIcon />
      </MenuButton>
      <MenuList onMouseEnter={onOpen} onMouseLeave={onClose}>
        <Box p={5} boxShadow='dark-lg'>
          
          <MenuItem>
          <CallMadeIcon />
          <Box p={2} gap={2} >
          <Heading as="h3" size="md">Publishing</Heading>
            <Box width={"200px"}>

            <Text fontSize='sm'>Plan, collaborate, and publish thumb-stopping content</Text>

            </Box>


          </Box>
       
          </MenuItem>


          <MenuItem>
          <SignalCellularAltIcon/>
          <Box p={2} gap={2} >
          <Heading as="h3" size="md">Analytics</Heading>
            <Box width={"200px"}>

            <Text fontSize='sm'>Analyze social media performance and create reports</Text>


           

            </Box>


          </Box>
       
          </MenuItem>


          <MenuItem>
          <MessageOutlinedIcon />
          <Box p={2} gap={2} >
          <Heading as="h3" size="md">Engagement</Heading>
            <Box width={"200px"}>

            <Text fontSize='sm'>Quickly navigate your comments and engage with your audience</Text>

            </Box>


          </Box>
       
          </MenuItem>


          <MenuItem>
          <DriveFileRenameOutlineOutlinedIcon />
          <Box p={2} gap={2} >
          <Heading as="h3" size="md">Start Page</Heading>
            <Box width={"200px"}>

            <Text fontSize='sm'>Build a customized landing page in minutes</Text>

            </Box>


          </Box>
       
          </MenuItem>



        </Box>

       
      </MenuList>
    </Menu>

{/* // --------------------------------------------------------- */}


   
    <Ncomponent/>
    <Box fontSize={20}>
    <Link to={"/pricing"} >Pricing</Link>
    </Box>
    <Box fontSize={20}>
  <Link to={"/resources"}>Blog</Link>
  </Box>
  <Box fontSize={20}>

 <Link to={"/about"}>About</Link>
 </Box>
 <Box fontSize={20}>
 <Link to={"/case-studies"}>Customers</Link>
 </Box>
 <Box fontSize={20} color="blue">
 <Link to={"/login"} >Login</Link>
 </Box>

 <WrapItem>
      <Button colorScheme='messenger' fontSize={20}>Get started now</Button>
    </WrapItem>

    </Flex>
   


   
    
   
    {/* ******************************************************************************** */}

  
   </Box>
  

 </Flex>
 </Box>





    </>
    



  );
}


