import React from "react";
import {
  Box,
  Flex,
  Input,
  Button,
  IconButton,
  ChakraProvider,
  Link,
  Card,
  Image,
  Stack,
  CardBody,
  Heading,
  Text,
  CardFooter,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { FcShop } from "react-icons/fc";
import { right } from "@popperjs/core";
import { useNavigate } from "react-router-dom";

export default function NavPhoto() {

  const navigate = useNavigate();
  const shopNowHandler = ()=>(
        navigate("/shoppingcart")
  )
  return (
    <Card
      direction={{ base: 'column', sm: 'row' }}
      overflow='hidden'
      variant='outline'
      width={{ base: '200', sm: '88%' }}
      height="450px"
      marginLeft={"5rem"}
      marginRight={"5rem"}
      marginTop={"2rem"}
bg={"linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(241,7,7,1) 49%, rgba(252,176,69,1) 100%);"}

    >
      <Image
        objectFit='cover'
        maxW={{ base: '100%', sm: '400px' }}
        src="https://salinaka-ecommerce.web.app/images/banner-girl.789f1fa6f451ad26c5039fcbc049ace7.png"
        alt='Caffe Latte'
      />

      <Stack>
        <CardBody> 
            <Text fontSize="4rem">
              <span fontSize="4rem" marginTop="8rem"><b>See</b> everything</span>
              <Text>
                <span><b>With clarity</b></span>
              </Text>
            </Text>
          
          <Text py='2' textAlign='justify'>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, ipsum. At consequatur, labore accusantium odit quia consectetur tempore quisquam quaerat nesciunt nihil eveniet corrupti dolorem vel accusamus odio pariatur quam.
          </Text>
        </CardBody>

        <CardFooter>
          <Button variant='solid' colorScheme='blue'  marginTop={"-100px"} p={"1.5rem"} onClick={shopNowHandler}>
            Shop now
          </Button>
        </CardFooter>
      </Stack>
    </Card>
  )
}
