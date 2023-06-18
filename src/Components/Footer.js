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

        <Flex  bg={"linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(54,42,120,1) 43%, rgba(39,11,183,1) 48%, rgba(0,212,255,1) 100%);"}  justify={"space-between"} >
          
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
