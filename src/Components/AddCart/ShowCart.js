import React from 'react';
import {
  Box,
  Image,
  Heading,
  Text,
  Button,
  ButtonGroup,
  Grid,
  Divider,
  Flex,
  useDisclosure,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Stack,
  VStack,
  HStack,
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { SimpleGrid } from '@chakra-ui/react';

export default function ShowCart({ item }) {
  return (
    <>
    <Flex justifyContent="center">
      <Box width="md" margin="4">
        <Card key={item.id} height="auto" borderWidth="1px" borderRadius="lg" overflow="hidden">

          <CardHeader display="flex" justifyContent="center" alignItems="center" mb={-87}>
            <Heading size="md">{item.title}</Heading>
          </CardHeader>

          <CardBody display="Flex" justifyContent="center" alignItems="center">
            <VStack spacing={2} align="center">
              <HStack>
              <Button size="md" colorScheme="blue"> +</Button>
                <Image src={item.img} alt={item.title} objectFit="cover" height="200px" />
                <Button size="md" colorScheme="blue"> - </Button>
            </HStack>  
              <VStack mt={-10}>
                <Text fontSize="sm">Total Quentity : {item.Quentity}</Text>
                <Text fontSize="sm">Total Amount : {item.amount}</Text>
              </VStack>
            </VStack>

          </CardBody>

          <CardFooter justifyContent="center" bg="gray.100" py="2">
            <ButtonGroup variant="outline" spacing="4">
              <Button size="sm" colorScheme="blue" bg={"blue"}>
                Order
              </Button>
              <Button size="sm" colorScheme="black" bg={'grey'}>
                Add to Cart
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>
        
      </Box> 
    </Flex>

   
    </>
    

    
  );
}
