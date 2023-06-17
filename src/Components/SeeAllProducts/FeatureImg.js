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

export default function FeatureImg() {
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


    >
      <Image
        objectFit='cover'
        maxW={{ base: '100%', sm: '400px' }}
        src="https://salinaka-ecommerce.web.app/images/banner-guy.fbf4f0f7396fe31ca288dc1dd9822342.png"
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
          <Button variant='solid' colorScheme='blue'  marginTop={"-100px"} p={"1.5rem"}>
            Shop now
          </Button>
        </CardFooter>
      </Stack>
    </Card>
  )
}
