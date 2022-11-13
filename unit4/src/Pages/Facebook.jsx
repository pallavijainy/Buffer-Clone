import { Box, Image } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Demo } from "../component/Demo";
import story from "../component/Image/facebook.jpeg";

export const Facebook = () => {
  const [show, setShow] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/comments")
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
      <Box width={"800px"} ml={"25%"}>
        <Image width={"100%"} src={story}></Image>
        {show.map((el) => (
          <Demo
            username={el.title}
            comment={el.category}
            like={el.gender}
            caption={el.price}
            url={el.url}

          />
        ))}
      </Box>
    </div>
  );
};
