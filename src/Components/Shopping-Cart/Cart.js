import React from 'react';
import { useSelector } from 'react-redux';
import AllCarts from './AllCarts';
import { SimpleGrid } from '@chakra-ui/react';

export default function Cart({user}) {
  const productArray = useSelector((state) => state.ShoppingCartSlices.dummyArray);

  return (
    <SimpleGrid columns={3} spacing={8} justifyContent="center">
      {productArray.map((item) => (
        <AllCarts product={item} key={item.id} id={item.id} />
      ))}
    </SimpleGrid>
  );
}
