import React, { useState } from "react";
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Radio,
  RadioGroup,
  Select,
  useDisclosure,
} from "@chakra-ui/react";

import axios from "axios";
import { AdminGet } from "./AdminGet";

const AddChannel = () => {
  // TODO: Remove below const and instead import them from chakra
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [input, setInput] = useState("");
  const [type, setType] = useState("");
  const [gender, setGender] = useState("");
  const [price, setPrice] = useState("");
  const [src, setSrc] = useState("");

  const handleClick = () => {
    axios
      .post(`https://buffer-deploy-link-pallavijainy.vercel.app/profile`, {
        title: input,
        category: type,
        gender: gender,
        price: price,
        url: src,
      })
      .then((res) => {
        console.log(res);
        alert("New Channel Added")
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
    
      <Button my={4} data-cy="add-product-button"  bg={"blue"} color={"white"} onClick={onOpen}>
      ADD MORE CHANNELS
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} variant={Modal}>
       
     
        <ModalContent bg={"white"}>
      
          <ModalHeader>Create New Post</ModalHeader>
          <ModalBody pb={6}>
            <label>Channel Name</label>
            <Input
              data-cy="add-product-title"
              placeholder="Channel Name"
              onChange={(e) => setInput(e.target.value)}
              value={input}
            />
            <label>About</label>
            <Select
              data-cy="add-product-category"
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <option data-cy="add-product-category-shirt" value={"page"}>
              page
              </option>
              <option data-cy="add-product-category-pant" value={"Business account"}>
            Business account
              </option>
              <option data-cy="add-product-category-jeans" value={"Account"}>
              Account
              </option>
              <option data-cy="add-product-category-jeans" value={"Page or Group"}>
              Page or Group
              </option>
              <option data-cy="add-product-category-jeans" value={"Profile"}>
              Profile
              </option>
              <option data-cy="add-product-category-jeans" value={"Page or Profile"}>
              Page or Profile
              </option>
              <option data-cy="add-product-category-jeans" value={"Store"}>
              Store
              </option>

            </Select>



            <label>Choice to create/connent</label>
            <RadioGroup
              data-cy="add-product-gender"
              value={gender}
              onChange={setGender}
            >
              <Radio data-cy="add-product-gender-male" value={"Create"}>
              Create
              </Radio>
              <Radio data-cy="add-product-gender-female" value={"Connect"}>
              Connect
              </Radio>
             
            </RadioGroup>
            <label>More Info</label>
            <Input
              data-cy="add-product-price"
              placeholder="Learn more"
              onChange={(e) => setPrice(e.target.value)}
              value={price}
            />
            <label>Channel Icon</label>
            <Input
              data-cy="Image_url"
              placeholder="Image_url"
              onChange={(e) => setSrc(e.target.value)}
              value={src}
            />

            <Button
              data-cy="add-product-submit-button"
              colorScheme="blue"
              mr={3}
              onClick={handleClick}
            >
              ADD
            </Button>
            <Button onClick={onClose}>close</Button>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddChannel;
