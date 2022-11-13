import {
  Box,
  Button,
  Grid,
  Heading,
  Image,
  Stack,
  Text,
  WrapItem,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import PlayCircleOutlinedIcon from "@mui/icons-material/PlayCircleOutlined";
import { Link } from 'react-router-dom'
import { AuthContext } from '../Context/AuthContext'

export const MiddleOne = () => {
  const {loginUser,authState}=useContext(AuthContext)
  return (
    <>
      <Box
        display={{ sm: "gird", md: "grid", lg: "flex" }}
        p={20}
        gap={10}
        justifyContent={{
          base: "center",
          sm: "center",
          md: "center",
          lg: "center",
        }}
      >
        <Box width={{ md: "auto", lg: 600 }} textAlign="left" mt={20}>
          <Stack spacing={8}>
            <Heading size={{ sm: "2xl", md: "2xl", lg: "3xl" }}>
              Grow your audience on social and beyond
            </Heading>
            <Text fontSize="2xl">
              Buffer helps you build an audience organically. We’re a
              values-driven company that provides affordable, intuitive,
              marketing tools for ambitious people and teams.
            </Text>

            <WrapItem
              gap={{ lg: 10, sm: 5 }}
              display={{ base: "grid", sm: "grid", md: "grid", lg: "flex" }}
              justifyContent={{ base: "center", sm: "center", md: "center" }}
            >
              {authState.isAuth ? (
                <Link to={"/create"}>
                  {" "}
                  <Button
                    colorScheme="messenger"
                    width={{ base: "200px", sm: "200px" }}
                    fontSize={20}
                    p={6}
                  >
                    Get started now
                  </Button>
                </Link>
              ) : (
                <Link to={"/login"}>
                  <Button colorScheme='messenger' width={{base:"200px",sm:"200px"}} fontSize={20} p={6}>Get started now</Button>
                </Link>
              )}

              <Button
                width={{ base: "200px", sm: "200px" }}
                fontSize={20}
                p={6}
                colorScheme={"blue"}
                variant="outline"
              >
                <PlayCircleOutlinedIcon />
                Watch video
              </Button>
            </WrapItem>
          </Stack>
        </Box>
        <Box>
          <Image
            boxSize="500px"
            src="https://buffer.com/static/illustrations/all-channels-3.webp"
          ></Image>
        </Box>
      </Box>

      {/* ***************************************************************** */}

      {/* <Box display={{sm:"grid",md:"flex"}} justifyContent={"space-around"} p={20}> */}
      <Grid
        gridTemplateColumns={{
          sm: "repeat(3,1fr)",
          md: "repeat(3,1fr)",
          lg: "repeat(6,1fr)",
        }}
      >
        <Text
          fontSize={{ sm: "2xl", md: "3xl", lg: "4xl" }}
          as="b"
          color="RGBA(0, 0, 0, 0.24)"
        >
          Huckberry
        </Text>

        <Text
          fontSize={{ sm: "2xl", md: "3xl", lg: "4xl" }}
          as="abbr"
          color="RGBA(0, 0, 0, 0.24)"
        >
          FOOD52
        </Text>

        <Text
          fontSize={{ sm: "2xl", md: "3xl", lg: "4xl" }}
          as="b"
          color="RGBA(0, 0, 0, 0.24)"
          textDecoration={"underline"}
        >
          THE SILL
        </Text>

        <Text
          fontSize={{ sm: "2xl", md: "3xl", lg: "4xl" }}
          as="samp"
          color="RGBA(0, 0, 0, 0.24)"
        >
          BURROW
        </Text>

        <Text
          fontSize={{ sm: "2xl", md: "3xl", lg: "4xl" }}
          as="i"
          color="RGBA(0, 0, 0, 0.24)"
        >
          Happy Socks
        </Text>

        <Text
          fontSize={{ sm: "2xl", md: "3xl", lg: "4xl" }}
          as="abbr"
          color="RGBA(0, 0, 0, 0.24)"
        >
          DressUp
        </Text>
      </Grid>

      {/* </Box> */}
    </>
  );
};
