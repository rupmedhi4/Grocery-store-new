import React from 'react'
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
    VStack,
    HStack
  } from "@chakra-ui/react";

export default function Footer() {

  return (

        <Flex mt={"5rem"}  justify={"space-between"} bg={"blue.700"}>
          
            <Box  p="4">
               <VStack>
               <Text>Hanuman Store</Text>
               <Text>Grocery shop morigaon</Text>
               </VStack>
            </Box>
        <HStack>
             <Box  p="4">
               <VStack>
               <Text> Home</Text>
               
               </VStack>
            </Box>
          
            <Box  p="4">
               <VStack>
               <Text>Contact us</Text>
               </VStack>
            </Box>
            <Box  p="4">
               <VStack>
               <Text>About us</Text>
               </VStack>
            </Box>
        </HStack>
         

          </Flex>
            
       
      
   
  )
}
