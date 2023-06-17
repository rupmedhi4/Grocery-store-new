import React, { useState } from 'react';
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
  SimpleGrid,
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { AddToCartHandler } from '../Redux/Slices/ShoppingCartSlices';

export default function AllCarts({ product, id }) {
  const productArray = useSelector((state) => state.ShoppingCartSlices.dummyArray);
  const dispatch = useDispatch();
  const [isHovered, setIsHovered] = useState(false);

  const addHandler = (id) => {
    const filteredArray = productArray.filter((item) => item.id === id);
    dispatch(AddToCartHandler({ filteredArray, id }));
  };

  return (
    <Card
      key={id}
      boxShadow={isHovered ? 'lg' : 'md'}
      borderRadius="md"
      overflow="hidden"
      position="relative"
      transform={isHovered ? 'scale(1.1)' : 'scale(1)'}
      transition="transform 0.3s ease"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
     // mx={4} // Add horizontal gap
      my={8} // Add vertical gap
      w="100%" // Make the cart responsive
      maxW="sm" // Limit the maximum width of the cart
      mx="auto" // Center the cart
    >
      <Image src={product.img} alt={product.title} objectFit="cover" height="200px" align="center" />
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        transition="background-color 0.3s ease"
      />
      <Box p={4} bg={isHovered ? 'black' : 'blue.100'} align="center">
        <Heading size="md" mb={2} color={isHovered ? 'white' : 'black'}>
          {product.title}
        </Heading>
        <Text fontSize="sm" mb={4} color={isHovered ? 'white' : 'black'} align="center">
          Amount: {product.amount}
        </Text>
        <Text fontSize="md" mb={4} color={isHovered ? 'white' : 'black'}>
          {product.paragraph}
        </Text>
        <ButtonGroup d="flex" justifyContent="center">
          <Button
            size="sm"
            color={isHovered ? 'white' : 'black'}
            bg={isHovered ? 'blue' : 'orange'}
          >
            Order
          </Button>
          <Button
            size="sm"
            onClick={() => addHandler(product.id)}
            color={isHovered ? 'white' : 'black'}
            bg={isHovered ? 'blue' : 'orange'}
          >
            Add to Cart
          </Button>
        </ButtonGroup>
      </Box>
    </Card>
  );
}

