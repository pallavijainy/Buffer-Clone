import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  
  useDisclosure,
  Heading,
  Image,
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons';
import CallMadeIcon from '@mui/icons-material/CallMade';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import DriveFileRenameOutlineOutlinedIcon from '@mui/icons-material/DriveFileRenameOutlineOutlined';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import GoogleIcon from "@mui/icons-material/Google";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import Logo from "./Image/PostAdda.png"
import { Link, NavLink } from 'react-router-dom';


export function Navbar() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box>
      <Flex
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}>
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}>
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
        <Image  boxSize="150px" src={Logo} alt='logo'/>

        <Heading as='h1' size='2xl'><Link to={"/"} >Post</Link></Heading>
    <Image  boxSize="50px" src={Logo} alt='logo'/>
<Heading size='2xl'>dda</Heading>


          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={6}>
         <Box fontSize={20} color="blue" >
<Link to={"/login"} >Login</Link>
</Box>
<Box fontSize={20} color="blue" >
<Link to={"/adminlogin"} >Admin</Link>
</Box>
          <Button
            display={{ base: 'none', md: 'inline-flex' }}
            fontSize={20}
            fontWeight={600}
            color="white"
            bg={'blue'}
            href={'#'}
            _hover={{
              bg: 'pink.300',
            }}>
              <Link to={"/create"} >Get started now</Link>
            
          </Button>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue('black.600', 'gray.200');
  const linkHoverColor = useColorModeValue('gray.800', 'white');
  const popoverContentBgColor = useColorModeValue('white', 'gray.800');

  return (
    <Stack direction={'row'} spacing={4} marginTop={"47px"} color={"black"}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'} >
            <PopoverTrigger >
              {/* <Link
                p={2}
                href={navItem.href}
                fontSize={20}
                fontWeight="normal"
                color={linkColor}
                _hover={{
                  textDecoration: 'underline',
                  color: "blue",
                
        
                }}>
                {navItem.label} {navItem.pal}
              </Link> */}

<NavLink style={{fontSize:"20px" , marginLeft:"20px" }} to={navItem.href}>{navItem.label} {navItem.pal}</NavLink>


            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={'dark-lg'}
                bg={popoverContentBgColor}
                p={5}
                rounded={'xl'}
                minW={'md'}>
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel,img,image }: NavItem) => {
  return (
    <Link
      href={href}
      role={'group'}
      display={'block'}
      p={2}
      rounded={'md'}
      _hover={{ bg: useColorModeValue('pink.50', 'black') }}>
      <Stack direction={'row'} align={'center'}>
        <Box display={"flex"}>
          {img}
          {image}
          <Box p={2} gap={2}>
          <Heading
         as="h3" size="md"  fontSize={20}
            transition={'all .3s ease'}
            _groupHover={{ color: 'pink.400' }}
            fontWeight={500}>
            {label}
          </Heading>
          <Box width={"300px"}>
          <Text fontSize={'sm'}>{subLabel}</Text>
          </Box>
          </Box>
        </Box>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify={'flex-end'}
          align={'center'}
          flex={1}>
          <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      p={4}
      display={{ md: 'none' }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href}
        justify={'space-between'}
        align={'center'}
        >
        <Text
          fontWeight={600}
          color={useColorModeValue('gray.600', 'gray.200')}>
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}>
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'Tools',
    pal: <ChevronDownIcon/>,
    children: [
      {
        label: 'Publishing',
        subLabel: 'Plan, collaborate, and publish thumb-stopping content',
        href: '/publishing',
        img:  <CallMadeIcon />
      },
      {
        label: 'Analytics',
        subLabel: 'Analyze social media performance and create reports',
        href: '#',
        img: <SignalCellularAltIcon/>
      },
      {
          label: 'Engagement',
          subLabel: 'Quickly navigate your comments and engage with your audience',
          href: '#',
         img: <MessageOutlinedIcon />

      },
      {
        label: 'Start Page',
        subLabel: 'Build a customized landing page in minutes',
        href: '#',
        img:  <DriveFileRenameOutlineOutlinedIcon />
    }
    ],
  },
  {
    label: 'Channel',
    pal: <ChevronDownIcon/>,
    children: [
      {
        label: ' Facebook',
        img: <FacebookOutlinedIcon />
      
      },
      {
        label: ' Google Business Profile',
       img:   <GoogleIcon />

      },
      {
        label: 'Instagram',
       img:    <InstagramIcon />

      },
      {
        label: 'LinkdIn',
       image: <Image
       boxSize="20px"
       src="data:image/png;base64,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"
       alt="Dan Abramov"
     />
      },
      {
        label: ' Pinterest',
       img: <PinterestIcon />
      },
      {
        label:'Shopify',
        image:  <Image
        boxSize="20px"
        src="data:image/png;base64,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"
        alt="shopify"
      />
      },
      {
        label:' TikTok',
        image:   <Image
        boxSize="20px"
        src="data:image/png;base64,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"
        alt="tiktok"
      />
      },
      {
        label:'Twitter',
        img : <TwitterIcon />
      }
    ],
  },
  {
    label: 'Pricing',
    href: '/pricing',
  },
  {
    label: 'Blog',
    href: '/resources',
  },
  {
    label: 'About',
    href: '/about',
  },
  {
    label: 'Customers',
    href: '/case-studies',
  },
 
];