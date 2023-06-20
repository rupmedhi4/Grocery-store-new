import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Input,
  Image,
  Box,
  HStack,
  Flex,
  ButtonGroup,
  Stack,
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { Text } from '@chakra-ui/react';
import { QuantityIncrease, QuantityDecrease, removeCart, clearCartHandler } from '../Redux/Slices/ShoppingCartSlices';

export default function CartDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const user = useSelector((state) => state.ShoppingCartSlices.addToCart);
  const subAmount = useSelector((state) => state.ShoppingCartSlices.amount);
  const dispatch = useDispatch();

  const increaseHandler = (id) => {
    dispatch(QuantityIncrease(id))
  }
  const decreaseHandler = (id) => {
    dispatch(QuantityDecrease(id))
  }

  return (
    <>
      <Button
        ref={btnRef}
        colorScheme="teal"
        onClick={onOpen}
        _hover={{ transform: 'scale(1.1)' }}
        bg="blue.500"
        _active={{ bg: 'blue.600' }}
      >
        Add to cart {user.length}
      </Button>

      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size="md"
        _hover={{ transform: 'scale(1.1)' }}
       
       
      >
        <DrawerOverlay />
        <DrawerContent >

          <DrawerBody
            height='400px'
            overflowY={user.length > 3 ? 'scroll' : 'initial'}
          bg={"linear-gradient(0deg, rgba(238,9,21,1) 11%, rgba(226,16,52,1) 31%, rgba(195,34,132,1) 66%);"}
          >
            <Flex align='center' justify='space-between' mt={"8"} mr={"-3"}
            ml={"-9"}
            >
              <Box ml={"6"} color={"white"}>My Carts ({user.length})</Box>
              <HStack >
                <Button onClick={onClose} bg={"white"} color={"black"} h={"7"} w={"12"}>Close</Button>
                <Button onClick={() => (dispatch(clearCartHandler()))} bg={"white"} h={"7"} w={"21"} color={"black"}>Clear Carts</Button>
              </HStack>
            </Flex>

            {user.map((add) => (
              add.map((item) => (
                <Box key={item.id} py={2} borderBottom='1px solid #ddd' align='center' height={"300"} >
                  <HStack align='center' justify='space-between' ml={"170"} >
                    <Box>{item.title}</Box>
                    <Button onClick={() => (dispatch(removeCart(item.id)))}>X</Button>
                  </HStack>
                  <Text>Total Quantity : {item.Quantity}</Text>
                  <DrawerBody mt={"-10"} overflowY={'hidden'}>
                    <Image src={item.img} alt={item.title} objectFit='cover' height='200px' />
                    <Text mt={"-10"} >Price : {item.amount}</Text>
                  </DrawerBody>
                  <ButtonGroup >
                    <Button onClick={() => (increaseHandler(item.id))}  bg={"orange"} color={"black"}>+</Button>
                    <Button onClick={() => (decreaseHandler(item.id))}  bg={"orange"} color={"black"} >-</Button>
                  </ButtonGroup>
                </Box>
              ))
            ))}
          </DrawerBody>
          <DrawerFooter justifyContent="space-between" bg={"#630d1f"}>
            <Button variant="outline" mr={3} onClick={onClose} bg={"orange"} color={"black"}>
              Cancel
            </Button>
            <Box>
              <Text>Subtotal Amount</Text>
              <Text>Rs {subAmount} </Text>
            </Box>

          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}