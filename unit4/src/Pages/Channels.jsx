import { ReactNode } from "react";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Stack,
  Image,
  useDisclosure,
  useColorModeValue,
  Heading,
  
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import Logo from "../component/Image/PostAdda.png";
import { HamburgerIcon, CloseIcon, AddIcon } from "@chakra-ui/icons";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import AppsIcon from "@mui/icons-material/Apps";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import Settings from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";


const Links = ["Publishing", "Analytics", "Engagement", "Start Page"];

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={"#"}
  >
    {children}
  </Link>
);

export default function Channels() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  var user=JSON.parse(localStorage.getItem("userName"))
  let name=user.email


  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box>
              <Flex flex={{ base: 1 }} justify={{ md: "start" }}>
                <Heading as="h1" size="xl">
                  <Link to={"/"}>Post</Link>
                </Heading>
                <Image boxSize="50px" src={Logo} alt="logo" />
                <Heading size="xl">dda</Heading>
              </Flex>
            </Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link) => (
                <NavLink key={link}>
                  <Heading size={"md"}>{link}</Heading>
                </NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
          

            <Button size={"sm"} mr={4} >
                <PersonIcon/>
            Invite Your Team
            </Button>

            <Button size={"sm"} mr={4} leftIcon={<KeyboardArrowDownIcon />}>
              Apps
            </Button>
            <Button size={"sm"} mr={4} leftIcon={<KeyboardArrowDownIcon />}>
              Help
            </Button>

            <Button
              variant={"solid"}
              colorScheme={"teal"}
              size={"sm"}
              mr={4}
              leftIcon={<AddIcon />}
            >
              {name}
            </Button>

            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <AccountCircleIcon />
              </MenuButton>
              <MenuList>
                <MenuItem>
                  <PersonIcon />
                  Account
                </MenuItem>
                <MenuItem>
                  <SettingsIcon />
                  My Preferences
                </MenuItem>
                <MenuItem>
                  <AppsIcon />
                  Channels
                </MenuItem>
                <MenuItem>
                  <PersonIcon />
                  Team
                </MenuItem>
                <MenuDivider />
                <MenuItem>
                  <PersonIcon />
                  Inviter Your Team
                </MenuItem>
                <MenuDivider />
                <MenuItem>
                  <LogoutIcon />
                  <Link to={"/"}>Logout</Link>
                </MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>

      <Box p={4}>


      <Box bg='rgb(18, 30, 102)' w='100%' p={3} color='white' textAlign={"center"}>
      You are on the Essentials plan with Team pack trial with 10 days left. Add your billing details now to start your subscription.
      <Button color={"white"} bg={"blue"} ml={5}>Start Subsicription</Button>

     



</Box>

<Box bg='rgb(255, 198, 171)' w='100%' p={3} color='brown' textAlign={"center"}>
Verify your email: An email has been sent to your inbox to verify your email address. You can visit our help guide for more info.
      <Button color={"white"} bg={"rgb(102, 45, 18)"}  ml={5}>Re-send verification email</Button>

      </Box>


<Heading>Already LogedIn Channels</Heading>

<Box border={"1px solid grey"}  boxShadow='dark-lg' p='6' rounded='md' bg='white'>
<InstagramIcon />
<Box p={2} gap={2}>
                   <Heading as="h5" size="md">
                   <Link to={"/instagram"}>Instagram</Link>
               
                 </Heading>
              </Box>
</Box>
           
            
<Box border={"1px solid grey"}  boxShadow='dark-lg' p='6' rounded='md' bg='white'>
<FacebookIcon />
<Box p={2} gap={2} >
                   <Heading as="h5" size="md">
                   <Link to={"/facebook"}>Facebook</Link>
                 </Heading>
              </Box>
</Box>
          





      </Box>
    </>
  );
}
