import React, { useState, useEffect } from 'react';
import {
  Box,
  Image,
  Heading,
  Text,
  Button,
  ButtonGroup,
  Card,
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { setDoc, doc, onSnapshot } from 'firebase/firestore';
import { db } from '../Firebase/FireBase';
import { AddToCartHandler } from '../Redux/Slices/ShoppingCartSlices';

export default function AllCarts({ product, id, user }) {

  const productArray = useSelector((state) => state.ShoppingCartSlices.dummyArray);
  const dispatch = useDispatch();
  const [isHovered, setIsHovered] = useState(false);

  const [Data , setData] = useState([])
  

  useEffect(() => {
    if (user) {
      const docRef = doc(db, "newdata3", user.uid);
      const unsubscribe = onSnapshot(docRef, (docSnap) => {
        if (docSnap.exists()) {
          setData(docSnap.data().data);
        } else {
          console.log("no doc");
        }
      });
      return () => unsubscribe(); // Cleanup the listener when the component unmounts

    } else {
      console.log("error");
    }
  }, [user]); 

  const addHandler = async () => {
    try {
  
      const filteredArray = productArray.filter((item) => item.id === id);
      const isDuplicate = Data.some((item) => item.id === id);
  
      if (isDuplicate) {
        // console.log("Item already exists. Cannot add duplicate.");
        // console.log(isDuplicate)
        alert("Item already exists. Cannot add duplicate.")

      } else {
        await setDoc(doc(db, "newdata3", user.uid), {
          data: [...filteredArray, ...Data],
        });
        alert("Item added successfully")

        // console.log("Item added successfully.");
        // console.log(isDuplicate)
      }
    } catch (error) {
      console.log("Error adding item:", error);
    }
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
            onClick={addHandler}
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

